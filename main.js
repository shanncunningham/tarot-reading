

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

// Generate a random minor card 
const minorCard = returnMinorPrefix() + ' of ' + returnMinorSuffix();


