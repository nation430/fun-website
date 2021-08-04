const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')


btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

function createBoxes(){
   for(let i = 0; i < 4; i++){
       for(let j = 0; j < 4; j++){
           const box = document.createElement('div')
           box.classList.add('box')
           box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
           boxesContainer.appendChild(box)
       }
   }
}

createBoxes()


//moving text
const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'Hello Welcome To This Fun Websites...'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)