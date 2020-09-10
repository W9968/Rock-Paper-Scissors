// array that contains the choices
let descision = ["rock", "paper", "scissors"]
// choices user has to click
let btnRock = document.querySelector('.rock')
let btnPaper = document.querySelector('.paper')
let btnScissors = document.querySelector('.scissors')
// values
rockValue = 'rock'
paperValue = 'paper'
scissorsValue = 'scissors'
// scores
var wins = 0
var losts = 0
const user_score = document.querySelector('.user-score')
const pc_score = document.querySelector('.pc-score')
const resText = document.querySelector('.text')


const getRandom = () => {
    let i = Math.floor(Math.random() * 3)
    console.log(i, descision[i])
    return i
}

const winnerBoardChange = () => {
    wins++
    user_score.innerHTML = wins
    resText.innerHTML = 'you win this round'
}

const loserBoardChange = () => {
    losts++
    pc_score.innerHTML = losts
    resText.innerHTML = 'you lost this round'
}

btnPaper.onclick = function () {
    randomChoices = getRandom()
    if (descision[randomChoices] == paperValue) {
        console.log('draw')
        resText.innerHTML = 'it`\'s a draw'
    } else if (descision[randomChoices] == scissorsValue) {
        console.log('lost')
        loserBoardChange()
    } else {
        console.log('win')
        winnerBoardChange()
    }

}

btnRock.onclick = function () {
    randomChoices = getRandom()
    if (descision[randomChoices] == paperValue) {
        console.log('lost')
        loserBoardChange()
    } else if (descision[randomChoices] == scissorsValue) {
        console.log('win')
        winnerBoardChange()
    } else {
        console.log('draw')
        resText.innerHTML = 'it`\'s a draw'
    }

}

btnScissors.onclick = function () {
    randomChoices = getRandom()
    if (descision[randomChoices] == paperValue) {
        console.log('win')
        winnerBoardChange()
    } else if (descision[randomChoices] == scissorsValue) {
        console.log('draw')
    } else {
        console.log('lost')
        loserBoardChange()
    }

}