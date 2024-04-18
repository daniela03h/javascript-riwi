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
let numeroAleatorioExplicacion = Math.round(Math.random(10 - 1) + 1)
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


let numeroAleatorio = Math.round(Math.random() *10)
console.log(numeroAleatorio)

let numeroAleatorio2 = Math.floor(Math.random() *10)+1
console.log(numeroAleatorio2)

let numeroAleatorio3 = Math.round(Math.random() * (10-1)+1)
console.log(numeroAleatorio3)

//7. Elevar un número a la potencia de otro.
console.log(2**4)
console.log(Math.pow(2,4))

//8. Calcular la raíz cuadrada de un número.
console.log(Math.sqrt(5))

//9. Convertir grados Celsius a Fahrenheit.
let celsius = 30
console.log((9/5*celsius)+32)

//10. Calcular el área de un círculo.
const radio = 10
console.log(Math.PI * Math.pow(radio, 2))
console.log(Math.PI * radio *radio)

//11. Calcular el perímetro de un cuadrado.
let lado = 5
let perimetro = 4 * lado
console.log(perimetro)

//12. Calcular el volumen de una esfera.
let volumen = (4/3) * Math.PI * Math.pow(radio, 3)
console.log(volumen);

//13. Calcular el área de un triángulo
let base = 5
let altura = 8
let area = (1/2)

//14. Generar la tabla de multiplicar del número 5.
for (let i = 1; i <= 10; i++){
    let resultado = 5 *i
    console.log(resultado)
}

//15. Encontrar el número mayor entre 3, 7 y 2.
console.log(Math.max(3,7,2))

//16. Encontrar el número menor entre 10, 20 y 5.
console.log(Math.min(10,20,5))

//17. Calcular el promedio de 4, 6 y 8.