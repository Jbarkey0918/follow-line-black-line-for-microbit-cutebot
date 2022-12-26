input.onButtonPressed(Button.A, function () {
    speed += -1
    basic.showNumber(speed)
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    speed += 1
    basic.showNumber(speed)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.setBuiltInSpeakerEnabled(false)
})
let speed = 0
speed = 25
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(speed, 0)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(0, speed)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(speed, speed)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
        cuteBot.stopcar()
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
