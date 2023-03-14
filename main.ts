input.onButtonPressed(Button.A, function () {
    if (direction == 3) {
        Counter += 1
        music.playTone(262, music.beat(BeatFraction.Whole))
        direction = randint(1, 3)
    } else {
        music.playTone(131, music.beat(BeatFraction.Whole))
    }
    basic.showNumber(Counter)
    basic.pause(50)
})
input.onButtonPressed(Button.AB, function () {
    if (direction == 1) {
        Counter += 1
        music.playTone(262, music.beat(BeatFraction.Whole))
        direction = randint(1, 3)
    } else {
        music.playTone(131, music.beat(BeatFraction.Whole))
    }
    basic.showNumber(Counter)
    basic.pause(50)
})
input.onButtonPressed(Button.B, function () {
    if (direction == 2) {
        Counter += 1
        music.playTone(262, music.beat(BeatFraction.Whole))
        direction = randint(1, 3)
    } else {
        music.playTone(131, music.beat(BeatFraction.Whole))
    }
    basic.showNumber(Counter)
    basic.pause(50)
})
let direction = 0
let Counter = 0
Counter = 0
direction = 0
basic.forever(function () {
    if (direction == 1) {
        basic.showArrow(ArrowNames.North)
    } else if (direction == 2) {
        basic.showArrow(ArrowNames.East)
    } else if (direction == 3) {
        basic.showArrow(ArrowNames.West)
    } else {
    	
    }
    basic.pause(100)
    direction = randint(1, 3)
})
