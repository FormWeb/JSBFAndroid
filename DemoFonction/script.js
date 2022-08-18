function multiplierPar2(x) {
    return x * 2
}

console.log(multiplierPar2(5))

const multiplierPar3 = function(x) {
    return x * 3
}

console.log(multiplierPar3(5))

const multiplierPar4 = (x) => {
    return x * 4
}

console.log(multiplierPar4(5))

const multiplierPar5 = x => x*5

setTimeout(() => {
    console.log("Bonjour")
}, 2000)

function changer2emeElement(list) {
    list[1] = 0
}

const tab = [1, 2, 3]

changer2emeElement(tab)

console.log(tab)

function levelUp(pokemon) {
    pokemon.level += 1
}

const salameche = {
    name: "Salameche",
    type: "Feu",
    level: 12
}

levelUp(salameche)

console.log(salameche)