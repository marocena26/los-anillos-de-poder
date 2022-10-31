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
         return raceSureñosMalos;

    } else if (randomNumber === 2) {
        return raceOrcos;

    } else if (randomNumber === 3) {
        return raceGoblins;

    } else if (randomNumber === 4) {
        return raceHuargos;

    } else if (randomNumber === 5) {
        return raceTrolls
    }
};

//función batalla
function compareResult(){
    const evilValue = chooseEvilRace();
    const userValue = userChoice(); 
    if (userValue < evilValue){
        subtitle.innerHTML = '¡Ha ganado el Ejército del Mal! Vuelve a Intentarlo.';
    }else if (userValue === evilValue){
        subtitle.innerHTML = 'Empate';
    }else{
        subtitle.innerHTML = '¡Ha ganado el Ejército del Bien! Enhorabuena.';
    }
    console.log(evilValue,userValue);
}



//Función manejadora 

function handleClick(e){ 
    e.preventDefault(); 
    compareResult()
};

//EVENTOS
btn.addEventListener('click',handleClick);
