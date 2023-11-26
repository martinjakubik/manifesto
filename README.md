*Monifesto* is a library for drawing on a layered canvas.

Here's how I'd like *Monifesto* to work.

# Draw a line

    import Monifesto
    monifesto = new Monifesto()
    monifesto.line()

![horizontal black line on white layer](monifesto-sample-drawing0.png)

# Draw a layer

    import Monifesto
    monifesto = new Monifesto()
    background = monifesto.layer()
    background.color(lightblue)

![light blue background](monifesto-sample-drawing1.png)

# Draw on a few layers

    import Monifesto
    monifesto = new Monifesto()
    background = monifesto.layer(lightblue)
    foreground = monifesto.layer()
    foreground.line()

![horizontal black line on light blue layer](monifesto-sample-drawing2.png)

