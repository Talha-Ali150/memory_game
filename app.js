var cardArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

cardArray.sort(function(){return 0.5 - Math.random()});
var grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result')
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('p');
        card.innerText = cardArray[i];
        card.setAttribute('class', 'black');
        card.setAttribute('id', i);
        card.addEventListener('click', flipCard)
        grid.appendChild(card);
    }
}


cardsChosen = []
cardsChosenId = []
cardsWon = [];



function checkForMatch() {
    var cards = document.querySelectorAll('p');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('class', 'yellow')
        cards[optionTwoId].setAttribute('class', 'yellow')
        cardsWon.push(cardsChosen)
    }
    else {
        cards[optionOneId].setAttribute('class', 'black')
        cards[optionTwoId].setAttribute('class', 'black')
        alert('Sorry, Try Again')
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
        resultDisplay.textContent = 'Congragulations! You Won';
    }
}




function flipCard() {
    var cardId = this.getAttribute('id');
    cardsChosen.push(cardArray[cardId]);
    cardsChosenId.push(cardId);
    this.setAttribute('class', 'yellow');
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}
createBoard()