const name1 = "lucas perez"

const coder = {
    id: "c001",
    name: "javier",
    lastName: "combita",
    birhDate: new Date("1998-04-23 14:00:00"),
    identificationNumber: "109624738486",
    location: {
        country: "colombia",
        state: "antioquia",
        city: "medellin",
    },
    email: "jcomtech@gmail.com",
    clan: "linux",
    phoneNumber: "3136849891",
    codebtor: "lina combita",
    address: "cl 14 # 58-43",
    workingDay: "completa",
    saludar: function () {
        return `Hola Mundo, soy ${this.name}`;
    },
    showFullName: function () {
        console.log(this.name, this.lastName);
    }

}

console.log(coder)

console.group("show data")

console.log(coder.name, coder.lastName);
console.log(coder["name"], coder["lastName"]);
console.log(coder.name, coder["lastName"]);
console.log(coder.saludar());
coder.showFullName();


console.groupEnd()

console.group("add data")

coder.typeBlood = "A +"
coder["gener"] = "masculino"

coder.emergency = {}
coder.emergency.contactName = "maria lopez"
coder.emergency["backupPhoneNumber"] = "313515416"

Object.defineProperty(coder, "teamLeader", {
    value: "robinson",
    writable: true, // permite que la propiedad sea actualizada
    enumerable: true, // perimite que la propiedad sea visible
    configurable: true, // permite que la propiedad sea eliminada 
})

delete coder.codebtor
coder.codebtor = undefined

console.log("")
console.log(coder)

console.groupEnd()

console.group("update data")

coder.id = "T001"
coder["phoneNumber"] = "1111222233344"
console.log(coder) 

console.groupEnd()

console.group("assign objects")

const objetoA = {
    a: "alpha",
    b: "bravo",
    c: "chalie"
}

const objetoB = {
    d: "delta",
    e: "echo",
    f: "foxtrot"
}

console.log(objetoA)
console.log(objetoB)

Object.assign(objetoA, objetoB)

console.log(objetoA)
console.log(objetoB)

console.groupEnd()

console.group("sum objects")

const objetoC = {
    a: "alpha",
    b: "bravo",
    c: "chalie"
}

const objetoD = {
    d: "delta",
    e: "echo",
    f: "foxtrot"
}

const objetoResultado = {...objetoC, ...objetoD}
console.log(objetoC);
console.log(objetoD);
console.log(objetoResultado);

console.groupEnd()

console.group("destructuring")

const person = {
    nameCoder: "javier",
    lastNameCoder: "combita",
    birthDateCoder: new Date("1998-04-23 14:00:00"),
    identificationNumberCoder: "109624738486",
    location: {
        countryCoder: "colombia",
        state: "antioquia",
        city: "medellin",
        address: "cl 14 # 58-43",
    },
    emailCoder: "jcomte@outlook.com"
}

//forma manuel

// const name = person.nameCoder
// const documentId = person.identificationNumberCoder
// const email = person.emailCoder


//forma dinamica
let {
    nameCoder: name,
    identificationNumberCoder: documentId,
    emailCoder: email
} = person


console.log(name)
console.log(documentId)
console.log(email)

//const {birthDateCoder, lastNameCoder} = person

let {
    nameCoder: nombreCoder,
    lastNameCoder: apellidoCoder,
    location: {
        address:direccion
    }
} = person

console.log(`${nombreCoder} ${apellidoCoder} ${location.direccion}`)
console.groupEnd()

console.group("mascota")

let mascota = {
    nombre: "pistacho",
    edad: "8 años",
    peso: "11kg",
    raza: "bulldog frances",
    especie: "canino",
    propietario: {
        nombrePrpopietario: "daniela",
        apellidoPropietario: "londoño",
        tipoDocumentoPropietario: "cedula",
        documentoPropietario: "1112233",
    },
    infoPropietario: function () {
        console.log(this.propietario.nombrePrpopietario, this.propietario.apellidoPropietario, this.propietario.tipoDocumentoPropietario, this.propietario.documentoPropietario);
    },
}

console.log(`${mascota.nombre} tiene ${mascota.edad}`)
mascota.infoPropietario()

console.groupEnd