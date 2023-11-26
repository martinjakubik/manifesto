import Monifesto from '../../app/js/index.mjs';

const monifesto = new Monifesto();
monifesto.layer();
monifesto.line();
monifesto.line({x1: 80, y1:400, x2:520, y2:400});
monifesto.text();
monifesto.text('monifesto', {x1: 80, y1:400});
const foreground = monifesto.layer({width: 600, height: 600}, {fill: '#add8e6a0'});
foreground.text('foreground layer');