

//returns a random major arcana card 
const returnMajorCard = () => {
    const majorCards = ['The Fool','The Magician','The High Priestess','The Empress','The Emperor','The Heirophant','The Lovers','The Chariot','Strength','The Hermit','The Wheel of Fortune','Justice','The Hanged Man','Death','Temperance','The Devil','The Tower','The Star','The Moon','The Sun','Judgement','The World'];
    return majorCards[Math.floor(Math.random() * 22)];
  };

// returns a random minor arcana prefix 
const returnMinorPrefix = () => {
    const minorPrefixes = ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Page','Knight','Queen','King'];
    return minorPrefixes[Math.floor(Math.random() * 14)];
  };

//returns a random minor arcana suffix 
const returnMinorSuffix = () => {
    const minorSuffixes = ['Wands','Cups','Swords','Pentacles'];
    return minorSuffixes[Math.floor(Math.random() * 4)];
  };

//generate a random card with greater weight on the minor cards 
const randomCardOld = () => {
    const num = Math.random().toFixed(2);
    if(num >= 0.6){
        return returnMinorPrefix() + ' of ' + returnMinorSuffix();
    } return returnMajorCard();
};

//return a random card from the cards dictionary
const randomCard = () => {
    const num = Math.floor(Math.random() * 78);
    return cards[num];
};

const psychicReading = () => {
    const cardOne = randomCard();
    const cardTwo = randomCard();
    const cardThree = randomCard();
    while(cardTwo === cardOne){
        cardTwo = randomCard();
    };
    while(cardThree === cardOne || cardThree === cardTwo){
        cardThree = randomCard();
    };
    const nameOne = cards.cardOne[0];
    const defineOne = cards.cardOne[1];
    const nameTwo = cards.cardTwo[0];
    const defineTwo = cards.cardTwo[1];
    const nameThree = cards.cardThree[0];
    const defineThree = cards.cardThree[1];

    console.log(`Your past is ${nameOne} \n This means that behind you is ${defineOne} .`);
    console.log(`Your present is ${nameTwo} \n This means that you currently are ${defineTwo} .`);
    console.log(`Your future is ${nameThree} \n This means that the future holds ${defineThree} .`);
    
};

psychicReading();

