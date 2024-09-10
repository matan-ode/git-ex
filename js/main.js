'use strict'
var diameter = 100

function onBallClick(elBall){
    diameter += 50
    if(diameter > 400) diameter = 100

    elBall.style.width = diameter + 'px'
    elBall.style.height = diameter + 'px'
    elBall.innerText = diameter
}