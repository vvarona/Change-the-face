'use strict'
const happyFace = document.querySelector('.happy');
const sadFace = document.querySelector('.sad');
const selectInput = document.querySelector('.js_select');
const button = document.querySelector('.js_button');
const background = document.querySelector('.main');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2')
const optionValue1 = option1.value;



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function changeBgColor() {
    const number = parseInt(getRandomInt(100));
    if (number%2 === 0) {
        background.classList.remove('orange');
        background.classList.add('yellow');
    } else {
        background.classList.remove('yellow');
        background.classList.add('orange');
    }
}

function changeFace() {
    if (selectInput.value === optionValue1) {
        sadFace.classList.add('hide');
        happyFace.classList.remove('hide');
        console.log('option1');
    } else {
        happyFace.classList.add('hide');
        sadFace.classList.remove('hide');
        console.log('option2');
    }
    //console.log(parseInt(getRandomInt(100)));
};

function clickEvent() {
    changeFace();
    changeBgColor();
}

button.addEventListener('click', clickEvent);