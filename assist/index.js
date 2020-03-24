const dictionary = require('./dictionary');
// const search = require('./search');
// const speech = require('./speech');
const thesaurus = require("thesaurus");
const pluralize = require("pluralize");

// const WordPOS = require('wordpos'), wordpos = new WordPOS();

// NOTE: mean
exports.suggestion = async (e,l) => dictionary.word(e,l);
exports.definition = async (e) => dictionary.definition(e);
exports.translation = async (e,l) => dictionary.translation(e,l);
exports.search = require('./search');

// NOTE: lang
exports.getLangDefault = () => dictionary.getLangDefault;
exports.getLangByName = (e) => dictionary.getLangByName(e);
exports.getLangById = (e) => dictionary.getLangById(e);
exports.getLangList = () => dictionary.getLangList;
exports.getLangCount = () => dictionary.getLangCount;
exports.getGrammar = async () => dictionary.getGrammar();
exports.getInfo = dictionary.getInfo;

// NOTE: visits
exports.visits = require('./visits');

// NOTE: grammar
exports.grammarMain = require('./grammar').main;
exports.grammarPos = require('./grammar').pos;
// NOTE: speech
exports.speech = require('./speech');

// NOTE: thesaurus
exports.thesaurus = async (e) => thesaurus.find(e);

// NOTE: pluralize
exports.plural = async (e) => pluralize.plural(e);
exports.singular = async (e) => pluralize.singular(e);
exports.isPlural = async (e) => pluralize.isPlural(e);
exports.isSingular = async (e) => pluralize.isSingular(e);

// NOTE: wordpos getPos findPos
// exports.pos = async (e) => wordpos.getPOS(e);
// exports.lookup = async (e) => wordpos.lookup(e);
