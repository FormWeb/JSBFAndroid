// Interaction avec l'utilisateur ou la console
prompt("Entrez votre age : ")
alert("hello world")
console.log("hello world")

// Déclaration de variable

// Variable
let i

i = 10
i = "bonjour"

// Constante
const a = 5

// Type de variable
// Number, String, Boolean
let j = 0
let name = "Jean"
let majeur = false

const pasDeValeurDefinie = undefined
const pasDeValeur = null

// Conversion de variable
let nombre = prompt("Entrez un nombre")
let nombreInt = parseInt(nombre)

// NaN = Not A Number
console.log(nombreInt === NaN)
console.log(isNaN(nombre))

// Opérateur

// Comme en java
j = 45 + 2 - 7 * 5 / 4 

// ** = exposant
j = j ** 3

// Post operation
j++
j--

// Chaine de caractère

let firstName = "William"
let fullName = `${firstName} Genard`
let fullName2 = firstName + " Genard"

let charAtOne = firstName[1]

let lengthFirstName = firstName.length

console.log(charAtOne)

// Boolean : ===, !==, >, <, >=, <= \\\ &&, ||, !

console.log(1 == "1") // True
console.log(1 === "1") // False

// Structure conditionnelle

let plusDe18Ans = true

// If Else If

if (plusDe18Ans) {
    console.log("Vous avez plus de 18 ans !")
}
// else if (condition) {}
else {
    console.log("Vous avez moins de 18 ans !")
}

// Switch

let jour = "Lundi"

switch(jour) {
    case "Lundi":
        console.log("Nous sommes lundi")
        break;
    case "Mardi":
        console.log("Nous sommes mardi")
        break;
    default:
        console.log("NOus sommes ni mardi ni lundi")
        break;
}

switch(true) {
    case jour === "Lundi":
        console.log("Nous sommes lundi")
        break
    case jour === "Mardi":
        console.log("Nous sommes mardi")
        break
}




