const cards = {
    theFool: {
        name: 'The Fool',
        description: 'new beginnings, optimism, trust in life'
    },
    theMagician: {
        name: 'The Magician',
        description: 'action, the power to manifest'
    },
    theHighPriestess: {
        name: 'The High Priestess',
        description: 'inaction, going within, the mystical'
    },
    theEmpress: {
        name: 'The Empress',
        description: 'abundance, nurturing, fertility, life in bloom!'
    },
    theEmperor: {
        name: 'The Emperor',
        description: 'structure, stability, rules and power'
    },
    theHeirophant: {
        name: 'The Heirophant',
        description: 'institutions, tradition, society and its rules'
    },
    theLovers: {
        name: 'The Lovers',
        description: 'sexuality, passion, choice, uniting'
    },
    theChariot: {
        name: 'The Chariot',
        description: 'movement, progress, integration'
    },
    strength: {
        name: 'Strength',
        description: 'courage, subtle power, integration of animal self'
    },
    theHermit: {
        name: 'The Hermit',
        description: 'meditation, solitude, consciousness'
    },
    theWheelOfFortune: {
        name: 'The Wheel of fortune',
        description: 'cycles, change, ups and downs'
    },
    justice: {
        name: 'Justice',
        description: 'fairness, equality, balance'
    },
    theHangedMan: {
        name: 'The Hanged Man',
        description: 'surrender, new perspective, enlightenment'
    },
    death: {
        name: 'Death',
        description: 'the end of something, change, the impermeability of all things'
    },
    temperance: { 
        name: 'Temperance',
        description: 'balance, moderation, being sensible'
    },
    theDevil: {
        name: 'The Devil',
        description: 'destructive patterns, addiction, giving away your power'
    },
    theTower: {
        name: 'The Tower',
        description: 'collapse of stable structures, release, sudden insight'
    },
    theStar: {
        name: 'The Star',
        description: 'hope, calm, a good omen!'
    },
    theMoon: {
        name: 'The Moon',
        description: 'mystery, the subconscious, dreams'
    },
    theSun: {
        name: 'The Sun',
        description: 'success, happiness, all will be well'
    },
    judgement: {
        name: 'Judgement',
        description: 'rebirth, a new phase, inner calling'
    },
    theWorld: {
        name: 'The World',
        description: 'completion, wholeness, attainment, celebration of life'
    },
    aceWands: {
        name: 'Ace of Wands',
        description: 'new beginnings, creative spark, fertile ideas'
    },
    aceCups: {
        name: 'Ace of Cups',
        description: 'emotional fulfillment, joy'
    },
    aceSwords: {
        name: 'Ace of Swords',
        description: 'a fresh start, a sudden opportunity or idea, clarity'
    },
    acePentacles: {
        name: 'Ace of Pentacles',
        description: 'financial reward, clarity of life purpose, goals'
    },
    twoWands: {
        name: 'Two of Wands',
        description: 'contemplation, assessing ones life direction'
    },
    twoCups: {
        name: 'Two of Cups',
        description: 'partnership, mutual attraction, compatibility'
    },
    twoSwords: {
        name: 'Two of Swords',
        description: 'indecision'
    },
    twoPentacles: {
        name: 'Two of Pentacles',
        description: 'balance, multitasking'
    },
    threeWands: {
        name: 'Three of Wands',
        description: 'reaping the rewards of your efforts'
    },
    threeCups: {
        name: 'Three of Cups',
        description: 'celebration, fun with friends, laughter'
    },
    threeSwords: {
        name: 'Three of Swords',
        description: 'heartbreak, betrayal'
    },
    threePentacles: {
        name: 'Three of Pentacles',
        description: 'meaningful work, enjoying one’s work, suitable career'
    },
    fourWands: {
        name: 'Four of Wands',
        description: 'celebration, safety, the home'
    },
    fourCups: {
        name: 'Four of Cups',
        description: 'boredom, dissatisfaction with what is being offered'
    },
    fourSwords: {
        name: 'Four of Swords',
        description: 'meditation, rest, retreat'
    },
    fourPentacles: {
        name: 'Four of Pentacles',
        description: 'holding self back out of fear'
    },
    fiveWands: {
        name: 'Five of Wands',
        description: 'competition, minor struggles or disagreements'
    },
    fiveCups: {
        name: 'Five of Cups',
        description: 'dwelling on the negative, self pity'
    },
    fiveSwords: {
        name: 'Five of Swords',
        description: 'mind games, hostility'
    },
    fivePentacles: {
        name: 'Five of Pentacles',
        description: 'minor money troubles, health problems, feeling like an outsider'
    },
    sixWands: {
        name: 'Six of Wands',
        description: 'success, accolades and achievement'
    },
    sixCups: {
        name: 'Six of Cups',
        description: 'sentimentality, kindness, help'
    },
    sixSwords: {
        name: 'Six of Swords',
        description: 'leaving, accepting help, going somewhere better'
    },
    sixPentacles: {
        name: 'Six of Pentacles',
        description: 'charity, accepting and giving help'
    },
    sevenWands: {
        name: 'Seven of Wands',
        description: 'feeling defensive and on guard'
    },
    sevenCups: {
        name: 'Seven of Cups',
        description: 'so many choices! Indecision, getting lost in fantasy'
    },
    sevenSwords: {
        name: 'Seven of Swords',
        description: 'secret plans, abandoning ship'
    },
    sevenPentacles: {
        name: 'Seven of Pentacles',
        description: 'patience, waiting for your plans to bear fruit'
    },
    eightWands: {
        name: 'Eight of Wands',
        description: 'speed, things manifesting quickly'
    },
    eightCups: {
        name: 'Eight of Cups',
        description: 'abandoning something in search of something better'
    },
    eightSwords: {
        name: 'Eight of Swords',
        description: 'feeling powerless and stuck'
    },
    eightPentacles: {
        name: 'Eight of Pentacles',
        description: 'hard work, focused efforts, laying the groundwork'
    },
    nineWands: {
        name: 'Nine of Wands',
        description: 'pessimism, gearing up for the worst'
    },
    nineCups: {
        name: 'Nine of Cups',
        description: 'indulgence, self-satisfaction'
    },
    nineSwords: {
        name: 'Nine of Swords',
        description: 'overactive mind, anxiety'
    },
    ninePentacles: {
        name: 'Nine of Pentacles',
        description: 'luxury, rest, financial and material comforts'
    },
    tenWands: {
        name: 'Ten of Wands',
        description: 'feeling oppressed, exhaustion, too many responsibilities'
    },
    tenCups: {
        name: 'Ten of Cups',
        description: 'emotional bliss, happiness, attainment'
    },
    tenSwords: {
        name: 'Ten of Swords',
        description: 'feeling defeated, self sabotage'
    },
    tenPentacles: {
        name: 'Ten of Pentacles',
        description: 'financial success, strong business relationships'
    },
    pageWands: {
        name: 'Page of Wands',
        description: 'newly inspired, excited about life and work'
    },
    pageCups: {
        name: 'Page of Cups',
        description: 'creative, inspired, learning artistic skill'
    },
    pageSwords: {
        name: 'Page of Swords',
        description: 'mentally unstable or intellectually immature, acts without thinking'
    },
    pagePentacles: {
        name: 'Page of Pentacles',
        description: 'student, commitment to learning'
    },
    knightWands: {
        name: 'Knight of Wands',
        description: 'an adventurous risk taker who follows his passions'
    },
    knightCups: {
        name: 'Knight of Cups',
        description: 'romantic, adventurous, following one’s heart'
    },
    knightSwords: {
        name: 'Knight of Swords',
        description: 'fierce, determined, aggressively pursues goals'
    },
    knightPentacles: {
        name: 'Knight of Pentacles',
        description: 'cautious, sensible and slow to progress'
    },
    queenWands: {
        name: 'Queen of Wands',
        description: 'confidant, focused, has zest for life'
    },
    queenCups: {
        name: 'Queen of Cups',
        description: 'emotionally nurturing, intuitive, sensitive'
    },
    queenSwords: {
        name: 'Queen of Swords',
        description: 'intelligent, writer, communicative yet cold - cuts through B.S'
    },
    queenPentacles: {
        name: 'Queen of Pentacles',
        description: 'healthy in body and finances, grounded and calm'
    },
    kingWands: {
        name: 'King of Wands',
        description: 'career focused, mature, passionate'
    },
    kingCups: {
        name: 'King of Cups',
        description: 'need to acknowledge deep feelings, avoid drowning out emotions'
    },
    kingSwords: {
        name: 'King of Swords',
        description: 'serious, controlling, rational and mind/intellect-focused'
    },
    kingPentacles: {
        name: 'King of Pentacles',
        description: 'enjoys the good life (food, drink and leisure), financially secure'
    }
  };

  module.exports.cards = cards
