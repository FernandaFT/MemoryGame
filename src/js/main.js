function shuffleCard () {

    this.card = [];
    var frontCard = [
        'catSmall', 
        'sombreroSmall',
        'pumpkinSmall',
        'boneSmall',
        'ripSmall',
        'ghostSmall',
        'catSmall',
        'boileSmall',
        'skullSmall',
        'boiler_orangeSmall'
    ];

    for (var c = 0; c < frontCard.length; c++) {
       this.card.push(frontCard[c]);
    };
}

shuffleCard.prototype = {
    constructor: shuffleCard,

    // Create Random Card
    cardRandom : function () {
        shuffleCard();
        this.randomCard = new Array();
        var empty = false;

        while(!empty) {
            var randomIndex = Math.floor(Math.random() * this.card.length);
            this.randomCard.push(this.card[randomIndex]);
            this.card.splice(randomIndex, 1);
            if(this.cards.length <= 0) empty = true;
        }

        for( var i=0; i<this.randomCard.length; i++ ) {
            this.card[i] = this.randomCard[i];
        }
    },

};

var deck = new shuffleCard()
deck.cardRandom();
console.log(deck);


