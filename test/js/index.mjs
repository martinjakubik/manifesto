import Monifesto from '../../app/js/index.mjs';

const monifesto = new Monifesto();
monifesto.layer();
monifesto.line();
monifesto.line({x: 80, y:400, width:440, height:0});
monifesto.text();
monifesto.text('background layer', {x: 80, y:400});
const foreground = monifesto.layer({width: 600, height: 600}, {fill: '#add8e6a0'});
foreground.text('foreground layer', {x: 80, y: 500});