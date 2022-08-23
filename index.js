let sum = 0
let hasBlackJack = false
let message = ""
let cards = []

let MessageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")

function startGame() {
    let isAlive = true
    let firstCard = newRandomCard()
    let secondCard = newRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards: "
    for(let i = 0;i<cards.length;i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    MessageEl.textContent = message
}
function newRandomCard() {
    let x = Math.floor(Math.random() * 13) + 1
    if(x > 10)
        return 10
    else if (x === 1)
        return 11
    else        
        return x
}
function newCard(){
    if(isAlive && !hasBlackJack){
        let card = newRandomCard()
        sum += card
        cards.push(card)
        startGame()
    }
}