function 燈數 (num: number) {
    if (num < 6) {
        X = num - 1
        y = 0
    } else if (num >= 6 && num < 9) {
        X = 4
        y = num - 5
    } else if (num >= 9 && num < 14) {
        X = 13 - num
        y = 4
    } else if (num >= 14 && num <= 16) {
        X = 0
        y = 17 - num
    }
    led.plot(X, y)
}
let y = 0
let X = 0
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    # # # # #
    # . . . .
    # # # # #
    # . . . .
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # # # # #
    # . . . #
    # . . . #
    `)
basic.showLeds(`
    # . . . #
    # . . . #
    # # # # #
    # . . . #
    # . . . #
    `)
let a = 0
basic.forever(function () {
	
})
loops.everyInterval(100, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    a += 1
    燈數(a)
    if (a >= 17) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            # # # # #
            `)
    }
})
