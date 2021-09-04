//******SETTING THE DATE******//
const dateEl = document.getElementById("date")
dateEl.innerHTML = new Date().getFullYear()


//******NAVBAR TOGGLE******//
const linksContainerEl = document.querySelector(".links-container")
const linksEl = document.querySelector(".links")
const navbarToggleEl = document.querySelector(".nav-toggle")

navbarToggleEl.addEventListener("click", function() {
    // linksContainerEl.classList.toggle("show-links")

    const containerHeight = linksContainerEl.getBoundingClientRect().height
    const linksHeight = linksEl.getBoundingClientRect().height

    if (containerHeight === 0) {
        linksContainerEl.style.height = `${linksHeight}px`
    } else {
        linksContainerEl.style.height = 0
    }
})


//******FIXING NAVBAR AFTER SCROLL******//
//******ADDING TOP BTN AFTER SCROLL AND TEXT ANIMATION******//

const navbarEl = document.getElementById("nav")
const topLinkEl = document.querySelector(".top-link")
const sectionAboutEl = document.querySelector(".section--about")

window.addEventListener("scroll", function() {
    scrollHeight = window.pageYOffset
    navbarHeight = navbarEl.getBoundingClientRect().height

    if (scrollHeight > navbarHeight) {
        navbarEl.classList.add("fixed-nav")
        topLinkEl.classList.add("show-link")
        sectionAboutEl.classList.add("section--slide")
    } else {
        navbarEl.classList.remove("fixed-nav")
        topLinkEl.classList.remove("show-link")
        sectionAboutEl.classList.remove("section--slide")

    }
})


//******SMOOTH SCROLLING******//
const scrollLinksEl = document.querySelectorAll(".scroll-link")

scrollLinksEl.forEach(function(links) {
    links.addEventListener("click", function(e) {
        //prevent default
        e.preventDefault()

        //navigating to a specific position
        const id = e.currentTarget.getAttribute("href").slice(1)  //e.currentTarget === links (attribute)
        const element = document.getElementById(id)

        //calculating heights of the container
        const containerHeight = linksContainerEl.getBoundingClientRect().height
        const navbarHeight = navbarEl.getBoundingClientRect().height
        let position = element.offsetTop - navbarHeight

        if(!navbarEl.classList.contains("fixed-nav")) {
            position -= navbarHeight
        }
        if(navbarHeight > 82) {
            position += containerHeight
        }

        window.scrollTo({
            left: 0,
            top: position
        })

        linksContainerEl.style.height = "0"
    })
})

//TIL-
//Learnt the date() function.
//Learnt getClientBoundingRect method which calculates the height of the client (container)
//learnt about "scroll" event in addEventListener
//e.preventDefault() it stops the fuction from being performed.
//getAtrribute function, gets the specified attribute in a string format
//offset functions which give the measurements/co-ordinates
//scrollTo function which takes us to the specific point