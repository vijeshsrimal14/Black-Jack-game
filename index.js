let firstCard = 10
let secondCard = 4
let sum = newRandomCard()
let hasBlackJack = false
let isAlive = true
let message = ""
let cards = [firstCard, secondCard]

let MessageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")
function startGame(){
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
    let x = math.floor( math.random()) * 13 + 1
    return x
}
function newCard(){
    let card = newRandomCard()
    sum += card
    cards.push(card)
    startGame()
}