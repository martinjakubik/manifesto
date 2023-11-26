import { createCanvas } from '../../lib/learnhypertext.mjs';
import { Layer } from './monifestoLayer.mjs';
import { Palette } from './monifestoPalette.mjs';

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

    drawLine () {
        this.context.strokeStyle = 'black';
        const nFreePathId = this.getFreePathId();
        this.paths[nFreePathId] = {
            path: [{
                x1: 40,
                y1: 120,
                x2: 120,
                y2: 120
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

    makeLayer () {
        this.context.fillStyle = Palette.lightblue;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        const oLayer = new Layer();
        return oLayer;
    }
}

export default Monifesto;