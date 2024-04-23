console.groupCollapsed("Ejercicio 1")
// 1. if-else con uso de operadores de comparación, Operadores de asignación con
// Resta y asignación, y algún método de string:
// Enunciado del Problema: Crea un programa que tome dos números del usuario y
// utilice una estructura de control if-else para determinar si el primer número es
// mayor que el segundo. Si es así, resta el segundo número al primero y muestra el
// resultado en consola. Además, utiliza algún método de string para indicar si el
// resultado es un número positivo o negativo.

// let num1 = Number(prompt("Ingresa un numero:"))
// let num2 = Number(prompt("Ingresa otro numero:"))

// if (num1 > num2) {
//     let resta = (num2 - num1)
//     let strResta = String(resta)
//     let estado = strResta.includes("-")
//     console.log(`${num2} - ${num1} = ${resta} y ${estado} si es un numero negativo`)
// } else {
//     console.log("El primero es menor que el segundo numero")
// }

console.groupEnd()

console.groupCollapsed("Ejercicio 2")
// 2. switch case con uso de operadores de comparación, Método Math y
// Number.parseFloat(text):
// Enunciado del Problema: Desarrolla un programa que solicite al usuario
// seleccionar una operación matemática (suma, resta, multiplicación o división)
// mediante un menú. Utiliza un switch case para realizar la operación seleccionada
// en dos números ingresados por el usuario. Además, utiliza el método Math para
// redondear el resultado y conviértelo a un número decimal utilizando
// Number.parseFloat(text) antes de mostrarlo en consola.

function mostraMenu() {
    prompt(
        "Selecciona una opcion: 1. Opcion 1 2. Opcion 2 3. Opcion 3 4. Opcion 4"
    )
}

mostraMenu()




console.groupEnd()

// 3. for con uso de operadores de comparación, Método Math y toString:
// Enunciado del Problema: Implementa un programa que solicite al usuario un
// número y utilice un bucle for para imprimir la tabla de multiplicar de ese número
// del 1 al 10. Además, utiliza el método Math para calcular cada producto y
// convierte el resultado a una cadena de texto utilizando toString antes de
// mostrarlo en consola.
// 4. if-else con uso de operadores lógicos y Método Math:
// Enunciado del Problema: Crea un programa que pida al usuario su edad y la
// cantidad de horas de sueño diarias. Utiliza una estructura de control if-else con
// operadores lógicos para determinar si la persona es mayor de edad (más de 18
// años) y si duerme lo suficiente (más de 7 horas). Utiliza el Método Math para
// redondear la cantidad de horas de sueño y muestra un mensaje en consola
// indicando si la persona tiene un buen equilibrio entre edad y descanso.
// 5. switch case con uso de operadores lógicos, substring y slice:
// Enunciado del Problema: Desarrolla un programa que solicite al usuario un día de
// la semana (por ejemplo, "lunes"). Utiliza un switch case con operadores lógicos
// para determinar si el día ingresado es un día laboral (de lunes a viernes) o un fin
// de semana (sábado o domingo). Luego, utiliza los métodos substring y slice de
// string para mostrar un mensaje en consola indicando si es un día hábil o de
// descanso.
// 6. for con uso de operadores lógicos y Método Math:
// Enunciado del Problema: Implementa un programa que solicite al usuario ingresar
// un número. Utiliza un bucle for para encontrar la suma de todos los números
// impares hasta el número ingresado. Además, utiliza operadores lógicos para
// identificar números impares y el Método Math para realizar cálculos. Muestra el
// resultado en consola.
// 7. if-else con uso de operadores de asignación, Método Math y
// Number.parseInt:
// Enunciado del Problema: Crea un programa que solicite al usuario ingresar un
// número decimal. Utiliza una estructura if-else con operadores de asignación para
// redondear el número hacia abajo utilizando el método Math.floor() y luego
// convierte el resultado a un número entero utilizando Number.parseInt. Muestra
// el número original y el número redondeado en consola.
// 8. switch case con uso de operadores de asignación, replacing y
// Number.parseInt:
// Enunciado del Problema: Desarrolla un programa que pida al usuario una frase y
// utilice un switch case para realizar diferentes operaciones en la frase.
// Dependiendo de la opción seleccionada (por ejemplo, 1 para convertir a
// mayúsculas, 2 para reemplazar espacios con guiones, etc.), realiza la operación
// correspondiente y muestra el resultado en consola. Utiliza Number.parseInt para
// manejar las opciones ingresadas por el usuario.
// 9. for loop con uso de operadores de asignación ToUpperCase - ToLowerCase:
// Enunciado del Problema: Implementa un programa que solicite al usuario ingresar
// una palabra. Utiliza un bucle for para alternar entre caracteres en mayúsculas y
// minúsculas en la palabra. Utiliza operadores de asignación como toUpperCase() y
// toLowerCase() para cambiar el caso de cada