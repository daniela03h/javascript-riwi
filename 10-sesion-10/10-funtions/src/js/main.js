// const hola = alert({"message": "hola mundo"})
// const respuesta = confirm("¿Estas seguro?")
// console.log(respuesta)

// alert("Hola mundo")

// funcion declarativa 

function saludar(grupo) {
    console.log(`Hola ${grupo}, hoy es un nuevo dia`)
}

// saludar("enfermeras")
// saludar("coders")
// saludar("saludar")

function saludarCoder(coder) {
    console.log(`Hola ${coder}, que tengas un buen dia`)
}

saludarCoder("daniela")

function despedirCoder(coder) {
    console.log(`Adios ${coder}, nos vemos mañana`)
}

despedirCoder("daniela")

function  sumarDosNumeros(numero1, numero2) {
    let respuesta = numero1 + numero2
    return respuesta
}

let total = sumarDosNumeros(2,3)
console.log(total)

// function login(){
//     let usuario = prompt("ingresa tu usuario")
//     let contraseña = Number(prompt("Ingresa usuario"))

//     if (usuario === "admin" && contraseña === 12345) {
//         alert(`BIENVENIDO ${usuario}`)
//     } else {
//         alert("El usuario es INCORRECTO")
//     }
// }

// login()

function uno() {
  console.log("Esta es una funcion declarativa")
}

uno()

const dos = function() {
    console.log("Esta es una funcion expresiva")
  }
  
  dos()

