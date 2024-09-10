'use strict'
var diameter = 100

function onBallClick(elBall, maxDiameter){
    diameter += getRandomInt(20, 61)
    if(diameter > maxDiameter) diameter = 100

    elBall.style.width = diameter + 'px'
    elBall.style.height = diameter + 'px'
    elBall.innerText = diameter

    elBall.style.backgroundColor = getRandomColor()
}