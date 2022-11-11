'use strict';

//-------------------CONSTANTES------------------- 
const select = document.querySelector('.js-select');
const btn = document.querySelector('.js-btn');
const subtitle = document.querySelector('.js-subtitle');
//CONSTANTES PARA EL BONUS
const btnRestart = document.querySelector('.js-btn--restart');
const scorePlayer = document.querySelector('.js-player');
const scorePc = document.querySelector('.js-pc');

//VARIABLES PARA EL BONUS (valores del contador, empiezan desde 0)
let pointsPc = 0; //putos PC
let pointsPlayer = 0; //Puntos usuario
let scoreTotal = 0; //Puntos totales, cuando llegue a 10 se parará el juego.

//FUNCIONES

//-------------------FUNCIONES-------------------

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
    let result = 0;
    if (randomNumber === 1 || randomNumber === 2 || randomNumber === 3) {
        result = 2;
    } else if (randomNumber === 4) {
        result = 3;
    } else {
        result = 5;
    }
    return result;
};

//función batalla
function compareResult(){
    const evilValue = chooseEvilRace();
    const userValue = userChoice(); 
    if (userValue < evilValue){
        subtitle.innerHTML = '¡Ha ganado el Ejército del Mal! Vuelve a Intentarlo.';
        pointsPc = pointsPc+1; //Le sumo uno a uno los puntos que va consiguiendo cuando se cumple esta condición
        scorePc.innerHTML = `Computadora: ${pointsPc}`; //Añade en pantalla un punto por cada vez que gana

    }

    else if (userValue === evilValue){
        subtitle.innerHTML = 'Empate';
    }
    
    else {
        subtitle.innerHTML = '¡Ha ganado el Ejército del Bien! Enhorabuena.';
        pointsPlayer = pointsPlayer+1; //Le sumo uno a uno los puntos que va consiguiendo cuando se cumple esta condición
        scorePlayer.innerHTML = `Jugador: ${pointsPlayer}`; //Añade en pantalla un punto por cada vez que gana
    }
    console.log(evilValue,userValue);
}

//función para reestablecer el juego llegado a los 10 puntos
function completeGame (){
    scoreTotal = scoreTotal+1; //Se reinicia cuando el contador llega a 10
    if (scoreTotal === 10){
        btn.classList.add("hidden"); //oculta el botón normal 
        btnRestart.classList.remove("hidden"); //muestra el botón de reset
    
    if (pointsPlayer < pointsPc) { //condicional. si los puntos del jugador son menores que los del pc
        subtitle.innerHTML = '¡La computadora ha ganado la partida!';
        }
    
    else if (pointsPlayer === pointsPc){ //condicional. si los puntos del jugador son iguales que los del pc
        subtitle.innerHTML = 'Empate';
        }
    
    else { //condicional. si los puntos del jugador son mayores que los del pc
        subtitle.innerHTML = '¡Has ganado la partida!';
        }
    }
};


//Función manejadora 

function handleClick(e){ 
    e.preventDefault(); 
    const pointsPlayer = parseInt(select.value);
    if (pointsPlayer === 0) { //condicional. si los puntos del jugador son igual a 0 no se puede iniciar el juego.
        subtitle.innerHTML = '¡Seleccione una raza, por favor!';
        }

    else { //sino es así, el juego se inicia con normalidad llamando a las otras dos funciones. 

    compareResult();
    completeGame ();

    }
};


//EVENTOS
btn.addEventListener('click',handleClick);
