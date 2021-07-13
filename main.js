const {cards} = require("./object.js");

//return a random card from the cards dictionary
const randomCard = () => {
    var cardsKeys = Object.keys(cards);
    var randomIndex = Math.floor(Math.random() * (cardsKeys.length));
    return cardsKeys[randomIndex];
};

const psychicReading = () => {
    var cardOne = randomCard();
    var cardTwo = randomCard();
    var cardThree = randomCard();
    while(cardTwo === cardOne){
        cardTwo = randomCard();
    };
    while(cardThree === cardOne || cardThree === cardTwo){
        cardThree = randomCard();
    };
    const nameOne = cards[cardOne]["name"];
    const defineOne = cards[cardOne]["definition"];
    const nameTwo = cards[cardTwo]["name"];
    const defineTwo = cards[cardTwo]["definition"];
    const nameThree = cards[cardThree]["name"];
    const defineThree = cards[cardThree]["definition"];

    console.log(` Your past is ${nameOne} \n This means that behind you is ${defineOne} .`);
    console.log(`\n \n Your present is ${nameTwo} \n This means that you currently are ${defineTwo} .`);
    console.log(`\n \n Your future is ${nameThree} \n This means that the future holds ${defineThree} .`);
    
};

psychicReading();

