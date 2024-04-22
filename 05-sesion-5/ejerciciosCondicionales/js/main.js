console.group("Ejercicio 1");
// Ejercicio 1
// 1. Verifica si un número es positivo.
console.log(10 > 0)
console.groupEnd();

console.group("Ejercicio 2");
// Ejercicio 2
// 2. Verifica si un número es negativo.
console.log(-10 > 0)
console.groupEnd();

console.group("Ejercicio 3");
// Ejercicio 3
// 3. Comprueba si un número es par.
console.log(10 % 2 === 0)
console.groupEnd();

console.group("Ejercicio 4");
// Ejercicio 4
// 4. Comprueba si un número es impar.
console.log(7 % 2 !== 0)
console.groupEnd();

console.group("Ejercicio 5");
// Ejercicio 5
// 5. Determina si un número es múltiplo de 5.
console.log(50 % 5 === 0)
console.groupEnd();

console.group("Ejercicio 6");
// Ejercicio 6
// 6. Verifica si un número es divisible entre 3.
console.log(9 % 3 === 0)
console.groupEnd();

console.group("Ejercicio 7");
// Ejercicio 7
// 7. Determina si un número es mayor que 100.
console.log(150 > 100)
console.groupEnd();

console.group("Ejercicio 8");
// Ejercicio 8
//8. Verifica si un número es menor que -50.
console.log(-100 < -50)
console.groupEnd();

console.group("Ejercicio 9");
// Ejercicio 9
// 9. Comprueba si un número está en el rango de 20 a 50.
console.log(30 > 20 && 30 < 50)
console.groupEnd();

console.group("Ejercicio 10");
// Ejercicio 10
// 10.Determina si un número es igual a 0.
console.log(0 === 0)
console.groupEnd();

console.group("Ejercicio 11");
// Ejercicio 11
// 11.Verifica si un número es mayor que -10 y menor que 10.
console.log(0 > -10 && 0 < 10)
console.groupEnd();

console.group("Ejercicio 12");
// Ejercicio 12
//12.Determina si un número es un año bisiesto.
const year = 2024
console.log(year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
console.groupEnd();

console.group("Ejercicio 13");
// Ejercicio 13
// 13.Verifica si una persona es mayor de edad (mayor o igual a 18 años).
const edad = 18
console.log(edad >= 18)
console.groupEnd();

console.group("Ejercicio 14");
// Ejercicio 14
console.groupEnd();

console.group("Ejercicio 15");
// Ejercicio 15
// 15.Verifica si un número es un cuadrado perfecto.
console.log(Math.sqrt(4) === Math.floor(Math.sqrt(4)))
console.groupEnd();

console.group("Ejercicio 16");
// Ejercicio 16
// 16.Determina si un número es un número de Fibonacci.
console.groupEnd();

console.group("Ejercicio 17");
// Ejercicio 17
// 17.Verifica si un número es una potencia de 2.
let numero = 10
while (numero % 2 === 0) {
    numero = numero / 2
}
console.log(numero === 1)
console.groupEnd();

console.group("Ejercicio 18");
// Ejercicio 18
// 18.Determina si un número es un palíndromo.
const numeroPalindromo = 12321
const cadenaNumero = numeroPalindromo.toString();
const longitud = cadenaNumero.length;
for (let i = 0; i < longitud / 2; i++) {
    if (!cadenaNumero[i] !== cadenaNumero[longitud - 1 - i]) {
        console.log(`El numero ${cadenaNumero} es palindromo`);
    }
}
console.groupEnd();

console.group("Ejercicio 19");
// Ejercicio 19
// 19.Verifica si una cadena de texto contiene la palabra "JavaScript".
console.log('Esto es una cadena de texto con la palabra JavaScript'.includes('JavaScript'))
console.groupEnd();

console.group("Ejercicio 20");
// Ejercicio 20
// 20.Determina si una cadena tiene más de 10 caracteres.
console.log('cadena de texto con mas de diez caracteres'.length > 10)
console.groupEnd();

