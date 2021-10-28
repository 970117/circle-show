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
        basic.pause(100)
    }
    led.plot(X, y)
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index < 17; index++) {
        a += 1
        燈數(a)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    for (let index = 0; index < 17; index++) {
        a += 1
        燈數(a - 1)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    for (let index = 0; index < 17; index++) {
        a += 1
        燈數(18 - a)
        basic.pause(100)
    }
})
let y = 0
let X = 0
let a = 0
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
a = 0
basic.forever(function () {
	
})
