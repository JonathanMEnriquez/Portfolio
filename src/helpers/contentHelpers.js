import contentJSON from '../json/content.json';

const portfolioContent = contentJSON.portfolio;
const charsToClear = [' ', '_'];

class SetExtended {
    constructor() {
        this.set = [];
        this.terms = {};
    }

    add(match) {
        if (!this.terms[match.term]) {
            this.set.push(match);
            this.terms[match.term] = 1;
        }
    }

    all() {
        return this.set;
    }
}

const clearSpaceChars = str => {
    let strCopy = str.slice();
    for (let char of charsToClear) {
        strCopy = strCopy.replace(char, '');
    }

    strCopy = strCopy.toLowerCase();

    return strCopy;
};

const matchPortfolioContent = (term, lang) => {
    const techContent = portfolioContent[lang].technology;
    const defaultContent = techContent.default;
    defaultContent.header = 'Skills';

    if (!term) return defaultContent;

    term = clearSpaceChars(term);

    if (techContent[term]) {
        techContent[term].header = term;
        return techContent[term];
    }

    const aliasContentFound = Object.values(techContent).find(x => x.alias.includes(term));
    if (aliasContentFound) {
        aliasContentFound.header = term;
    }
    return aliasContentFound ? aliasContentFound : defaultContent;
};

const validPossibleMatch = (term, currentTerm) => {
    return term !== 'default' && term !== currentTerm;
};

const PossibleMatch = (term, display) => (
    { display: display ? display : null, term: term }
);

const findPossibleMatches = (term, lang, current) => {
    if (!term || term.length < 2) return [];
    
    const techContent = portfolioContent[lang].technology;
    const matchSet = new SetExtended();

    term = clearSpaceChars(term);

    Object.keys(techContent).forEach(k => {
        if (k.includes(term) && validPossibleMatch(k, current)) {
            matchSet.add(PossibleMatch(k, null));
        }
    });

    for (let k in techContent) {
        for (let r of techContent[k].alias) {
            if (r.includes(term) && validPossibleMatch(r, current)) {
                matchSet.add(PossibleMatch(k, r));
            }
        }
    }

    return matchSet.all();
};

const getRandomArrayKey = entries => {
    return Math.floor(Math.random() * entries.length);
};

// randomizes and returns list of related items
const processRelatedTerms = (related, max=4) => {
    if (!related || !related.length) return [];

    const len = Math.min(related.length, max);
    const order = new Set();
    
    while (order.size < len) {
        order.add(getRandomArrayKey(related));
    }

    const arr = [];
    order.forEach(n => arr.push(related[n]));

    return arr;
};

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
};

// Adds all caps
const displayTitle = entry => {
    if (!entry || !entry.header) return '';

    if (entry.display) return entry.display;

    return entry.allCaps ? entry.header.toUpperCase() : entry.header[0].toUpperCase() + entry.header.slice(1);
};

export { matchPortfolioContent, processRelatedTerms, getWindowDimensions, 
    displayTitle, findPossibleMatches }
