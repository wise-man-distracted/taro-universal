const spread = document.querySelector('.spread')
const descs = document.querySelector('.descs')
const cards = document.querySelector('.cards')



let flippedCards = []
let flippedCardsId = []

for (let i = deck.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = deck[i]
    deck[i] = deck[j]
    deck[j] = k
  }


function createSpread() {
    for (let i = 0; i < 9; i++) {
        var card = document.createElement('img')
        var desc = document.createElement('article')
        var clone_div = cards.cloneNode(true)
        card.setAttribute('src', 'deck/back.jpg')
        card.setAttribute('data-img-id', i)
        desc.setAttribute('data-desc-id', i)
        desc.setAttribute('class', 'w-40')
       // card.setAttribute('style', 'width: 10rem;')
        card.addEventListener('click', flipCard)
        card.addEventListener('click', describeCard.bind(desc))
        spread.appendChild(clone_div)
        clone_div.appendChild(card)
        descs.appendChild(desc)
    }
}

function flipCard() {
    var cardId = this.getAttribute('data-img-id')
    flippedCards.push(deck[cardId].name)
    flippedCardsId.push(cardId)
    this.setAttribute('src', `deck/${deck[cardId].image_name}.jpg`)
}

function describeCard() {
    var cardId = this.getAttribute('data-desc-id')
    this.textContent = deck[cardId].short_description
    
    
}

createSpread()