input.onButtonPressed(Button.A, function () {
    if (direction == 3) {
        Counter += 1
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 5000, 0, 255, 0, 25, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        direction = randint(1, 3)
    } else {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 4926, 255, 0, 25, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
    basic.showNumber(Counter)
    basic.pause(50)
})
input.onButtonPressed(Button.AB, function () {
    if (direction == 1) {
        Counter += 1
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 5000, 0, 255, 0, 25, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        direction = randint(1, 3)
    } else {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 4926, 255, 0, 25, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
    basic.showNumber(Counter)
    basic.pause(50)
})
input.onButtonPressed(Button.B, function () {
    if (direction == 2) {
        Counter += 1
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 5000, 0, 255, 0, 25, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        direction = randint(1, 3)
    } else {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 4926, 255, 0, 25, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
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
