const buttonStart = document.querySelector('#start')
const buttonStop = document.querySelector('#stop')
const buttonReset = document.querySelector('#reset')

let safeInterval = ''

buttonStart.addEventListener('click', function() {
    if(!safeInterval)
        safeInterval = setInterval(changeBg, 1000)

    console.log("Started");
})

buttonStop.addEventListener('click', function() {
    console.log("Stopped");
    clearInterval(safeInterval)
    safeInterval = null
})

buttonReset.addEventListener('click', function() {
    console.log("Reset to Default color");
    document.body.style.backgroundColor = 'black'
    clearInterval(safeInterval)
    safeInterval = null
})

function getRandomColor () {
    var hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);
}

function changeBg() {
    const bgColor = getRandomColor()
    console.log(`Color id: ${bgColor}`);
    document.body.style.backgroundColor = bgColor
}