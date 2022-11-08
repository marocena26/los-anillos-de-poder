# Módulo 2: Ejercicio de evaluación intermedia

Trabajo realizado por la alumna María Elena Arocena López durante la evaluación intermedia del Módulo 2: JS. 

## Enunciado
El ejercicio consiste en desarrollar un juego de "LOS ANILLOS DE PODER" usando JavaScript. 
Antes de empezar, tenéis que crear un nuevo repositorio en GitHub desde GitHub Classroom usando este enlace. Una vez creado, lo clonaremos en nuestro ordenador y en la carpeta creada empezaremos a trabajar en el ejercicio.

> **NOTA:** No hace falta usar el Starter kit de Adalab.

## Descripción

¡La Tierra Media está en guerra! En ella lucharán razas leales a Sauron contra otras bondadosas que no quieren que el mal reine sobre sus tierras.

Cada raza tiene asociado una fuerza entre 1 y 5:

- **Razas bondadosas:**
    - Raza 1: Pelosos con fuerza (1),
    - Raza 2: Sureños buenos con fuerza (2),
    - Raza 3: Enanos con fuerza (3),
    - Raza 4: Númenóreanos con fuerza (4),
    - Raza 5: Elfos con fuerza (5).
    
- **Razas malvadas:**
    - Raza 1: Sureños malos con fuerza (2),
    - Raza 2: Orcos con fuerza (2),
    - Raza 3: Goblins con fuerza (2),
    - Raza 4: Huargos con fuerza (3),
    - Raza 5: Trolls con fuerza(5).
    
Crea un programa que calcule el resultado de la batalla entre los 2 tipos de razas:

- El resultado puede ser que gane el bien, el mal, o exista un empate. Dependiendo del valor de la raza en la lucha.
- El usuario jugará el rol de una raza del ejército del bien y el ordenador el rol de una raza del ejército del mal.

## Indicaciones

![image](https://user-images.githubusercontent.com/113302094/200696160-dd22447e-be47-4113-a077-a4b7e5cd1494.png)

- Al iniciar el juego se muestra un desplegable para la usuaria seleccione el integrante del ejército del bien con quien desea jugar.
- Al iniciar el juego el ordenador generará de manera aleatoria un integrante del ejército del mal, entre los cinco disponibles.
- Al dar clic a "Batalla" aparece en pantalla el resultado de la batalla, para esto compara el valor de cada raza y gana la raza de mayor valor.
- Debajo, en el siguiente apartado aparecen los siguientes textos:
    - Al arrancar la página: Comienza la batalla.
    Cuando la jugadora introduzca una raza mayor que la raza aleatoria y pulse en Batalla: **¡Ha ganado el Ejército del Mal! Vuelve a Intentarlo**.
    Cuando la jugadora introduzca una raza menor que la raza aleatoria y pulse en Batalla: **¡Ha ganado el Ejército del Bien! Enhorabuena**.
    Cuando la jugadora introduzca una raza igual que la raza aleatoria y pulse en Batalla: **Empate**.

## Pasos para realizar el juego

Para realizar el juego tenemos que realizar las siguientes funcionalidades desde JavaScript:

1. Crear una maquetación mínima con el select, el botón y el espacio para el resultado.
2. Generar cinco números aleatorios entre 1 y 6 para el integrante del ejército el mal, con la ayuda de ```Math.random```  y ```Math.ceil```. Puedes usar la siguiente función, copia estas 3 líneas de código en vuestro JS y **no las modifiquéis**:
    
```bash
function getRandomNumber(max) {
return Math.ceil(Math.random() * max);
}

```
3. Comparar el valor de la raza que la jugadora ha seleccionado con la raza aleatoria y pintar el resultado correspondientes en la pantalla.
Según vayas trabajando en el ejercicio, haz nuevas versiones del mismo y sube los cambios a GitHub. De esta forma podremos ver cómo vas avanzando. También publica el resultado usando GitHub Pages (recuerda configurarlo en las preferencias del proyecto) y pon el enlace a GitHub Pages en la descripción del repositorio.

## Bonus

Si te queda tiempo y quieres completar las funcionalidades del juego, puedes hacer lo siguiente:

- En la parte inferior debe aparecer los puntos de cada jugadora. Agrega el código necesario para contar los puntos del jugador y del ordenador.
- El juego finaliza cuando llega a 10 movimientos, agrega el código necesario para que se muestre un botón **Reiniciar Juego** que vuelva a iniciar el juego cuando se cumpla esta condición y desaparezca el botón de **Jugar**.
- Cuando le demos click a al botón **Reiniciar Juego** desaparece este botón, poner todos los contadores a cero y vuelve a aparecer el botón **Jugar**.
- Cuando finalice el juego, muestra quién ha ganado la partida: la computadora o la usuaria. 

## Entrega
La evaluación solo se considerará terminada cuando:
- Esté publicada en GitHub Pages (apuntando a la rama main/master) y esté funcionando.
- El enlace a GitHub Pages esté en la página página principal del repositorio, en la parte superior, al lado de la descripción.
- Debéis hacer commits y merges a la rama main/master solo hasta las 11

## Resultado final

> **NOTA:** En el siguiente enlace podéis ver el resultado final de mi versión del juego [**Los anillos del poder**](https://beta.adalab.es/modulo-2-evaluacion-intermedia-marocena26/)

![image](https://user-images.githubusercontent.com/113302094/200696042-beb33c0e-000c-4fa5-a967-57277f4bc7f3.png)

