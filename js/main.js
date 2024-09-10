'use strict'
var diameter = 100

function onBallClick(elBall){
    diameter += 50
    elBall.style.width = diameter + 'px'
    elBall.style.height = diameter + 'px'
    elBall.innerText = diameter
}