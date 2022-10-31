'use strict';
/*### ¿Qué tenemos que hacer antes de empezar a programar?

1. Tener nuestra lista de tareas. *
2. Clonar el repositorio.*
3. Leer bien el enunciado y preguntar las dudas.*
4. Crear el HTML.*
5. Crear el CSS mínimo y necesario (no es prioritario). 
6. JS: crear las constantes (`document.querySelector).*
7. Escuchar evento sobre el botón. *
1er proceso -- Al iniciar el juego el ordenador generará de manera aleatoria un integrante del ejército del mal, entre los cinco disponibles
2do proceso -- Al dar clic a "Batalla" aparece en pantalla el resultado de la batalla, para esto compara el valor de cada raza y gana la raza de mayor valor.
3er proceso -- Comparar el valor de la raza que la jugadora ha seleccionado con la raza aleatoria y pintar el resultado correspondientes en la pantalla. */

//CONSTANTES 
const select = document.querySelector('.js-select');
const btn = document.querySelector('.js-btn');
const subtitle = document.querySelector('.js-subtitle');

//FUNCIONES

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

function evilRace (){
    const race1 = 'Sureños malos';
    const race2 = 'Orcos';
    const race3 = 'Goblins';
    const race4 = 'Huargos';
    const race5 = 'Trolls';
}

const chooseEvilRace = () => { 
    const randomNumber = getRandomNumber(6); 
    console.log(randomNumber); 
    if(randomNumber === 1){
        
        
    } else if (randomNumber === 2) {

    } else if (randomNumber === 3) {

    } else if (randomNumber === 4) {

    } else if (randomNumber === 5) {

    }
};


function handleClick(e){ 
    e.preventDefault(); 
    chooseEvilRace ();
};


//EVENTOS
btn.addEventListener('click',handleClick);
