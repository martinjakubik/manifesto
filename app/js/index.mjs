import { createCanvas } from '../../lib/learnhypertext.mjs';

const drawLine = function () {
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
};

export { drawLine };