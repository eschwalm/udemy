// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let i = 1; i <= n; i++) {
    let step = [];
    j = 0;
    k = 0;
    
    while (j < i) {
      step.push("#");
      j++;
    }
    
    while (k < (n - i)) {
      step.push(" ");
      k++;
    }
    
    console.log(step.join(""));
  }
}

module.exports = steps;
