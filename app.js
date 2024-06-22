const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0

function randomInt(maxInt) {
    const random = Math.random()
    const maxRandom = random * maxInt
    return Math.floor(maxRandom)
}

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    const index = randomInt(9)
    const randomSquare = squares[index]
    randomSquare.classList.add('mole')
}

function moveMole() {

}

function countDown() {

}

function app() {
 randomSquare()
}

app()