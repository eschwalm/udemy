// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let lowered = str.toLowerCase();
  const isVowel = "aeiou";
  let vowelCount = 0;
  
  for (var i = 0; i < lowered.length; i++) {
    if (isVowel.indexOf(lowered[i]) > -1) {
      vowelCount++;
    }
  }
  
  return vowelCount;
}

module.exports = vowels;
