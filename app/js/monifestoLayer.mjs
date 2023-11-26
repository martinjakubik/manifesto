import ObjectTypeEnum from './monifestoObjectTypes.mjs';
import StartDimensions from './monifestoDimensions.mjs';
import Palette from './monifestoPalette.mjs';

class Layer {
    constructor (monifesto) {
        this.monifesto = monifesto;
        this.monifesto.context.fillStyle = Palette.lightblue;
        this.monifesto.context.fillRect(0, 0, this.monifesto.canvas.width, this.monifesto.canvas.height);
    }

    line (dimensions = StartDimensions.line) {
        this.monifesto.context.strokeStyle = 'black';
        this.monifesto.context.lineWidth = 1;
        const nFreePathId = this.monifesto.getFreeId(ObjectTypeEnum.path);
        this.monifesto.paths[nFreePathId] = {
            path: [{
                x1: dimensions.x1,
                y1: dimensions.y1,
                x2: dimensions.x2,
                y2: dimensions.y2
            }]
        };
        this.monifesto.context.beginPath();
        this.monifesto.paths[nFreePathId].path.forEach(oEdge => {
            this.monifesto.context.moveTo(oEdge.x1, oEdge.y1);
            this.monifesto.context.lineTo(oEdge.x2, oEdge.y2);
        });
        this.monifesto.context.closePath();
        this.monifesto.context.stroke();
    }

    text (sText = 'text', dimensions = StartDimensions.text) {
        this.monifesto.context.font = '10px sans-serif';
        this.monifesto.context.fillStyle = 'black';
        this.monifesto.context.fillText(sText, dimensions.x1, dimensions.y1);
    }
}

export default Layer;