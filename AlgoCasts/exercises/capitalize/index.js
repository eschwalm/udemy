// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let words = str.split(" ");
  let result = [];
  
  for (var i = 0; i < words.length; i++) {
    let capitalized = words[i][0].toUpperCase() + words[i].slice(1);
    result.push(capitalized);
  }
  
  return result.join(" ");
}

module.exports = capitalize;
