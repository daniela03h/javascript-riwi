let userName = prompt("Escribe tu nombre")
let lastName = prompt("Escribe tus apellidos")
const age = prompt("Escribe tu edad")

console.info(userName)
console.warn(userName)
console.error(userName)

const mail = prompt("Escribe tu correo")
let phone = prompt("Escribe tu telfono")
let address = prompt("Escribe tu direccion")

console.debug(mail)
console.log(phone)
// alert(address)
console.log(address, "background-color:red")

console.info("Full name: " + userName + " " + lastName)
console.info("Full name:", userName, lastName)
console.info(`Full name: ${userName} ${lastName}`)

console.info("Full info: " + userName + " " + lastName + " " + age + " " + mail + " " + phone + " " + address)
console.info("Full info:", userName, lastName, age, mail, phone, address)
console.info(`Full info: ${userName} ${lastName} ${age} ${mail} ${phone} ${address}`)


console.group("data basic")
console.log(userName)
console.log(lastName)
console.log(age)
console.groupEnd()

console.group("data contact")
console.log(mail)
console.log(phone)
console.log(address)
console.groupEnd()


const coders = ["lupe ortiz", "mateo duarte", "maria antonieta"]

console.log(coders)
console.table(coders)