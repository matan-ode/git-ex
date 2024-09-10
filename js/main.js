'use strict'
var diameter = 100
// const ball1Color = 'yellow'
// const ball2Color = 'green' 

function onBallClick(elBall, maxDiameter) {
    diameter += getRandomInt(20, 61)
    if (diameter > maxDiameter) diameter = 100

    elBall.style.width = diameter + 'px'
    elBall.style.height = diameter + 'px'
    elBall.innerText = diameter

    elBall.style.backgroundColor = getRandomColor()
}

function onBallClick3() {
    const elBall1 = document.querySelector('.ball')
    const ballStyle1 = getComputedStyle(elBall1)
    const ballColor1 = ballStyle1.backgroundColor
    const ballSize1 = ballStyle1.width

    const elBall2 = document.querySelector('.ball2')
    const ballStyle2 = getComputedStyle(elBall2)
    const ballColor2 = ballStyle2.backgroundColor
    const ballSize2 = ballStyle2.width

    elBall1.style.backgroundColor = ballColor2
    elBall2.style.backgroundColor = ballColor1

    elBall1.style.width = ballSize2
    elBall1.style.height = ballSize2
    elBall2.style.width = ballSize1
    elBall2.style.height = ballSize1
}