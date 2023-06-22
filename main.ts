// Aボタンで測定開始
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    Loop = 1
})
// Bボタンで測定終了
input.onButtonPressed(Button.B, function () {
    Loop = 0
    LoopCount = 0
    basic.showIcon(IconNames.Happy)
})
let LoopCount = 0
let Loop = 0
Loop = 0
LoopCount = 0
let DataPlot = 500
datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
datalogger.setColumnTitles("P0")
basic.showIcon(IconNames.Happy)
// 最短20ms
loops.everyInterval(20, function () {
    if (Loop == 1 && LoopCount < DataPlot) {
        datalogger.log(datalogger.createCV("P0", pins.analogReadPin(AnalogPin.P0)))
        LoopCount += 1
    } else if (Loop == 1 && LoopCount > DataPlot) {
        basic.showIcon(IconNames.Yes)
        Loop = 0
        LoopCount = 0
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)
    }
})
