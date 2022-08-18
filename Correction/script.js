// Exo 1 Année bissextile

// console.log("5" - "1")

const annee = parseInt(prompt("Entrez un année !"))

if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
    alert("L'année est bissextile")
}
else {
    alert("L'année n'est pas bissextile")
}

// Exo 2 Calculatrice

const nb1 = prompt("Entrez le premier nombre")
const op = prompt("Entrez un opérateur (+, -, *, /)")
const nb2 = prompt("Entrez le deuxième nombre")

let resultat

switch(op) {
    case "+":
        resultat = parseInt(nb1) + parseInt(nb2)
        break
    case "-":
        resultat = nb1 - nb2
        break
    case "*":
        resultat = nb1 * nb2
        break
    case "/":
        resultat = nb1 / nb2
        break
    default:
        resultat = "Erreur"
        break
}

if (resultat === "Erreur") {
    alert("L'opérateur n'existe pas")
}
else {
    alert(`${nb1} ${op} ${nb2} = ${resultat}`)
}