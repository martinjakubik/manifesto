import { createCanvas } from '../../lib/learnhypertext.mjs';
import Layer from './monifestoLayer.mjs';
import Palette from './monifestoPalette.mjs';
import StartDimensions from './monifestoDimensions.mjs';

class Monifesto {

    #MAX_PATH_ID = 1000;

    constructor () {
        // sCanvasId: any, sClasses: any, nZindex: number | undefined, oParent: HTMLElement | undefined, nWidth: any, nHeight: any
        const sClasses = '';
        const nZindex = 0;
        const oParent = document.body;
        const nWidth = StartDimensions.canvas.width;
        const nHeight = StartDimensions.canvas.height;
        this.canvasId = 'canvas';
        this.canvas = createCanvas(this.canvasId, sClasses, nZindex, oParent, nWidth, nHeight);
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

    line (dimensions = StartDimensions.line) {
        this.context.strokeStyle = 'black';
        this.context.lineWidth = 1;
        const nFreePathId = this.getFreePathId();
        this.paths[nFreePathId] = {
            path: [{
                x1: dimensions.x1,
                y1: dimensions.y1,
                x2: dimensions.x2,
                y2: dimensions.y2
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

    text (sText = 'text', dimensions = StartDimensions.text) {
        this.context.font = '10px sans-serif';
        this.context.fillStyle = 'black';
        this.context.fillText(sText, dimensions.x1, dimensions.y1);
    }
}

export default Monifesto;