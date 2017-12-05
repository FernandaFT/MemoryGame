function Deck (){

    //Card values
    self.card = [
         'cat',
         'cat', 
         'hat',
         'hat',
         'pumpkin',
         'pumpkin',
         'bone',
         'bone',
         'rip',
         'rip',
         'ghost',
         'ghost',
         'boiler',
         'boiler',
         'skull',
         'skull',
         'boilerOrange',
         'boilerOrange',
         'candy',
         'candy'
    ];
}

Deck.prototype = {
    contructor : Deck,

    //Create Ramdom Deck 
    deckRandom : function() {
        Deck();
        this.randomDeck = new Array();
        let empty = false;

        while(!empty){
            let randomIndex = Math.floor(Math.random()*self.card.length);
            this.randomDeck.push(self.card[randomIndex]);
            self.card.splice(randomIndex, 1);
            if(self.card.length <= 0) empty = true;
        }

        for(let i=0; i<this.randomDeck.length; i++){
            self.card[i] = this.randomDeck[i];
        }
    },    
};

let deck = new Deck();
deck.deckRandom();

let allCards = document.getElementById('all-cards');
let count = 0;

let firstCard;
let secondCard;

let firstCardId;
let secondCardId;

let firstCardValue;
let secondCardValue;

function _showCards (){

    for (let i = 0; i < 20; i++) {

        let li = document.createElement('li');
        li.classList.add('card', 'front-card');
        li.value = i;
        allCards.appendChild(li);
    }

    let li = document.getElementsByClassName('card');

    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('click', function () {
            count++;
            if (count === 1) {
                this.classList.add('card-' + card[this.value]);
                firstCard = card[this.value];
                firstCardValue = this.value;
                firstCardId = this;
                // console.log(firstCard, firstCardValue, firstCardId)
            }

            if (count === 2) {
                this.classList.add('card-' + card[this.value]);
                secondCard = card[this.value];
                secondCardValue = this.value;
                secondCardId = this;

                // console.log(secondCard, secondCardValue, secondCardId)
                setTimeout (function () {
                
                    if (firstCard === secondCard) {
                        if (firstCardValue !== secondCardValue) {
                            firstCardId.classList.add('hideCard');
                            secondCardId.classList.add('hideCard');
                            count = 0;
                        } else {
                            // console.log('cheater');
                            count = 1;
                        }  
                    }
                    else {
                        count = 0;
                        firstCardId.className = ' ';
                        secondCardId.className = ' ';
                        firstCardId.classList.add('card', 'front-card');
                        secondCardId.classList.add('card', 'front-card');
                    }
                },900)
            }
        })
    }
}
_showCards();