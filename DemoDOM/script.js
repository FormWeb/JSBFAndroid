// Récupération

// Récupérer un élément HTML

// Par id
const h1HTML = document.getElementById("first-title")
h1HTML.innerText = "Je suis un nouveau h1"

// Selecteur CSS
const h2HTML = document.querySelector("h2")
console.log(h2HTML.innerText)

// Récupère un tableau d'élément HTML

// Par classe
const h3HTML = document.getElementsByClassName("beautiful-h3")
for (const elem of h3HTML) {
    console.log(elem)
}

// Selecteur CSS
const h3HTMLByQuery = document.querySelectorAll(".beutiful-h3")

// Par nom de balise
const h3HTMLByTag = document.getElementsByTagName("h3")


// Manipuler

// Changer le texte
h1HTML.innerText = "Je suis un très nouveau h1"

// Changer l'HTML
h2HTML.innerHTML = "<em>Je suis un nouveau h2</em>"

// Manipuler les attributs
h1HTML.setAttribute("class", "red")
console.log(h1HTML.getAttribute("class"))

// Manipulation des classes
h1HTML.classList.remove("red")
h1HTML.classList.add("green")


// Récupération parent/enfant


const ulHTML = document.querySelector("ul")
console.log(ulHTML)

const firstElemUl = ulHTML.firstElementChild
console.log(ulHTML.firstElementChild)

console.log(ulHTML.lastElementChild)

// Attention à ne pas confondre
console.log(ulHTML.firstChild)

// Récupérer tous les enfants
console.log(ulHTML.children)

// Récupérer le parent
console.log(firstElemUl.parentElement)

// Création d'élément

const newElem = document.createElement("li")
newElem.innerText = "Nouvelle"
newElem.classList.add("green")

ulHTML.appendChild(newElem)