let frutas = ["manzana", "limon", "banano", "naranja", "fresa" ]

frutas.forEach(fruta => {
    console.log(fruta)
})


let citrica = []
let noCitrica = []

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] === "limon" || frutas[i] === "naranja") {
        citrica.push(frutas[i])
    } else {
        noCitrica.push(frutas[i])
    }
}

console.table(citrica)
console.table(noCitrica)
