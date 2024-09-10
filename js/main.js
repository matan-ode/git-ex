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

function onBallClick3(){
    const elBall1 = document.querySelector('.ball')
    onBallClick(elBall1, 200)
    const elBall2 = document.querySelector('.ball2')
    onBallClick(elBall2, 500)
}