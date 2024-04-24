console.groupCollapsed("Ejercicio 1");
// Ejercicio 1
// 1. Crea un objeto llamado persona con propiedades como nombre, edad y ciudad.

let persona = {
    nombre: "daniela",
    edad: "30",
    ciudad: "medellin"
}

console.log(persona)
console.groupEnd();

console.groupCollapsed("Ejercicio 2");
// Ejercicio 2
// 2. Agrega una propiedad adicional al objeto persona que represente su ocupación.
persona.ocupacion = "estudiante"
console.log(persona)
console.groupEnd();

console.groupCollapsed("Ejercicio 3");
// Ejercicio 3
// 3. Accede a una propiedad del objeto persona y muestra su valor en la consola.
console.log(persona.ciudad)
console.groupEnd();

console.groupCollapsed("Ejercicio 4");
// Ejercicio 4
// 4. Crea otro objeto llamado libro con propiedades como título, autor y año de publicación.
let libro = {
    titulo: "Hábitos Atómicos",
    autor: "James Clear",
    añoDePublicacion: "8 de septiembre de 2020"
}

console.log(libro)
console.groupEnd();

console.groupCollapsed("Ejercicio 5");
// Ejercicio 5
// 5. Combina las propiedades de los objetos persona y libro en un nuevo objeto llamado informacion.
let informacion = {...persona, ...libro}

console.log(informacion)
console.groupEnd();

console.groupCollapsed("Ejercicio 6");
// Ejercicio 6
// 6. Cambia el valor de una propiedad en el objeto persona.
persona.ciudad = "cali"
console.log(persona)
console.groupEnd();

console.groupCollapsed("Ejercicio 7");
// Ejercicio 7
// 7. Elimina una propiedad del objeto libro.
delete libro.autor
console.log(libro)
console.groupEnd();

console.groupCollapsed("Ejercicio 8");
// Ejercicio 8
// 8. Crea un objeto llamado coche con propiedades como modelo, marca y año.
let coche = {
    modelo: "golf",
    marca: "volkswagen",
    año: "2016"
}
console.log(coche)
console.groupEnd();

console.groupCollapsed("Ejercicio 9");
// Ejercicio 9
// 9. Muestra todas las propiedades del objeto coche en la consola.
console.log(Object.keys(coche))
console.groupEnd();

console.groupCollapsed("Ejercicio 10");
// Ejercicio 10
// 10.Agrega un método al objeto coche que imprima un mensaje en la consola.
coche.saludar = function(){
    console.log(`Hola soy un ${this.marca} del año ${this.año}`);
}
console.log(coche.saludar())
console.groupEnd();

console.groupCollapsed("Ejercicio 11");
// Ejercicio 11
// 11.Crea un objeto llamado circulo con propiedades como radio y color.
let circulo = {
    radio: "5",
    color: "negro"
}
console.log(circulo)
console.groupEnd();

console.groupCollapsed("Ejercicio 12");
// Ejercicio 12
// 12.Calcula el área del círculo utilizando la fórmula A = πr2 y muestra el resultado.
let area = Math.PI * Math.pow(circulo.radio, 2)
let area1 = Math.PI * circulo.radio * circulo.radio
console.log(area)
console.log(area1)
console.groupEnd();

console.groupCollapsed("Ejercicio 13");
// Ejercicio 13
// 13.Crea un objeto llamado rectangulo con propiedades como ancho y alto.
let rectangulo = {
    ancho: "5",
    alto: "10"
}
console.log(rectangulo)
console.groupEnd();

console.groupCollapsed("Ejercicio 14");
// Ejercicio 14
// 14.Calcula el perímetro del rectángulo utilizando la fórmula P = 2 * (ancho + alto) y muestra el resultado.
let perimetro = 2 * (Number(rectangulo.ancho) + Number(rectangulo.alto))
console.log(perimetro)
console.groupEnd();

console.groupCollapsed("Ejercicio 15");
// Ejercicio 15
// 15.Combina las propiedades de los objetos circulo y rectangulo en un nuevo objeto llamado formas.
let formas = {...circulo, ...rectangulo}
console.log(formas)
console.groupEnd();

console.groupCollapsed("Ejercicio 16");
// Ejercicio 16
// 16.Crea un objeto llamado computadora con propiedades como marca, modelo y precio.
let computadora = {
    marca: "dell",
    modelo: "vostro",
    precio: "2.500.000"
}
console.log(computadora)
console.groupEnd();

console.groupCollapsed("Ejercicio 17");
// Ejercicio 17
// 17.Muestra el precio de la computadora en la consola.
console.log(computadora.precio)
console.groupEnd();

console.groupCollapsed("Ejercicio 18");
// Ejercicio 18
// 18.Agrega una propiedad al objeto computadora que indique si tiene o no una tarjeta gráfica.
computadora.tarjetaGrafica = true
console.groupEnd();

console.groupCollapsed("Ejercicio 19");
// Ejercicio 19
// 19.Crea un objeto llamado mascota con propiedades como nombre, especie y edad.
let mascota = {
    nombre: "pistacho",
    especie: "bulldog",
    edad: "8 años"
}
console.log(mascota)
console.groupEnd();

console.groupCollapsed("Ejercicio 20");
// Ejercicio 20
// 20.Muestra en la consola la especie de la mascota en mayúsculas.
console.log(mascota.especie)
console.groupEnd();

console.groupCollapsed("Ejercicio 21");
// Ejercicio 21
// 21.Crea un objeto llamado fruta con propiedades como nombre y color.
let fruta = { 
    nombre: "manzana",
    color: "rojo"
}
console.log(fruta)
console.groupEnd();

console.groupCollapsed("Ejercicio 22");
// Ejercicio 22
// 22.Agrega un método al objeto fruta que imprima un mensaje indicando si la fruta está madura.
fruta.madura = function(){
    console.log(`La ${this.nombre} esta madura`);
}
fruta.madura()

console.groupEnd();

console.groupCollapsed("Ejercicio 23");
// Ejercicio 23
// 23.Crea un objeto llamado estudiante con propiedades como nombre, edad y calificaciones.
let estudiante = {
    nombre: "daniela",
    edad: "30",
    calificacion: {
        matematicas: 5,
        ingles: 4,
        sociales: 3
    }
}
console.log(estudiante)

console.groupEnd();

console.groupCollapsed("Ejercicio 24");
// Ejercicio 24
// 24.Muestra en la consola el promedio de las calificaciones del estudiante.
let sumaNotas = estudiante.calificacion.matematicas + estudiante.calificacion.ingles + estudiante.calificacion.sociales
let promedio = sumaNotas / 3
console.log(promedio)

console.groupEnd();

console.groupCollapsed("Ejercicio 25");
// Ejercicio 25
// 25.Agrega una propiedad al objeto estudiante que indique si ha aprobado o no.
estudiante.aprobo = true
console.log(estudiante)

console.groupEnd();

console.groupCollapsed("Ejercicio 26");
// Ejercicio 26
// 26.Crea un objeto llamado bolsa con propiedades como tamaño y color.
let bolsa = { 
    tamano: "20cm",
    color: "negra"
}
console.log(bolsa)
console.groupEnd();

console.groupCollapsed("Ejercicio 27");
// Ejercicio 27
// 27.Muestra en la consola un mensaje que indique la capacidad de la bolsa (tamaño).
console.log(bolsa.tamano)
console.groupEnd();

console.groupCollapsed("Ejercicio 28");
// Ejercicio 28
// 28.Agrega un método al objeto bolsa que cambie su color.
bolsa.cambioColor = function(){
    this.color = "azul"
    console.log(`El color de la bolsa ahora es ${this.color}`);
}
bolsa.cambioColor()
console.log(bolsa)
console.groupEnd();

console.groupCollapsed("Ejercicio 29");
// Ejercicio 29
// 29.Crea un objeto llamado telefono con propiedades como marca, modelo y sistema operativo.
let telefono = { 
    marca: "iphone",
    modelo: "13",
    sistemaOperativo: "ios"
}
console.log(telefono)
console.groupEnd();

console.groupCollapsed("Ejercicio 30");
// Ejercicio 30
// 30.Muestra en la consola un mensaje indicando el sistema operativo del teléfono.
console.log(telefono.sistemaOperativo);
console.groupEnd();

console.groupCollapsed("Ejercicio 31");
// Ejercicio 31
// 31.Agrega una propiedad al objeto telefono que represente la cantidad de memoria RAM.
telefono.memoriaRam = "128g"
console.log(telefono)
console.groupEnd();

console.groupCollapsed("Ejercicio 32");
// Ejercicio 32
// 32.Crea un objeto llamado animal con propiedades como tipo y sonido.
let animal = {
    tipo: "canino",
    sonido: "ladridos"
}
console.log(animal);
console.groupEnd();

console.groupCollapsed("Ejercicio 33");
// Ejercicio 33
// 33.Muestra en la consola un mensaje que indique el sonido del animal.
console.log(animal.sonido);
console.groupEnd();

console.groupCollapsed("Ejercicio 34");
// Ejercicio 34
// 34.Agrega un método al objeto animal que imprima un mensaje indicando su tipo y sonido.
animal.propiedades = function(){
    console.log(`El animal es de tipo ${this.tipo} y realiza unos sonidos de ${this.sonido}`)
}
animal.propiedades()
console.groupEnd();

console.groupCollapsed("Ejercicio 35");
// Ejercicio 35
// 35.Crea un objeto llamado vuelo con propiedades como aerolínea, número de vuelo y hora de salida.
let vuelo = { 
    aerolinea: "avianca",
    numeroDeVuelo: "a42",
    horaSalida: "8pm"
}
console.log(vuelo)
console.groupEnd();

console.groupCollapsed("Ejercicio 36");
// Ejercicio 36
// 36.Muestra en la consola un mensaje que indique la aerolínea y el número de vuelo.
console.log(`la aerolinia es ${vuelo.aerolinea} y el numero de vuelo es ${vuelo.numeroDeVuelo}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 37");
// Ejercicio 37
// 37.Agrega una propiedad al objeto vuelo que represente el destino del vuelo.
vuelo.destino = "cartagena"
console.log(vuelo)
console.groupEnd();

console.groupCollapsed("Ejercicio 38");
// Ejercicio 38
// 38.Crea un objeto llamado jugador con propiedades como nombre, equipo y posición.
let jugador = { 
    nombre: "felipe",
    equipo: "nacional",
    posicion: "delantero"
}
console.log(jugador)
console.groupEnd();

console.groupCollapsed("Ejercicio 39");
// Ejercicio 39
// 39.Muestra en la consola un mensaje que indique el nombre y el equipo del jugador.
console.log(`El nombre del jugador es ${jugador.nombre} y el equipo es ${jugador.equipo}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 40");
// Ejercicio 40
// 40.Agrega un método al objeto jugador que imprima un mensaje indicando su posición en el equipo.
jugador.posicionJugador = function(){
    console.log(`la posicion del jugador es ${this.posicion}`)
}
jugador.posicionJugador()

console.groupEnd();

