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
let num1 = 4
let num2 = 6
let num3 = 8

let promedio = (num1 + num2 + num3) / 3
console.log(promedio)

//18. Calcular la factorial de 5.
let n = 5
let factorial = 1

for (let i = 1; i <= n; i++) {
    factorial*= i;
}
console.log(factorial)

//19. Redondear el número 3.6.
console.log(Math.round(3.6))

// 20. Calcular el doble de 9.
console.log(Math.pow(9,2))

// 21. Calcular el triple de 4.
console.log(Math.pow(4,3))

// 22. Calcular el cuadrado de 6.
console.log(Math.pow(6,2))

// 23. Calcular el cubo de 3.
console.log(Math.pow(3,3))

// 24. Calcular la suma de los primeros 10 números naturales.
let suma = 0
for(let i = 1; i <= 10; i++){
    suma+= i
}
console.log(suma)

// 25. Calcular la resta entre 50 y 25.
console.log(50-25)

// 26. Multiplicar 7 por 9.
console.log(7*9)

// 27. Dividir 144 por 12.
console.log(144/12)

// 28. Obtener el módulo de 17 dividido por 4.
console.log(17%4)

// 29. Generar un número aleatorio entre 20 y 30.
console.log( Math.round(Math.random() * (30-20)+20))

// 30. Elevar 2 a la potencia de 8.31. Calcular la raíz cuadrada de 144.
console.log(Math.pow(2, 8.31))
console.log(Math.sqrt(144))

// 32. Convertir 100 grados Celsius a Fahrenheit.
let celsius2 = 100
console.log((9/5*celsius)+32)

// 33. Calcular el área de un rectángulo de base 5 y altura 10.
let base1 = 5
let altura1 = 10

console.log(base1*altura1)

// 34. Calcular el perímetro de un círculo con radio 6.
let radio1 = 6
let diametro = 2 * radio
let pi = Math.PI

⁠// 35. Calcular el volumen de un cubo con lado 4.
const lado1 = 4
const volumenDeCubo = lado * lado * lado
console.log('Volumen de Cubo con lado 4:', volumenDeCubo)

// 36. Calcular el área de un rombo con diagonales de 8 y 10.
const diagonal1 = 8
const diagonal2 = 10
const areaDeRombo = (diagonal1 * diagonal2) / 2
console.log('Area de rombo con diagonal 8 y 10:', areaDeRombo)

// 37. Calcular el área de un trapecio con bases 6 y 10 y altura 4.
const baseMayor = 10
const baseMenor = 6
const altura2 = 4
const areaTrapecio = ((baseMayor + baseMenor) * altura) / 2
console.log('Area trapecio con bases 6 y 10 altura 4:', areaTrapecio)

// 38. Generar la tabla de multiplicar del número 8.
console.log('Tabla de multiplicar del 8:')
for (let i = 1; i <= 10; i++){
    console.log(`8 x ${i} = ${8 * i}`)
}

// 39. Encontrar el número mayor entre 15, 20 y 25.
console.log('Numero mayor entre 15 20 25:', Math.max(15, 20 ,25))

// 40. Encontrar el número menor entre 50, 75 y 100.
console.log('Numero menor entre 50 75 100:', Math.min(50, 75, 100))

// 41. Calcular el promedio de 7, 9 y 12.
console.log('Calcular el promedio de 7 9 12:', (7 + 9 + 12) / 3)

// 42. Calcular la factorial de 7.
let factorialDe7 = 1
for(let i = 1; i <= 7; i++) {
    factorialDe7 = factorialDe7 * i
}
console.log('Factorial del numero 7:', factorialDe7)

// 43. Redondear el número 7.9.
console.log('Numero redondeado de 7.9', Math.round(7.9)) 

// 44. Calcular el doble de 15.
// 45. Calcular el triple de 6.
// 46. Calcular el cuadrado de 8.
// 47. Calcular el cubo de 4.
// 48. Calcular la suma de los primeros 15 números naturales.
// 49. Calcular la resta entre 100 y 55.
// 50. Multiplicar 6 por 8.
// 51. Dividir 225 por 15.
// 52. Obtener el módulo de 20 dividido por 7.
// 53. Generar un número aleatorio entre 40 y 50.
// 54. Elevar 3 a la potencia de 4.
// 55. Calcular la raíz cuadrada de 169.
// 56. Convertir 80 grados Celsius a Fahrenheit.
// 57. Calcular el área de un rectángulo de base 8 y altura 12.
// 58. Calcular el perímetro de un círculo con radio 8.
// 59. Calcular el volumen de un cubo con lado 5.
// 60. Calcular el área de un rombo con diagonales de 12 y 16.
// 61. Calcular el área de un trapecio con bases 8 y 12 y altura 6.62. Generar la tabla de multiplicar del número 9.
// 63. Encontrar el número mayor entre 25, 30 y 35.
// 64. Encontrar el número menor entre 80, 95 y 110.
// 65. Calcular el promedio de 8, 10 y 14.
// 66. Calcular la factorial de 8.
// 67. Redondear el número 9.2.
// 68. Calcular el doble de 18.
// 69. Calcular el triple de 7.
// 70. Calcular el cuadrado de 10.
// 71. Calcular el cubo de 5.
// 72. Calcular la suma de los primeros 20 números naturales.
// 73. Calcular la resta entre 200 y 75.
// 74. Multiplicar 9 por 11.
// 75. Dividir 300 por 25.
// 76. Obtener el módulo de 30 dividido por 9.
// 77. Generar un número aleatorio entre 60 y 70.
// 78. Elevar 4 a la potencia de 5.
// 79. Calcular la raíz cuadrada de 196.
// 80. Convertir 120 grados Celsius a Fahrenheit.
// 81. Calcular el área de un rectángulo de base 10 y altura 15.
// 82. Calcular el perímetro de un círculo con radio 10.
// 83. Calcular el volumen de un cubo con lado 6.
// 84. Calcular el área de un rombo con diagonales de 14 y 18.
// 85. Calcular el área de un trapecio con bases 10 y 15 y altura 8.
// 86. Generar la tabla de multiplicar del número 10.
// 87. Encontrar el número mayor entre 35, 40 y 45.
// 88. Encontrar el número menor entre 90, 105 y 120.
// 89. Calcular el promedio de 9, 11 y 15.
// 90. Calcular la factorial de 9.
// 91. Redondear el número 10.8.
// 92. Calcular el doble de 21.93. Calcular el triple de 8.
// 94. Calcular el cuadrado de 12.
// 95. Calcular el cubo de 6.
// 96. Calcular la suma de los primeros 25 números naturales.