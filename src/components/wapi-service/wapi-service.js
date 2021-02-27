require('dotenv').config();

export default class WapiService {

  async getData(wordLabel) {
    const response = await fetch(`/.netlify/functions/getApiKey?wordLabel=${wordLabel}`);
    return await response.json();
  };

  getDefinition(wordName) {
    return this.getData(`${wordName}/definitions`)
      .then(res => res.definitions[0].definition);
  };

  getPartOfSpeech(wordName) {
    return this.getData(`${wordName}/definitions`)
      .then(res => res.definitions[0].partOfSpeech)
      .catch(() => 'No info');
  };

  getSynonyms(wordName) {
    return this.getData(`${wordName}/synonyms`)
      .then(res => res.synonyms)
      .catch(() => 'No info');
  };

  getAntonyms(wordName) {
    return this.getData(`${wordName}/antonyms`)
      .then(res => res.antonyms)
      .catch(() => 'No info');
  };

  getSimilar(wordName) {
    return this.getData(`${wordName}/similarTo`)
      .then(res => res.similarTo)
      .catch(() => 'No info');
  };

  getSyllables(wordName) {
    return this.getData(wordName)
      .then(res => res.syllables.list)
      .then(res => res.toString())
      .then(res => res.replace(/,/g, '•'))
      .catch(() => 'No info');
  };

  getPronunciation(wordName) {
    return this.getData(wordName)
      .then(res => res.pronunciation.all)
      .catch(() => 'No info');
  };

  getTypeOf(wordName) {
    return this.getData(`${wordName}/typeOf`)
      .then(res => res.typeOf)
      .catch(() => 'No info');
  };
};
