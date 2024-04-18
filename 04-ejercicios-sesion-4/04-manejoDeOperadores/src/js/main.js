console.groupCollapsed("Tipo de datos")

let variable1 = 156
let variable2 = "854"
let variable3 = "hola mundo"
let variable4 = true
let variable5 = undefined
let variable6 = null
let variable7 = []
let variable8 = {}
let variable9 = function name() { }

console.log("variable 1:", typeof variable1);
console.log("variable 2:", typeof variable2);
console.log("variable 3:", typeof variable3);
console.log("variable 4:", typeof variable4);
console.log("variable 4:", typeof variable5);
console.log("variable 4:", typeof variable6);
console.log("variable 4:", typeof variable7);
console.log("variable 4:", typeof variable8);
console.log("variable 4:", typeof variable9);
console.groupEnd()




// variable5 = 8
// console.log("variable 4:", typeof variable5);

// operadores artmeticos

console.groupCollapsed("Operadores aritmeticos")
let numero1 = 10
let numero2 = 5

let suma = numero1 + numero2
let resta = numero1 - numero2
let multiplicacion = numero1 * numero2
let division = numero1 / numero2
let potencia = numero1 ** numero2
let residuo = numero1 % numero2

console.log("suma:", suma);
console.log("resta:", resta);
console.log("multiplicacion:", multiplicacion);
console.log("division:", division);
console.log("potencia:", potencia);
console.log("potencia:", residuo);

console.groupEnd()


// Operadores de incremento y decremneto
console.groupCollapsed("Operadores de incremento y decremneto")
//Incremento
let numeroQueVaHaIncrementar = 10
document.write(numeroQueVaHaIncrementar)

numeroQueVaHaIncrementar++
numeroQueVaHaIncrementar++
numeroQueVaHaIncrementar += 2
numeroQueVaHaIncrementar++
console.log(numeroQueVaHaIncrementar)

//Incremento
let numeroQueVaHaDecrementar = 10
document.write(numeroQueVaHaDecrementar)

numeroQueVaHaDecrementar--
numeroQueVaHaDecrementar--
numeroQueVaHaDecrementar--
numeroQueVaHaIncrementar -= 2
console.log(numeroQueVaHaDecrementar)

console.groupEnd()

// Operadore de comparacion
console.groupCollapsed("Operadore de comparacion")
console.log(5 + 9 == 20)

// comparador de igualdad " == o ==="
console.log(4 == 4)
console.log(4 == "4")
console.log(4 === "4")
console.log("Hola mundo" == "hola mundo")

let numeroFactura = "1234"
numeroFactura = parseInt(numeroFactura)

console.log(numeroFactura == 1234)
console.log(numeroFactura === 1234)

// comparador de diferencia " != o !=="
console.log(2 != 4)
console.log(4 != "4")
console.log(4 !== "4")
console.log("Hola mundo" !== "hola mundo")

const contraseña = "12345"
const contraseñaConfirmacion = "12345"

if (contraseña !== contraseñaConfirmacion) {
    console.error("las contraseñas no coinciden")
} else {
    console.error("Usuario registrado")
}

// Comparador mayor que 
console.log(8 > 5);
console.log(8 > 8);
console.log(8 >= 5);

// Comparador menor que 
console.log(8 < 5);
console.log(8 < 8);
console.log(8 <= 5);

let edad = 12
if (edad < 18) {
    console.error("tiene peligro de que te agarre la pocilia")
} else if (edad >= 18) {
    console.warn("puedes ingerir alcohol, pero tambien te puede agarrar la polica")
}

console.groupEnd()

// Operadore logicos 
console.groupCollapsed("Operadore logicos")

// Operador AND
//          true + true = true
console.log(1 < 5 && 8 > 2)

//                  false               + true           false =       false
console.log("usuario" == "admin" && "1234" === 1234 && "Rol" == true)

// Operador OR
//          false    true   false    false   = true 
console.log(1 > 6 || 5 > 1 || 8 < 2 || 9 > 50)

// mescladas 
//                        False                                 True     = TRUE
//               false                true           true             true
console.log(("usuario" == "Usuario" && 5 > 2) || ("rol" === "rol" && 6 =="6"))

// not

let variable = true
console.log(!variable)

console.groupEnd()