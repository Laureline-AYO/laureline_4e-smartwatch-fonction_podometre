function podometre () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showString("Remise a zero")
        basic.pause(500)
        pas = 0
        basic.showNumber(pas)
    }
    if (input.isGesture(Gesture.Shake) || input.isGesture(Gesture.LogoDown)) {
        pas += 1
        if (input.buttonIsPressed(Button.A)) {
            basic.showNumber(pas)
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        if (pas >= 8000) {
            basic.showString("Bravo !")
        } else {
            basic.showString("Marchez encore !")
        }
    }
}
let pas = 0
pas = 0
basic.forever(function () {
    podometre()
})
