// Local Data
const cards = [
   {
       id: "1",
       img: "Erwin-Smith.jpg",
       heading: "Erwin Smith",
       subheading: "THE COMMANDER",
       content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam harum animi earum! Officiis est harum laboriosam assumenda nulla possimus explicabo aspernatur natus earum necessitatibus vero."
   },
   {
    id: "2",
    img: "https://i.ibb.co/JtSCnDd/levi-ackerman.jpg",
    heading: "Levi Ackerman",
    subheading: "THE CAPTAIN",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam harum animi earum! Officiis est harum laboriosam assumenda nulla possimus explicabo aspernatur natus earum necessitatibus vero."      
   },
   {
    id: "3",
    img: "https://i.ibb.co/k2rkTny/mikasa-ackerman.jpg",
    heading: "Mikasa Ackerman",
    subheading: "THE SOLDIER",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam harum animi earum! Officiis est harum laboriosam assumenda nulla possimus explicabo aspernatur natus earum necessitatibus vero."      
   },
   {
    id: "4",
    img: "https://i.ibb.co/xh6kF5L/d7bbc5ec5a89c43978966a740443f609.png",
    heading: "Eren Yaeger",
    subheading: "THE ATTACK TITAN",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam harum animi earum! Officiis est harum laboriosam assumenda nulla possimus explicabo aspernatur natus earum necessitatibus vero."      
   }
]

const imageEl = document.getElementById("image-el")
const headingEl = document.getElementById("heading-el")
const subheadingEl = document.getElementById("subheading-el")
const contentEl = document.getElementById("content-el")

const prevBtnEl = document.querySelector(".btn__prev")
const nextBtnEl = document.querySelector(".btn__next")
const cardBtnEl = document.querySelector(".card__btn")

let currentItem = 0
let temp = 0

nextBtnEl.addEventListener("click", function() {
    if (currentItem === (cards.length - 1)) {
        currentItem = -1
    }

    currentItem++
    temp = currentItem
    changeCard(currentItem)
})

prevBtnEl.addEventListener("click", function() {
    if (currentItem === 0) {
        currentItem = 4
    }
        
    currentItem--
    temp = currentItem
    changeCard(currentItem)
})

cardBtnEl.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * cards.length)
    if (temp === currentItem) {
        currentItem++
    }
    changeCard(currentItem)
})

function changeCard(card) {
    const item = cards[card]
    imageEl.src = item.img
    headingEl.textContent = item.heading
    subheadingEl.textContent = item.subheading
    contentEl.textContent = item.content
}

// TIL-
// Learnt that we can make databases with arrays,
// changing the DOM with function, good project