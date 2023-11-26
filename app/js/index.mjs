import { createCanvas } from '../../lib/learnhypertext.mjs';
import Layer from './monifestoLayer.mjs';
import Palette from './monifestoPalette.mjs';
import StartDimensions from './monifestoDimensions.mjs';

class Monifesto {

    MAX_PATH_ID = 1000;

    constructor () {
        this.canvasId = 'canvas';
        this.canvas = createCanvas(this.canvasId);
        this.context = this.canvas.getContext('2d');
        this.pathId = -1;
        this.paths = {};
    }

    getFreePathId () {
        let nFreePathId = this.MAX_PATH_ID;
        for (let nPathId = -1; nPathId < this.MAX_PATH_ID; nPathId++) {
            if(!this.paths[nPathId]) {
                nFreePathId = nPathId;
            }
        }
        return nFreePathId;
    }

    line (x1 = StartDimensions.line.x, y1 = StartDimensions.line.y, x2 = StartDimensions.line.x, y2 = StartDimensions.line.length) {
        this.context.strokeStyle = 'black';
        const nFreePathId = this.getFreePathId();
        this.paths[nFreePathId] = {
            path: [{
                x1: x1,
                y1: y1,
                x2: x2,
                y2: y2
            }]
        };
        this.context.beginPath();
        this.paths[nFreePathId].path.forEach(oEdge => {
            this.context.moveTo(oEdge.x1, oEdge.y1);
            this.context.lineTo(oEdge.x2, oEdge.y2);
        });
        this.context.closePath();
        this.context.stroke();
    }

    layer () {
        this.context.fillStyle = Palette.lightblue;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        const oLayer = new Layer();
        return oLayer;
    }

    text (sText = 'text') {
        this.context.font = '10px sans-serif';
        this.context.fillStyle = 'black';
        this.context.fillText(sText, StartDimensions.text.x, StartDimensions.text.y);
    }
}

export default Monifesto;