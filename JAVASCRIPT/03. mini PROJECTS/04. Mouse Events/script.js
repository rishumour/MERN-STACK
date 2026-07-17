const canvas = document.getElementById('paintCanvas')
const ctx = canvas.getContext('2d')
const clearBtn = document.getElementById('clearBtn')

// Drawing State
let isDrawing = false
let brushColor = '#cfd0d3'
let brushWidth = 5

// mousedown and mouseup
// User click and hold the board -> drawing enabled
canvas.addEventListener('mousedown', (event)=>{
    isDrawing = true
    ctx.beginPath()
    ctx.moveTo(event.offsetX, event.offsetY)
})

// drawing disabled
canvas.addEventListener('mouseup', ()=>{
    isDrawing = false
    ctx.closePath()
})

// mousemove 
canvas.addEventListener('mousemove', (event)=>{
    if(!isDrawing) return  // mouse is not held

    ctx.lineWidth = brushWidth
    ctx.lineCap = 'round'  // smooth corners
    ctx.strokeStyle = brushColor

    ctx.lineTo(event.offsetX, event.offsetY)  // line draw
    ctx.stroke(); // line visible to screen
});

canvas.addEventListener('mouseleave', ()=>{
    isDrawing = false
})

canvas.addEventListener('mouseenter', ()=>{
    console.log("You can draw")
})

// clear board
clearBtn.addEventListener('click', ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

// double click
canvas.addEventListener('dblclick', ()=>{
    const randomBg = `hsl(${Math.random()*360}, 80%, 90%)`
    canvas.style.backgroundColor = randomBg
})
canvas.addEventListener('contextmenu', (event)=>{
    event.preventDefault() // prevents default context menu popup on right click
    const colors = ['white', 'black', 'red', 'green', 'yellow', 'blue']
    brushColor = colors[Math.floor(Math.random() * colors.length)]
})