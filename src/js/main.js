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
        var empty = false;

        while(!empty){
            var randomIndex = Math.floor(Math.random()*self.card.length);
            this.randomDeck.push(self.card[randomIndex]);
            self.card.splice(randomIndex, 1);
            if(self.card.length <= 0) empty = true;
        }

        for(var i=0; i<this.randomDeck.length; i++){
            self.card[i] = this.randomDeck[i];
        }
    },    
};

var deck = new Deck();
deck.deckRandom();

var allCards = document.getElementById('all-cards');
var count;

function showCards (){

    for (var i = 0; i < 20; i++) {

        var li = document.createElement('li');
        li.className = 'card-' + card[i]
        allCards.appendChild(li);
    }
}
showCards();