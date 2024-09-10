'use strict'
var diameter = 100

function onBallClick(elBall){
    diameter += getRandomInt(20, 61)
    if(diameter > 400) diameter = 100

    elBall.style.width = diameter + 'px'
    elBall.style.height = diameter + 'px'
    elBall.innerText = diameter
}