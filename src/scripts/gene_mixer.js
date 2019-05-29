const mutator = require('./mutator.js')

// takes a particular gene and slects one at random, mutating it and correcting if it goes out of range
//mutatorType is how much variation there is one standard deviation
const geneMixer = function(pet1, pet2, gene, mutatorType, range) {
  let variation = (Math.random() < .5 ? pet1[gene] : pet2[gene]) + mutator(mutatorType)

  if (range){
    if (variation < range[0]){
      variation = range[0]
    } else if (variation > range[1]) {
      variation = range[1]
    }
  }
  //returns a part of a JSON object
  return `"${gene}" : ${variation}`
}

module.exports = geneMixer