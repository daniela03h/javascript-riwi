//Ejercicios con números en JavaScript

//1. Sumar dos números.
let numero1 = 3
let numero2 = 4
console.log(numero1 + numero2);

//2. Restar dos números.
console.log(numero1 - numero2);

//3. Multiplicar dos números.
console.log(numero1 * numero2);

//5. Calcular el módulo (resto) de una división.
let dividiendo = numero1
let divisor = numero2
let modulo = dividiendo % divisor
console.log(modulo);

//6. Generar un número aleatorio entre 1 y 10.
let numeroAleatorio = Math.round(Math.random(10 - 1) + 1)
console.log(numeroAleatorio)
let max = 20;
let min = 11;
console.log(`
esun numero entre el 0 y el 1 (excluyendolo): 
${Math.random()} 
un numero que se genera por la diferencia del rango:
${Math.random() * (max - min)} ${(max - min)}
un numero dentro del rango indicado:
${Math.round(Math.random() * (max - min) + min)}
`);