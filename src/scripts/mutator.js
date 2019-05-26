const normalDis = require('./normal_distribution.js')

// add random variation through mutation by a range of [type]
const mutator = function(type) {
  return Math.round(normalDis()*type)
}

module.exports = mutator