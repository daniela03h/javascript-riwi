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
console.log("Esto es una cadena de texto con la palabra JavaScript".includes("JavaScript"));
console.groupEnd();

console.group("Ejercicio 20");
// Ejercicio 20
// 20.Determina si una cadena tiene más de 10 caracteres.
console.log("cadena de texto con mas de diez caracteres".length > 10);
console.groupEnd();

console.groupCollapsed("Ejercicio 21");
// Ejercicio 21
// 21.Verifica si una cadena de texto está en minúsculas.
let cadena = "cadena de texto esta en Minucula";
console.log(cadena === cadena.toLowerCase());
console.groupEnd();

console.groupCollapsed("Ejercicio 22");
// Ejercicio 22
// 22.Determina si una cadena de texto contiene al menos un número.
let cadenaNum = "cadena de texto contiene al menos un número 123";
let contieneNum = false;

for (let i = 0; i < cadenaNum.length; i++) {
  if (!isNaN(parseInt(cadenaNum[i]))) {
    contieneNum = true;
    break;
  }
}

console.log(contieneNum);

console.groupEnd();

console.groupCollapsed("Ejercicio 23");
// Ejercicio 23
// 23.Verifica si una cadena de texto termina con un punto (.)
let cadenaPunto = "cadena de texto termina con un punto.";
console.log(cadenaPunto[cadenaPunto.length - 1] === ".");
console.groupEnd();

console.groupCollapsed("Ejercicio 24");
// Ejercicio 24
// 24.Determina si una cadena de texto es un pangrama (contiene todas las letras del alfabeto).
console.groupEnd();

console.groupCollapsed("Ejercicio 25");
// Ejercicio 25
// 25.Verifica si un día de la semana es laborable (de lunes a viernes).
let dia = 8;
let esLaborable = dia >= 1 && dia <= 5;
console.log(esLaborable);

console.groupEnd();

console.groupCollapsed("Ejercicio 26");
// Ejercicio 26
// 26.Determina si un día es fin de semana (sábado o domingo).
let diaFinDeSemana = 6;
let esFinDeSemana = diaFinDeSemana >= 6 && diaFinDeSemana <= 7;
console.log(esFinDeSemana);
console.groupEnd();

console.groupCollapsed("Ejercicio 27");
// Ejercicio 27
// 27.Verifica si un número representa un mes válido (del 1 al 12).
let mes = 8;
let esUnMes = mes >= 1 && mes <= 12;
console.log(esUnMes);

console.groupEnd();

console.groupCollapsed("Ejercicio 28");
// Ejercicio 28
// 28.Determina si una hora está en el rango de 9 AM a 6 PM.
let hora = 8;
let horaRango = hora >= 9 && hora <= 18;
console.log(horaRango);
console.groupEnd();

console.groupCollapsed("Ejercicio 29");
// Ejercicio 29
// 29.Verifica si una persona es mayor de 65 años o menor de 18 años.
let edad2 = 20;
let mayorMenor= edad2 >= 65 || edad2 <= 18;
console.log(mayorMenor);
console.groupEnd();

console.groupCollapsed("Ejercicio 30");
// Ejercicio 30
// 30.Determina si un triángulo es equilátero (tres lados iguales).
let lado1 = 8
let lado2 = 9
let lado3 = 8
console.log(lado1 === lado2 && lado2 === lado3 && lado3 === lado1)
console.groupEnd();

console.groupCollapsed("Ejercicio 31");
// Ejercicio 31
// 31.Verifica si un triángulo es isósceles (dos lados iguales).
let lado4 = 8;
let lado5 = 8;

console.log(lado4 === lado5);

console.groupEnd();

console.groupCollapsed("Ejercicio 32");
// Ejercicio 32
// 32.Determina si un triángulo es escaleno (todos los lados diferentes).
let lado6 = 8;
let lado7 = 9;
let lado8 = 8;
console.log(lado1 === lado2 && lado2 === lado3 && lado3 === lado1);
console.groupEnd();

console.groupCollapsed("Ejercicio 33");
// Ejercicio 33
// 33.Verifica si un número es mayor que el doble de otro número.
console.log(10 > (6*6))
console.groupEnd();

console.groupCollapsed("Ejercicio 34");
// Ejercicio 34
// 34.Determina si la suma de dos números es mayor que 100.
let num1 = 40
let num2 = 50
let resultado = num1 + num2

console.log(resultado > 100);
console.groupEnd();

console.groupCollapsed("Ejercicio 35");
// Ejercicio 35
// 35.Verifica si la resta de dos números es menor que 50.
let num3 = 100;
let num4 = 40;
let resultado2 = num3 - num4;

console.log(resultado2 < 50);
console.groupEnd();

console.groupEnd();

console.groupCollapsed("Ejercicio 36");
// Ejercicio 36
// 36.Determina si un número es el doble del otro número.
let num5 = 100;
let num6 = 40;
let resultado3 = num5 === num6 * 2;

console.log(resultado3);

console.groupEnd();

console.groupCollapsed("Ejercicio 37");
// Ejercicio 37
// 37.Verifica si el doble de un número es igual al triple de otro número.
let num7 = 100;
let num8 = 40;
let resultado4 = num7 * 2 === num8 * 3;

console.log(resultado4);
console.groupEnd();

console.groupCollapsed("Ejercicio 38");
// Ejercicio 38
// 38.Determina si la suma de dos números es igual a 50.
let num9 = 100;
let num10 = 40;
let resultado5 = num9 + num10;

console.log(resultado5 === 50);
console.groupEnd();

console.groupCollapsed("Ejercicio 39");
// Ejercicio 39
// 39.Verifica si el producto de dos números es mayor que 500.
let num13 = 100;
let num14 = 40;
let resultado7 = num13 * num14 > 500;

console.log(resultado7);

console.groupEnd();

console.groupCollapsed("Ejercicio 40");
// Ejercicio 40
// 40.Determina si la división de dos números es menor que 10.
let num11 = 100;
let num12 = 40;
let resultado6 = num11 / num12;

console.log(resultado6 < 10);
console.groupEnd();