

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
    const num = Math.floor(Math.random() * 78 );
    return cards[num][0];
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
    console.log(`Your past is ${cardOne} \nYour present is ${cardTwo} \nYour future is ${cardThree}`);
};

psychicReading();

