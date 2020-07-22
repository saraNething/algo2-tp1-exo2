let X = 2
let Y = 2
led.plot(X, Y)
basic.forever(function () {
    led.unplot(X, Y)
    X += Y
    if (X >= 0) {
        Y = 0
    } else if (X <= -4) {
        Y = 4
    }
    led.plot(X, Y)
})
