const hiddenWordHTML = document.querySelector("h3")
const inputHTMl = document.querySelector("input")
const btnHTML = document.querySelector("button")
const listWordHTML = document.querySelector("ul")
const essaiHTML = document.querySelector("span")

const words = ["maison", "appartement", "chat", "beluga"]
const MAX_TRIES = 6

let secretWord
let hiddenWord
let tries

function initGame() {
    secretWord = words[Math.floor(Math.random() * words.length)]
    console.log(secretWord)

    hiddenWord = createHiddenWord(secretWord)
    console.log(hiddenWord)

    tries = MAX_TRIES
    essaiHTML.innerText = tries

    hiddenWordHTML.innerText = hiddenWord

    // A supprimer

    // for (const word of words) {
    //     const itemHTML = document.createElement("li")
    //     itemHTML.innerText = word
    //     listWordHTML.appendChild(itemHTML)
    // }
}

function testChar() {
    if (!checkIfInWord(inputHTMl.value, secretWord)) {
        tries--
        if (tries <= 0) {
            let previousSecretWord = secretWord
            initGame()
            hiddenWordHTML.innerText = "Perdu ! Le mot était : " + previousSecretWord + ". Le nouveau mot est : " + hiddenWord
        }
    }
    else {
        hiddenWord = generateHiddenWord(hiddenWord, secretWord, inputHTMl.value)
        hiddenWordHTML.innerText = hiddenWord
        if (hiddenWord === secretWord) {
            initGame()
            hiddenWordHTML.innerText = "Gagné ! Le nouveau mot est : " + hiddenWord
        }
    }

    essaiHTML.innerText = tries
    inputHTMl.value = ""
    inputHTMl.focus()
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

btnHTML.addEventListener("click", () => {
    testChar()
})

inputHTMl.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        testChar()
    }
})

initGame()

