*Manifesto* is a library for drawing on a layered cavnas.

Here's how I'd like *Manifesto* to work.

# Draw a line

    import Manifesto
    manifesto = new Manifesto()
    manifesto.drawLine()

![horizontal black line on white layer](manifesto-sample-drawing0.png)

# Draw a layer

    import Manifesto
    manifesto = new Manifesto()
    background = manifesto.makeLayer()
    background.color(lightblue)

![horizontal black line on white layer](manifesto-sample-drawing1.png)

# Draw on a few layers

    import Manifesto
    manifesto = new Manifesto()
    background = manifesto.makeLayer(lightblue)
    foreground = manifesto.makeLayer()
    foreground.drawLine()

![horizontal black line on light blue layer](manifesto-sample-drawing2.png)

