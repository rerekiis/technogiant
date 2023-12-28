const cartSide = document.querySelector(".cart")

const cartStorage = JSON.parse(localStorage.getItem("cart") || "[]")

if (cartStorage.length) {
    cartStorage.forEach(el => {
        const {title, price} = el
        const newCard = document.createElement("div")
        newCard.innerHTML = `<h1 class="card__title">${title}</h1><p class="card__price">${price}</p>`
        cartSide.appendChild(newCard)
    });
}