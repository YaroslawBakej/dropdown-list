let btn = document.querySelector(".btn")
let city = document.querySelector(".city")

btn.addEventListener("click", () => {
    if (city.hidden) {
        city.hidden = false
        document.querySelector(".img").style = `
        background-image: url(./assets/Chevron1.svg)`
    } else {
        city.hidden = true
        document.querySelector(".img").style = `
        background-image: url(./assets/Chevron.svg)`
    }
})
city.addEventListener("click", event => {
    document.querySelector(".btn p").textContent = event.target.textContent
    city.hidden = true;
    document.querySelector(".img").style = `
        background-image: url(./assets/Chevron.svg)`
})