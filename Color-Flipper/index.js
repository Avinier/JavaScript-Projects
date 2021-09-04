const colors = ["red", "blue", "rgba(255, 150, 200)", "#f15025"]
const btnEl = document.getElementById("btn-el")
const colorEl = document.querySelector(".color")

btnEl.addEventListener("click", function() {
    //get random number between 0-3
    const randomNumber = getRandomNumber()
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber]
    colorEl.innerHTML = colors[randomNumber]
})

function getRandomNumber() {
    rand = Math.floor(Math.random() * colors.length)
    return rand
}

//TIL-
// Learnt the random function, innerHTML, manupilating styles using JS