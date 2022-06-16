// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
    let tower = []
    let count = 1;
    
    for (let i = 1; i <= nFloors; i++) {
      tower.push(' '.repeat(nFloors - i) + '*'.repeat(count) + ' '.repeat(nFloors - i))
      count += 2;
    }
    return tower
}