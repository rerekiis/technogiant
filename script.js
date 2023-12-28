const cards = document.querySelectorAll(".card")


cards.forEach((el,idx) => {
    console.dir(el)
    const btn = el.childNodes[7]
    const title = el.childNodes[3].innerText
    const price = el.childNodes[5].innerText

    
    btn.addEventListener("click", () => {
        const cartStorage = localStorage.getItem("cart") || "[]"
        const cart = JSON.parse(cartStorage)
        const card = { title, price }
        localStorage.setItem("cart", JSON.stringify([...cart, card]))
    })
})
console.log(cards)
