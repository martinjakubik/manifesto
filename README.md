*Monifesto* is a library for drawing on a layered cavnas.

Here's how I'd like *Monifesto* to work.

# Draw a line

    import Monifesto
    monifesto = new Monifesto()
    monifesto.drawLine()

![horizontal black line on white layer](monifesto-sample-drawing0.png)

# Draw a layer

    import Monifesto
    monifesto = new Monifesto()
    background = monifesto.makeLayer()
    background.color(lightblue)

![horizontal black line on white layer](monifesto-sample-drawing1.png)

# Draw on a few layers

    import Monifesto
    monifesto = new Monifesto()
    background = monifesto.makeLayer(lightblue)
    foreground = monifesto.makeLayer()
    foreground.drawLine()

![horizontal black line on light blue layer](monifesto-sample-drawing2.png)

