
// Uso adecuado de let y scope para actualizar una variable
// Somos portero de una discoteca y nos indican la edad de la persona que quiere entrar

// https://www.w3schools.com/react/react_es6_variables.asp

let puedesPasar = false;
let edad = 21;

if (edad >= 18) {
    puedesPasar = true;
}

console.log(puedesPasar) // Debería ser true pero vale false. ¿por qué? --> porqué el segundo puedesPasar  es una variable local y no se puede acceder desde fuera de la función.

// PREGUNTA: ¿Por qué no se actualiza correctamente la variable 'puedesPasar'?
// let has a block scope. Se está declarando dos veces puedesPasar y hay conflicto de scope.
