let numeroSecreto = Math.floor(Math.random() * 100) + 1
let intentos = 0

while (true) {
    let suposicion = parseInt(prompt("Ingresa un numero entre 1 y 100: "))
    intentos++

    if (suposicion < numeroSecreto) {
        alert("El numero secreto es mayor")
    } else if (suposicion > numeroSecreto) {
        alert("El numero secreto es menor")
    } else {
        alert("adivinaste el numero secreto" + numeroSecreto)
        break
    }
}
