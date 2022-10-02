/**
 * Activate the Microbit
 */
// Activate the device
input.onButtonPressed(Button.A, function () {
    activate = 0
})
function alarm () {
    // If Microbit is activated, then conduct the following items
    if (activate == 0) {
        basic.showIcon(IconNames.Sad)
        // playing alarm sound
        soundExpression.sad.play()
    }
}
// Deactivate the Alarm
input.onButtonPressed(Button.B, function () {
    activate = 1
})
let activate = 0
activate = 0
basic.forever(function () {
    // If temperature ≥ 30, then alarm
    if (input.temperature() >= 25) {
        // then alarm function called
        alarm()
    }
})
basic.forever(function () {
    // If shake, then alarm
    if (input.isGesture(Gesture.Shake)) {
        alarm()
    }
})
basic.forever(function () {
    // Reset the Microbit
    if (activate == 1) {
        control.reset()
    }
})
