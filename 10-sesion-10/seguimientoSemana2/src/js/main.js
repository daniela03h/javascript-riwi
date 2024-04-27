
// Se crea un array de objetos con las mascotas y sus propietarios
let mascotas = [{
    nombreMascota: "pistacho",
    especie: "canimo",
    raza: "bull dog francres",
    edad: 8,
    peso: "11 kilos",
    estado: "estable",
    propietario: {
        nombrePropietario: "daniela londono",
        document: "1037627829",
        telefono: "3162777179",
        correo: "daniela0393h@gmail.com"
    }
},
{
    nombreMascota: "Luna",
    especie: "felino",
    raza: "siamés",
    edad: 5,
    peso: "5 kilos",
    estado: "estable",
    propietario: {
        nombrePropietario: "Juan Pérez",
        document: "123456789",
        telefono: "3101234567",
        correo: "juanperez@gmail.com"
    }
},
{
    nombreMascota: "Simba",
    especie: "felino",
    raza: "criollo",
    edad: 3,
    peso: "8 kilos",
    estado: "critico",
    propietario: {
        nombrePropietario: "María García",
        document: "987654321",
        telefono: "3209876543",
        correo: "mariagarcia@gmail.com"
    }
},
{
    nombreMascota: "Rocky",
    especie: "canino",
    raza: "pastor alemán",
    edad: 4,
    peso: "30 kilos",
    estado: "estable",
    propietario: {
        nombrePropietario: "Carlos Sánchez",
        document: "567890123",
        telefono: "3187654321",
        correo: "carlossanchez@gmail.com"
    }
},
{
    nombreMascota: "Nala",
    especie: "felino",
    raza: "persa",
    edad: 2,
    peso: "4 kilos",
    estado: "critico",
    propietario: {
        nombrePropietario: "Ana Rodríguez",
        document: "678901234",
        telefono: "3156789012",
        correo: "anarodriguez@gmail.com"
    }
},
{
    nombreMascota: "Max",
    especie: "canino",
    raza: "labrador",
    edad: 6,
    peso: "25 kilos",
    estado: "critico",
    propietario: {
        nombrePropietario: "Laura Martínez",
        document: "456789012",
        telefono: "3178901234",
        correo: "lauramartinez@gmail.com"
    }
},
{
    nombreMascota: "Coco",
    especie: "felino",
    raza: "angora",
    edad: 1,
    peso: "3 kilos",
    estado: "estable",
    propietario: {
        nombrePropietario: "Pedro Gómez",
        document: "890123456",
        telefono: "3145678901",
        correo: "pedrogomez@gmail.com"
    }
},
{
    nombreMascota: "Paco",
    especie: "canino",
    raza: "golden retriever",
    edad: 5,
    peso: "28 kilos",
    estado: "estable",
    propietario: {
        nombrePropietario: "Laura Martínez",
        document: "456789012",
        telefono: "3178901234",
        correo: "lauramartinez@gmail.com"
    }
}]


// Se crea una funcion menu con un prompt para que el usurio pueda eledir una opcion
function menu() {
    const opcion = prompt(
        `La Veterinaria RIWI
        Elige una opcion:
        1. Crear mascota
        2. leer mascota
        3. Actualizar mascota
        4. Eliminar mascora
        5. Listar Propietarios
        6. Listar Mascotas
        7. Filtrar mascota por propietario`)
    if (opcion === "1") {
        crearNuevaMascota()
    } else if (opcion === "2") {
        buscarMascota()
    } else if (opcion === "3") {
        actualizarMascota()
    } else if (opcion === "4") {
        eliminarMascota()
    } else if (opcion === "5") {
        listarPropietarios()
    } else if (opcion === "6") {
        listarMascotas()
    } else if (opcion === "7") {
        filtrarPorPropietario()
    } else {
        alert("Ingresaste una opcion incorrecta")
        menu()
    }
}
menu()

// Funcion para crear o registrar una nueva mascota 
function crearNuevaMascota() {
    const nombre = prompt("Ingresa el nombre de la mascotas").toLowerCase()
    const especie = prompt("Ingresa la especie de la mascotas").toLowerCase()
    const raza = prompt("Ingresa la raza de la mascotas").toLowerCase()
    const fechaDeNacimiento = prompt("Ingresa la fecha de nacimiento de la mascotas", "MM/DD/YYYY")
    const peso = prompt("Ingresa el peso de la mascota").toLowerCase()
    const estado = prompt("Ingresa si la mascota esta estable o critico").toLowerCase()
    const nombrePropietario = prompt("Ingresa el nombre del propietario").toLowerCase()
    const documento = prompt("Ingresa el documento del propietario").toLowerCase()
    const telefono = prompt("Ingresa el telfono").toLowerCase()
    const correo = prompt("Ingresa el creo").toLowerCase()

    const edad = new Date().getFullYear() - new Date(fechaDeNacimiento).getFullYear()

    const nuevaMascota = {
        nombreMascota: nombre,
        especie,
        raza,
        edad,
        peso,
        estado,
        propietario: {
            nombrePropietario,
            documento,
            telefono,
            correo
        }
    }

    mascotas.push(nuevaMascota)
    console.log(mascotas)
}

// Funcion buscar una mascota por el nombre

function buscarMascota() {
    const buscarMascotaPorNombre = prompt("Ingresa el nombre de la mascotas que quieres buscar").toLowerCase()
    const mascotaEncontrada = mascotas.filter(mascota => {
        return mascota.nombreMascota === buscarMascotaPorNombre
    })
    console.log(mascotaEncontrada)
}

// Lista de todas las mascotas registradas, en dicho array.
function listarMascotas() {
    mascotas.forEach(mascota => {
        console.log(mascota.nombreMascota)
    })
}

// Lista de todos los dueños
function listarPropietarios() {

    mascotas.forEach(mascota => {
        console.log(mascota.propietario.nombrePropietario)
    })
}

// Funcion actualizar la información de una mascota existente.
function actualizarMascota() {
    const mascotaActualizar = prompt("Ingrese mascota a actualizar").toLocaleLowerCase()
    const indiceMascota = mascotas.findIndex(mascota => mascota.nombreMascota === mascotaActualizar)
    const nuevoCriterio = prompt("Ingrese el nuevo estado").toLocaleLowerCase()
    mascotas[indiceMascota].estado = nuevoCriterio
    console.log(mascotas[indiceMascota])
}

// Funcion eliminar una mascota del array.
function eliminarMascota() {
    const mascotaEliminar = prompt("Ingrese el nombre de la mascota que desea eliminar").toLowerCase()
    mascotas = mascotas.filter(mascota => {
        return mascota.nombreMascota !== mascotaEliminar
    })
    listarMascotas()
}
// Funcion filtrar y luego mostrar a todas las mascotas pertenecientes a un mismo dueño
function filtrarPorPropietario() {
    const propietario = prompt("Ingrese el propietario").toLocaleLowerCase()
    const mascotasPropietario = mascotas.filter(mascota => {
        return mascota.propietario.nombrePropietario.toLocaleLowerCase() === propietario
    })
    console.log(mascotasPropietario)
}
