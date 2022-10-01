let n = 0
basic.forever(function () {
    led.plotBarGraph(
    n,
    10
    )
    if (n > 10) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 500 || input.acceleration(Dimension.X) < -500) {
        n += 1
        basic.pause(100)
    }
})
