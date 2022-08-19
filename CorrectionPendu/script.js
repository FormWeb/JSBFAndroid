function createHiddenWord(sWord) {
    let result = ""
    for (const c of sWord) {
        result = result + "*"
    }
    return result
}

console.log(createHiddenWord("maison")) // ******

function checkIfInWord(letter, sWord) {
    return sWord.includes(letter)
}

console.log(checkIfInWord("z", "maison"))

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

console.log(generateHiddenWord("*a****", "maison", "i"))

const mots = ["maison", "appartement", "chat"]