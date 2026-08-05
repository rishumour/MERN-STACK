const menuBtn = document.querySelector("#menuBtn")
const fixedMenu = document.querySelector(".fixed-menu")

menuBtn.addEventListener("click", () => {
    const isOpen = fixedMenu.style.top === "0%"
    fixedMenu.style.top = isOpen ? "-110%" : "0%"
})


const box = document.querySelector(".cursor-box")
const pointer = document.querySelector(".pointer")

document.querySelector(".hero").addEventListener("mousemove", (e) => {
    box.style.left = e.clientX + "px"
    box.style.top = e.clientY + "px"
    box.style.transition = "all 0.0s linear"
    box.style.visibility = "visible"
    pointer.style.visibility = "hidden"
})

document.querySelector(".hero").addEventListener("mouseleave", (e) => {
    box.style.visibility = "hidden"
    pointer.style.visibility = "visible"
})


document.addEventListener("mousemove", (e) => {
    pointer.style.left = e.clientX + "px"
    pointer.style.top = e.clientY + "px"
    pointer.style.transition = "all 0.1s linear"
})

document.addEventListener("mouseleave", () => {
    pointer.style.visibility = "hidden"
    box.style.visibility = "hidden"
})

document.addEventListener("mouseenter", (e) => {
    const isHero = e.target && e.target.closest && e.target.closest(".hero")
    if (!isHero) {
        pointer.style.visibility = "visible"
    }
})

// this gives a onclick effect
document.addEventListener("mousedown", () => {
    box.style.transform = "translate(-50%, -50%) scale(0.7)"
    box.style.backgroundColor = "rgba(0, 0, 0, 0.8)" 
})

document.addEventListener("mouseup", () => {
    box.style.transform = "translate(-50%, -50%) scale(1)"
    box.style.backgroundColor = "" 
})