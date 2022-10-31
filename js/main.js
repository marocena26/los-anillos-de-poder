'use strict';

//CONSTANTES 
const select = document.querySelector('.js-select');
const btn = document.querySelector('.js-btn');
const subtitle = document.querySelector('.js-subtitle');

//Razas malvadas 
const random = 0;
const raceSureñosMalos = 2;
const raceOrcos = 2;
const raceGoblins = 2;
const raceHuargos = 3;
const raceTrolls = 5;

//FUNCIONES

//Función número random al entrar en la página 
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

//Función que recoge el valor del select
function userChoice(){
    const selectValue = parseInt(select.value);
    return selectValue;
    }


//Función que asocia el número random a la raza
const chooseEvilRace = () => { 
    const randomNumber = getRandomNumber(5); 
    console.log(randomNumber); 
    if(randomNumber === 1){
         raceSureñosMalos;

    } else if (randomNumber === 2) {
         raceOrcos;

    } else if (randomNumber === 3) {
         raceGoblins;

    } else if (randomNumber === 4) {
         raceHuargos;

    } else if (randomNumber === 5) {
         raceTrolls
    }
};

//función batalla

function compareResult(){
    if (userChoice < chooseEvilRace){
        subtitle.innerHTML = '¡Ha ganado el Ejército del Mal! Vuelve a Intentarlo.';
    }else if (userChoice === chooseEvilRace){
        subtitle.innerHTML = 'Empate';
    }else{
        subtitle.innerHTML = '¡Ha ganado el Ejército del Bien! Enhorabuena.';
    }
}


//Función manejadora 

function handleClick(e){ 
    e.preventDefault(); 
    userChoice();
    chooseEvilRace ();
    compareResult()
};

//EVENTOS
btn.addEventListener('click',handleClick);
