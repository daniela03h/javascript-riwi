console.groupCollapsed("forEach")

const listFruits = [
    "apple",
    "orange",
    "banana",
    "grape",
    "strawberry",
    "kiwi",
    "pineapple",
    "watermelon",
    "mango",
    "pear",
    "peach",
    "plum",
    "cherry",
    "blueberry",
    "raspberry",
    "blackberry",
    "lemon",
    "lime",
    "coconut",
    "pomegranate"
];

// print list with classin for
console.log(listFruits.length)
console.log(listFruits[16])

for (let i = 0; i < listFruits.length; i++) {
    console.log(listFruits[i])
}

console.error("line break")

listFruits.forEach(fruit => {
    console.log(fruit)
})

console.error("line break")

listFruits.forEach(function (element) {
    console.log(element)
})

console.error("line break")

//lowercase list
listFruits.forEach(fruit => {
    console.log(fruit.toLowerCase())
})

console.error("line break")
//uppercase list
listFruits.forEach(fruit => {
    console.log(fruit.toUpperCase())
})

console.groupEnd()


console.groupCollapsed("for in")

for (const key in listFruits) {
    console.log(key)
}

console.error("line break")

for (const key in listFruits) {
    console.log(listFruits[key])
}

console.error("line break")

listFruits.forEach((element, index) => {
    console.log("the fruit " + element + " is in the position" + index)
})

console.groupEnd()


console.groupCollapsed("for of")

for (const fruit of listFruits) {
    console.log(fruit)
}

console.error("line break")

console.groupEnd()