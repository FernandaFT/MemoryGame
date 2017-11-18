function Deck (){

    //Card values
    self.card = [
         'Cat',
         'Cat', 
         'Sombrero',
         'Sombrero',
         'Pumpkin',
         'Pumpkin',
         'Bone',
         'Bone',
         'RIP',
         'RIP',
         'Ghost',
         'Ghost',
         'boiler',
         'boiler',
         'Skull',
         'Skull',
         'boiler_orange',
         'boiler_orange',
         'Candy',
         'Candy'
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
console.log(deck);
