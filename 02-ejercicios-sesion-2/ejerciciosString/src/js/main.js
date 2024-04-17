//Ejercicios de Javascript para realizar en consola:

// 1. Declara dos variables, num1 y num2, asignándoles valores numéricos diferentes y muestra en consola el resultado de sumarlos.

let num1 = 2
let num2 = 3
let resultado = num1 + num2
console.log(resultado)

// 2. Define dos variables de tipo string, simpleString1 y simpleString2, con valores "Hola" y "Mundo" respectivamente. Muestra en consola la longitud total de ambas cadenas.

let simpleString1 = "Hola"
let simpleString2 = "Mundo"
console.log(simpleString1.length);
console.log(simpleString2.length);

// 3. Crea dos variables de tipo string usando la función String(): stringUsingString1 con el valor "JavaScript" y stringUsingString2 con el valor "Ejercicios".
let stringUsingString1 = String("JavaScript")
let stringUsingString2 = String("Ejercicios")
console.log(stringUsingString1)
console.log(stringUsingString2)

// 4. Utiliza el operador new para crear dos variables de tipo string: stringUsingNewString1 con el valor "Concatenar" y stringUsingNewString2 con el valor "Strings".
let stringUsingNewString1 = new String("Concatenar")
let stringUsingNewString2 = new String("Strings")

// 5. Calcula e imprime en consola la posición del substring "la" en la variable simpleString1.
console.log(simpleString1.indexOf("la"))
console.log(simpleString1.search("la"))

// 6. Comprueba si la variable simpleString2 contiene el substring "ndo" e imprime el resultado en consola.
console.log(simpleString2.includes("ndo"))

// 7. Concatena las variables simpleString1 y simpleString2 utilizando el método concat() y muestra el resultado en consola.
console.log(simpleString1.concat(" ", simpleString2));

//8. Concatena las variables simpleString1 y simpleString2 utilizando el operador + y muestra el resultado en consola.
console.log(simpleString1 + " " + simpleString2);

//9. Utiliza template strings para concatenar las variables simpleString1 y simpleString2 e imprime el resultado en consola.
console.log(`${simpleString1} ${simpleString2}`);

//10. Declara una variable stringWithSpaces1 con el valor " TrimStart" y otra variable stringWithSpaces2 con el valor "TrimEnd ". Elimina los espacios en blanco al principio y al final de ambas cadenas e imprime el resultado en consola.
let stringWithSpaces1 = " TrimStart" 
let stringWithSpaces2 = "TrimEnd "
console.log(stringWithSpaces1.trimStart());
console.log(stringWithSpaces2.trimEnd());

//11. Reemplaza la letra 'o' por la letra 'i' en la variable simpleString1 e imprime el resultado en consola.
console.log(stringWithSpaces1.replace("i", "o"));