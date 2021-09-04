const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const btnEl = document.getElementById("btn-el")
const colorEl = document.querySelector(".color")

btnEl.addEventListener("click", function() {
    let hexColor = "#"
    for (let i=0; i < 6; i++) {
        hexColor += hex[getHexNumber()]
    }
    document.body.style.background = hexColor
    colorEl.innerHTML = hexColor
    document.querySelector(".hex::after").style.color = hexColor
})

function getHexNumber() {
    return Math.floor(Math.random() * hex.length)
    
}

// TIL-
// Made a hexadecimal number using array (containing the hexadecimals), 
// initialized hex with '#' and added other numbers with for loop and random number function