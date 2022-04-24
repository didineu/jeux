input.onGesture(Gesture.LogoUp, function () {
    if (y < 4) {
        led.unplot(x, y)
        y += 1
        led.plot(x, y)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (x < 4) {
        led.unplot(x, y)
        x += 1
        led.plot(x, y)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (x > 0) {
        led.unplot(x, y)
        x += -1
        led.plot(x, y)
    }
})
input.onButtonPressed(Button.AB, function () {
    led.plot(x, y)
})
input.onGesture(Gesture.LogoDown, function () {
    if (y < 0) {
        y += -1
        led.plot(x, y)
        led.unplot(x, y)
    }
})
let y = 0
let x = 0
x = 0
y = 0
basic.forever(function () {
	
})
