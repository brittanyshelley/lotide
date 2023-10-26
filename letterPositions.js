const letterPositions = function(sentence) {
  const results = {};
  for (const letter of sentence) {
    if (letter !== '') {
      if (results[letter]) {
        results[letter].push(sentence.indexOf(sentence));
      } else {
        results[letter] = [sentence.indexOf(letter)];
      }
    }
  }
  return results;
};

module.exports = letterPositions;