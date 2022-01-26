function ezkerreko_intermitentea () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.clearScreen()
    }
}
function eskuineko_intermitentea () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
        basic.clearScreen()
    }
}
radio.setGroup(3)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
    	
    }
    if (input.buttonIsPressed(Button.A)) {
    	
    }
    if (input.buttonIsPressed(Button.A)) {
    	
    }
})
