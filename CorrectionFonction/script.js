function shuffle(tab) {
    for (let i = tab.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i+1))
        let temp = tab[i]
        tab[i] = tab[randomIndex]
        tab[randomIndex] = temp
    }
}

const tab = [1, 2, 3, 4]
shuffle(tab)
console.log(tab)