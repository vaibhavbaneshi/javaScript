let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numberOfGuesses = 1
let playGame = true

if(playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        validate(parseInt(userInput.value))
        userInput.value = ''
    })
}

function validate(guess) {

    if(isNaN(guess)) {
        alert(`Please enter a valid number`)
        endGame()
    }
    
    else if(guess < 1) {
        alert(`Please enter a number above 0`)
        endGame()
    }

    else if(guess > 100) {
        alert(`Please enter a number under 101`)
        endGame()
    }

    else {
        prevGuess.push(guess)
        if(numberOfGuesses === 11) {
            displayGuess(guess)
            displayMessage(`Game Over!!!\n The random number was ${randomNumber}.`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {

    if(guess === randomNumber) {
        displayMessage(`You guessed it correct!!!`)
        endGame()
    }

    else if(guess < randomNumber) {
        displayMessage(`The entered number is lower than the random number.`)
    }

    else if(guess > randomNumber) {
        displayMessage(`The entered number is higher than the random number.`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numberOfGuesses++
    remaining.innerHTML = `${11 - numberOfGuesses}`
}

function displayMessage(msg) {
    lowOrHigh.innerHTML = `<h2>${msg}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false

    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numberOfGuesses = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numberOfGuesses}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        
        playGame = true
    })
}