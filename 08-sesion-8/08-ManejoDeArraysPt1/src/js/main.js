console.groupCollapsed("Creacion de arrays")
const array1 = new Array(4)
const array2 = Array("a", "b", "c")
const array3 = []

console.log(array1);
console.log(array2);
console.log(array3);

console.groupEnd()
const array = [1, 2, 3, 4, 5, "hola", "mundo", true, false, "alpha"]

console.groupCollapsed("Consultar datos del array")

console.log("El array tiene", array.length, "elementos")
console.log(array[6])
console.log(array.at(6));
console.log(array.includes("mundo"))
console.log(array.includes("zulu"))
console.log(array.indexOf("mundo"))
console.log(array.indexOf("zulu"))

console.groupEnd()

console.groupCollapsed("Actualizar datos del array")
console.log(array)

array[5] = "hello"


console.log(array)

console.groupEnd()

console.groupCollapsed("Agregar datos del array")
console.log(array)
array[10] = "bravo"
console.log(array)

array[11] = "charlie"
console.log(array)

array.push("delta")
console.log(array)

array.unshift("uno")
console.log(array)
console.groupEnd()

console.groupCollapsed("Eliminar elemntos del array")
console.log(array)
array.pop()
console.log(array)

delete array[2]
console.log(array)

array.shift()
console.log(array)
console.groupEnd()

console.groupCollapsed("Sumar arrays")
let primerosNumeros = [1, 2, 3, 4, 5]
let segundosNumeros = [6, 7, 8, 9, 10]

console.log(primerosNumeros);
console.log(segundosNumeros);

primerosNumeros.push(segundosNumeros)
console.log(primerosNumeros);

primerosNumeros = primerosNumeros.concat(segundosNumeros)


let sumaNumeros = primerosNumeros.concat(segundosNumeros)
console.log(sumaNumeros);

console.groupEnd()

console.groupCollapsed("Listar informacion")
const listaSupermercado = ["arroz", "pan", "arepa", "agupanela", "huevos", "guero", "pescado", "cafe", "queso", "leche", "carne"]

console.log("...for...")
for (let i = 0; i < listaSupermercado.length; i++) {
    console.log(listaSupermercado[i])
}

console.log("...while...")
let i = 0
while (i < listaSupermercado.length) {
    console.log(listaSupermercado[i])
    i++
}

console.log("...for of...")
for (const i of listaSupermercado) {
    console.log(i)
}

console.log("...forEach...")
listaSupermercado.forEach(lista => {
    console.log(lista)
})

console.groupEnd()