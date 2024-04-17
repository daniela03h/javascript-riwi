//Creacion de numeros y declaracion de rangos
// let numero1 = 45
// let numero2 = Number(45)
// let numero3 = new Number(45)

// console.log(numero1);
// console.log(numero2);
// console.log(numero3);

// let numero = 45

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

//OPERACIONES MATEMATICAS

// const numero1 = 5
// const numero2 = 10

// console.log(numero1 + numero2)
// console.log(numero1 * numero2)
// console.log(numero1 / numero2)
// console.log(numero1 - numero2)

// const numero1 = Number.parseInt(prompt("ingresa tu numero"))
// const numero2 = Number.parseFloat(prompt("ingresa tu decimal"))

// console.log(typeof(numero1));
// console.log(typeof(numero2));

// console.log(Number.isInteger(numero1));
// console.log(Number.isInteger(numero2));

// let numero = 45
// console.log(numero.toString())
// console.log(numero.toString(2))
// console.log(numero.toString(8))
// console.log(numero.toString(16))

// const numeroEjemplo = 4.14
// console.log(numeroEjemplo)
// console.log(numeroEjemplo.toFixed(2))
// console.log(numeroEjemplo.toFixed(3))
// console.log(numeroEjemplo.toFixed(4))
// console.log(numeroEjemplo.toFixed(5))
// console.log(numeroEjemplo.toFixed(6))

// const numeroEjemplo = 45
// console.log(numeroEjemplo)
// console.log(numeroEjemplo.toExponential())
// console.log(numeroEjemplo.toExponential(45))
// console.log(numeroEjemplo.toExponential(100))

// const numeroEjemplo = 88888888888
// console.log(numeroEjemplo)
// console.log(numeroEjemplo.toExponential())
// console.log(numeroEjemplo.toPrecision(2))

//CLASE Math

// console.log(2*2*2*2);
// console.log(2**4);
// console.log(Math.pow(2,4));
// console.log(Math.sqrt(888888));
// console.log(Math.cbrt(68));
// console.log(Math.cos(1516));

// console.log(86)
// console.log(Math.abs(-85))

// let numero = 78

// if (numero > 0) {
//     console.log("es positivo")
// } else {
//     console.log("es negativo")
// }

// console.log(Math.sign(numero))


// console.log(Math.max(48,99,55,2));
// console.log(Math.min(48,99,55,2));


// let numero = 3.2
// console.log(Math.round(numero))
// console.log(Math.floor(numero))
// console.log(Math.ceil(numero))

//RANDOM

let numero = Math.round(Math.random() * 100)
document.write(numero)
console.log(Math);

//(valorSuperios - valorInferior) + valorInferior


let numeroAleatorio = Math.round(Math.random(60 -20) + 20)
document.write(numeroAleatorio)
console.log(Math);