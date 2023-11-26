import { createCanvas } from '../../lib/learnhypertext.mjs';
import { Layer } from './monifestoLayer.mjs';
import { Palette } from './monifestoPalette.mjs';

class Monifesto {
    drawLine () {
        const sCanvasId = 'canvas';
        const oCanvas = createCanvas(sCanvasId);
        const oContext = oCanvas.getContext('2d');
        oContext.strokeStyle = 'black';
        const oLine = {
            path: [{
                x1: 40,
                y1: 120,
                x2: 120,
                y2: 120
            }]
        };
        oContext.beginPath();
        oLine.path.forEach(oEdge => {
            oContext.moveTo(oEdge.x1, oEdge.y1);
            oContext.lineTo(oEdge.x2, oEdge.y2);
        });
        oContext.closePath();
        oContext.stroke();
    }

    makeLayer () {
        const sCanvasId = 'canvas';
        const oCanvas = createCanvas(sCanvasId);
        const oContext = oCanvas.getContext('2d');
        oContext.fillStyle = Palette.lightblue;
        oContext.fillRect(0, 0, oCanvas.width, oCanvas.height);
        const oLayer = new Layer();
        return oLayer;
    }
}

export default Monifesto;