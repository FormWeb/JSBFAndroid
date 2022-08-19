const h3HTML = document.querySelector("h3")
const inputHTML = document.querySelector("input")
const buttonHTML = document.querySelector("button")

buttonHTML.addEventListener("click", () => {
    console.log(inputHTML.value)
    inputHTML.value = "Bonjour"
})

inputHTML.addEventListener("input", () => {
    if (inputHTML.value.length > 1) {
        inputHTML.value = inputHTML.value[0]
    }
})