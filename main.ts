grove.onGesture(GroveGesture.Right, function () {
    passage += -1
    music.playTone(147, music.beat(BeatFraction.Whole))
    _4Digit.show(passage)
    basic.pause(100)
})
grove.onGesture(GroveGesture.Left, function () {
    passage += 1
    music.playTone(698, music.beat(BeatFraction.Whole))
    _4Digit.show(passage)
    basic.pause(100)
})
let passage = 0
let _4Digit: grove.TM1637 = null
grove.initGesture()
_4Digit = grove.createDisplay(DigitalPin.P2, DigitalPin.P16)
passage = 0
basic.forever(function () {
	
})
