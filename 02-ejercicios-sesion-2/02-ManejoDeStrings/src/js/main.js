//Strings
// const option1 = "hola mundo"
// const option2 = String("hola mundo")
// const option3 = new String("hola mundo")

// console.info(option1)
// console.info(option2)
// console.info(option3)

// Extraccion de datos
// const message = "Este es un mensaje para pruebas"
// document.write(message)

// Extraer la cantidad 
// console.info(message.length)

// Extraer un caracter
// console.info(message[1])
// console.info(message.charAt(1))
// console.info(message.search("mensaje"))
// console.info(message.includes("mensaje"))
// console.info(message.startsWith("Este"))
// console.info(message.endsWith("pruebas"))

//Interpolacion con cadenas, concatenacion
// const messageOne = "Este es un mensaje para"
// const messageTwo = "practicar concatenacion"
// const fullName = "Daniela Londono"

// console.info(messageOne)
// console.info(messageTwo)

// console.info("option 1 (+): " + messageOne + " " + messageTwo)
// console.info("option 2 (,):", messageOne, messageTwo)
// console.info(`option 3 (\`):  ${messageOne} ${messageTwo}`)
// console.info("option 4 concat() simple", messageOne.concat(" ").concat(messageTwo))
// console.info("option 5 concat() abreviada", messageOne.concat(" ", messageTwo))

// const header = `
// <header>
//   <h1>Hola mundo, mi nombre es ${fullName}</h1>
// </header>
// `
// document.write(header)


// Depuracion de Strings
// const message = "HolA coMO eSTas"
// document.write(message)

// console.info(message.toLocaleLowerCase())
// console.info(message.toUpperCase())


//limpieza de espacios 
// const message = "     daniela0393h@.gamil.com   "

// console.info(message)
// console.info(message.trimStart())
// console.info(message.trimEnd())
// console.info(message.trim())


//Fragmentacion de un string 
// const message = "anita lava la tina porque sse porto mal"
// document.write(message)

// console.info(message.substring(9))
// console.info(message.substring(0, 10))

// console.info(message.slice(9))
// console.info(message.slice(0, 10))

// console.info(message.replace("a", "e"))
// console.info(message.replaceAll("a", "e"))
// console.info(message.replaceAll(/[aeiou]/g, "p"))

//Relleno de string
// const message = "Riwi"
// document.write(message)

// console.info(message.repeat(4))
// console.info(message.padStart(10, "#"))
// console.info(message.padEnd(10, "#"))

//DESTRUCCION TOTAL
const message = "En Riwi todos somos una familia"
document.write(message)

//console.table(message.split(""))
console.table(message.split(" "))
console.table(message.split(" ", 2))