const hiddenWordHTML = document.querySelector("h3")
const inputHTMl = document.querySelector("input")
const testHTML = document.querySelector("button")
const listWordHTML = document.querySelector("ul")

const words = ["maison", "appartement", "chat", "beluga"]

let secretWord
let hiddenWord

function initGame() {
    secretWord = words[Math.floor(Math.random() * words.length)]
    console.log(secretWord)

    hiddenWord = createHiddenWord(secretWord)
    console.log(hiddenWord)

    hiddenWordHTML.innerText = hiddenWord

    // A supprimer

    for (const word of words) {
        const itemHTML = document.createElement("li")
        itemHTML.innerText = word
        listWordHTML.appendChild(itemHTML)
    }
}

function createHiddenWord(sWord) {
    let result = ""
    for (const c of sWord) {
        result = result + "*"
    }
    return result
}

function checkIfInWord(letter, sWord) {
    return sWord.includes(letter)
}

function generateHiddenWord(hWord, sWord, letter) {
    let result = ""
    for (let i = 0; i < hWord.length; i++) {
        if (sWord[i] === letter) {
            result = result + letter
        }
        else {
            result = result + hWord[i]
        }
    }
    return result
}

initGame()

