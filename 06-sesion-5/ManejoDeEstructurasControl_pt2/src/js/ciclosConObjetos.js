console.groupCollapsed("forEach with objets")

const teamLeader = {
    id: "115551",
    identificationNumber: "1023485967",
    name: "javier",
    lastName: "perez",
    age: new Date("1998-04-23 14:00:00"),
    phoneNumber: "(+57) 3136954017",
    email: "javier@gmail.com"
}


console.log(Date.now("yyyy-mm-dd"))

for (const key in teamLeader) {
    console.log(key)
}

console.log(Object.keys(teamLeader))

Object.keys(teamLeader).forEach(index => {
    console.log(teamLeader[index])
})

Object.keys(teamLeader).forEach(key => {
    console.log(teamLeader[key])
})

Object.values(teamLeader).forEach(value => {
    console.log(value)
})

console.groupEnd()

let numeros = []

for (let i = 0; i <= 100; i++) {
    numeros.push(i)
}

console.log(numeros)

const numerosPares = numeros.filter(numero => numero % 2 === 0)
console.log(numerosPares)

// const numerosPares1 = numeros.filter(numero => {
//     if (numero % 2 === 0)
//         console.log(numero)
//     return numero
// })

// console.log(numerosPares1)


// let numePares = []

// for (let number of numeros) {
//     if (number % 2 === 0) {
//         console.log(number)
//         numePares. push(number)
//     }
// }

console.groupCollapsed("Ejemplo")

listaEmpleados = [
    {
        nombre: "Juan Pérez",
        edad: 30,
        puesto: "Desarrollador de Software",
        salario: 50000
    },
    {
        nombre: "María García",
        edad: 28,
        puesto: "Diseñadora Gráfica",
        salario: 45000
    },
    {
        nombre: "Luis Ramírez",
        edad: 35,
        puesto: "Gerente de Proyectos",
        salario: 60000
    },
    {
        nombre: "Ana Martínez",
        edad: 32,
        puesto: "Analista de Negocios",
        salario: 55000
    }
];

listaEmpleados.forEach(empleado => {
    console.log(empleado.nombre.toLowerCase(),empleado.puesto.toLowerCase() + " y se gana " + empleado.salario)
    console.log(`${empleado.nombre.toLowerCase()} es ${empleado.puesto.toLowerCase()} y se gana ${empleado.salario.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })}`)
})

console.groupEnd()