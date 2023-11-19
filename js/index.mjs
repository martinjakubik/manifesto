import { createCanvas } from './lib/learnhypertext';

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
    this.context.beginPath();
    oLine.path.forEach(oEdge => {
        this.context.moveTo(oEdge.x1, oEdge.y1);
        this.context.lineTo(oEdge.x2, oEdge.y2);
    });
    this.context.closePath();
    this.context.stroke();
};

export { drawLine };