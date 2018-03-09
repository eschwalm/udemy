// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let baseSize = n * 2 - 1;
  
  for (let i = 0; i < n; i++) {
    let step = '';
    let buffer = '';
    let bufferSize = 0;
    
    if (i === 0) {
      step += '#';
    } else {
      while (step.length < (i * 2 + 1)) {
        step += '#';
      }
    }
    
    if (step.length < baseSize) {
      bufferSize = Math.floor((baseSize - step.length) / 2);
      
      while (buffer.length < bufferSize) {
        buffer += ' ';
      }
    }
    
    console.log(buffer + step + buffer);    
  }
}

module.exports = pyramid;
