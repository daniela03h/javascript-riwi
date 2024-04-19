console.groupCollapsed("Estruturas if, if else. if else-if")

console.log(8 < 10) // true
console.log("8 >= 6") // true

let hora = 20

if (hora > 8 && hora < 17) {
    console.log("estoy en mi jormada laboral")
} else {
    console.log("No estoy en mi jormada laboral")
}

// let mes = prompt("ingrese el mes actual:")

// if (mes == "enero") {
//     console.log("es enero")
// } else if (mes == "febrero") {
//     console.log("es febrero")
// } else if (mes == "marzo") {
//     console.log("es marzo")
// } else if (mes == "abril") {
//     console.log("es abril")
// } else if (mes == "mayo") {
//     console.log("es mayo")
// } else {
//     console.log("Ingresaste un mes que no entendio")
// }

// let numeroMes = prompt("ingrese el numero del mes actual:")

// if (numeroMes >= 1 && numeroMes <= 3) {
//     console.log("Esta en el primer trimestre")
// } else if (numeroMes == 4 || numeroMes == 5 || numeroMes == 6) {
//     console.log("Esta en el segundo trimestre")
// } else if (numeroMes == 7 || numeroMes == 8 || numeroMes == 9) {
//     console.log("Esta en el tercer trimestre")
// } else if (numeroMes == 10 || numeroMes == 11 || numeroMes == 12) {
//     console.log("Esta en el cuarto  trimestre")
// } else {
//     console.log("Ingresaste un numero de mes incorecto")
// }

// switch (numeroMes) {
//     case 1:
//         console.log("estas en el primer trimestre del año")
//         break;
//     case 2:
//         console.log("estas en el primer trimestre del año")
//         break;
//     case 3:
//         console.log("estas en el primer trimestre del año")
//         break;
//     case 4:
//         console.log("estas en el segundo trimestre del año")
//         break;
//     default:
//         console.log("ingresa el numero 1 al 12")
//         break;
// }


// let menu = alert( `
// 1 Solicita almuerzo,
// 2 Solicita domicilio,
// 3 Cancelar orden,
// 4 Finalizar el programa,
// `)

// let opcion = prompt("Digita la opcion que quieres realizar:")

// if (opcion == 1) {
//     console.log("Solicitaste el almuerzo")
// } else if (opcion == 2) {
//     console.log("Solicitaste un domicilio")
// } else if (opcion == 3) {
//     console.log("Cancelar orden")
// } else if (opcion == 4) {
//     console.log("Finalizaste el programa")
// } else {
//     console.log("Ingresaste un numero de mes incorecto")
// }


// switch (opcion) {
//     case "1":
//         console.log("Solicitaste el almuerzo")
//         break;
//     case "2":
//         console.log("Solicitaste un domicilio")
//         break;
//     case "3":
//         console.log("Cancelar orden")
//         break;
//     case "4":
//         console.log("Finalizaste el programa")
//         break;
//     default:
//         console.log("Ingresaste un numero de mes incorecto")
//         break;
// }

console.groupEnd()


console.groupCollapsed("for")

// for(let i = 0; i <=10; i++){
//     console.log("hola mundo", i);
// }

console.groupCollapsed("tabla de multiplicar con for")

// for(let i = 1; i <=10; i++){
//     let resultado = 1 *i
//     console.log(`1 * ${i} = ${resultado}`);
// }

// for(let i = 1; i <=10; i++){
//     let resultado = 2 *i
//     console.log(`2 * ${i} = ${resultado}`);
// }

// for(let i = 1; i <=10; i++){
//     let resultado = 3 *i
//     console.log(`3 * ${i} = ${resultado}`);
// }

// for(let i = 1; i <=10; i++){
//     let resultado = 4 *i
//     console.log(`4 * ${i} = ${resultado}`);
// }

// console.groupEnd()

// console.groupCollapsed("tabla de multiplicar con funcion")

// function tablasDeMultiplicar (numero){
//     for(let i = 1; i <=10; i++){
//         let resultado = numero *i
//         console.log(`${numero} * ${i} = ${resultado}`);
//     }
// }

// tablasDeMultiplicar(1)
// tablasDeMultiplicar(2)
// tablasDeMultiplicar(3)
// tablasDeMultiplicar(4)
// tablasDeMultiplicar(5)
// tablasDeMultiplicar(6)
// tablasDeMultiplicar(7)
// tablasDeMultiplicar(8)
// tablasDeMultiplicar(9)
// tablasDeMultiplicar(10)


console.groupEnd()

// console.log("Tablas de multiplicar")

// ciclo que me va ha imprimir las tablas
// for(let t = 1; t <= 10; t++ ) {
//     console.log(`tabla numero ${t}`)
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${t} * ${i} = ${t * i}`)
//     }
//     console.log("")
// }

// let conocida = ["luisa", "maria", "valentina", "lucas"]

// for (let i = 0; i < conocida.length; i++) {
//     for (let j = 1; j <= 10; j++){
//         document.writeIn(`${conocida}`)
//     }
// }

let i = 1
while (i <= 9) {
    let resultado = i * 9
    console.log(resultado);
    i++
}

console.groupEnd()