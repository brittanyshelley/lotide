const countLetters = function(word) {
	// Create the object which will store the occurrences
	const count = {};

	// Loop over letters
	for (let i = 0; i < word.length; i++) {
		const letter = word[i];

		// if the property isn't in the object, it means that the letter is a new one and we'll create this property and assign it the value 1
		if (!count[letter]) {
			count[letter] = 1;

			// else, the property is already there and we just increment it by 1
		} else {
			count[letter]++;
		}
	}

	return count;
};


const countLetter = function(string) {
  const results = {};
  for (const letter of string) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

console.log(countLetter("LHL"));
console.log(countLetters("LHL"));