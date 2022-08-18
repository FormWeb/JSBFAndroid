const produits = [
    {
        name: "Pomme",
        prix: 0.2
    },
    {
        name: "Poire",
        prix: 0.3
    },
    {
        name: "Cerise",
        prix: 0.5
    }
]

let total = 0

let promo = true

for (let produit of produits) {
    const nb = parseInt(prompt("Combien voulez vous de " + produit.name))

    if (nb) { // Notion de truly / falsy : 0 peut être considérer comme faux en javascript
        const prixProduit = nb * produit.prix
        total += prixProduit
    }
    else {
        promo = false
    }

}

if (promo) {
    total = total * 0.9
}

alert("Le total est de : " + total)