datalogger.onLogFull(function () {
    basic.showIcon(IconNames.Yes)
    Loop = 0
    LoopCount = 0
})
// Aボタンで測定開始
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    Loop = 1
})
// A+Bボタンでデータクリア
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.No)
    datalogger.deleteLog(datalogger.DeleteType.Full)
    Loop = 0
    LoopCount = 0
    control.reset()
})
let LoopCount = 0
let Loop = 0
Loop = 0
LoopCount = 0
let DataPlot = 300
datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
datalogger.setColumnTitles("P0")
basic.showIcon(IconNames.Happy)
// 測定周期：最短20ms
// 測定点数：変数DataPlotで設定
loops.everyInterval(20, function () {
    if (Loop == 1 && LoopCount <= DataPlot) {
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
