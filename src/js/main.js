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
let count;

function showCards (){

    for (let i = 0; i < 20; i++) {

        let li = document.createElement('li');
        li.classList.add('card', 'front-card');
        li.value = i;
        allCards.appendChild(li);
    }

    let li = document.getElementsByClassName('card');

    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('click', function () {
                this.classList.remove('front-card');
                this.classList.add('card-' + card[this.value])
            if (card[this.value] === card[this.value]) {
                console.log('are similar')
            }else{
                this.classList.add('front-card')
            }
        })
    }
}
showCards();