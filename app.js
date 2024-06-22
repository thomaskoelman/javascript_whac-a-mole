const squares = document.querySelectorAll('.square')
//const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let molePosition
let timer
let currentTime = 60

function randomInt(maxInt) {
    const random = Math.random()
    const maxRandom = random * maxInt
    return Math.floor(maxRandom)
}

function moveMole() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    const index = randomInt(9)
    const randomSquare = squares[index]
    randomSquare.classList.add('mole')
    molePosition = randomSquare.id

    countDown()
}

function activateMovement() {
    timer = setInterval(moveMole, 1000)
}

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(timer)
        alert('game over! score: ' + result)
    }
}

function app() {
 squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == molePosition) {
            result++
            score.textContent = result
            molePosition = null
        }
    })
 })
 activateMovement()
}

app()