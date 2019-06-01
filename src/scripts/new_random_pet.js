const newPet_start = require('./newpet_start.js')
const mutator = require('./mutator.js')


const color_range = [50, 200]
const stats_range = [1, 255]
const age_range = [1, 255]
const ear_size_range = [0, 100]

const ear_number = [1,3]
const body_pattern_number = [1,3]
const eye_number = [1,3]
const feet_number = [1,3]
const nose_number = [1,4]

const stats_number = [10,20]



const randomStat = function (range, normal){
  const totalRange = range[1] - range[0]
  let random
  if (normal) {
    random = Math.round(mutator((totalRange)/6)/2 + totalRange/2) + range[0]
    if (random > range[1]) {
      random = range[1]
    } else if (random < range [0]) {
      random = range[0]
    }
  }else {
    random = Math.round(Math.random()*(totalRange)) + range[0]
  }
  return random
}



const newRandomPet = function(user){
  const newPet = {
    body_color_gene_blue: randomStat(color_range, true),
    body_color_gene_red: randomStat(color_range, true),
    body_color_gene_green: randomStat(color_range, true),
    body_pattern_gene_blue: randomStat(color_range, true),
    body_pattern_gene_red: randomStat(color_range, true),
    body_pattern_gene_green: randomStat(color_range, true),
    eye_color_gene_blue: randomStat(color_range, true),
    eye_color_gene_red: randomStat(color_range, true),
    eye_color_gene_green: randomStat(color_range, true),
    ear_size_gene: randomStat(ear_size_range, true),
    ear_type_gene: randomStat(ear_number),
    eye_type_gene: randomStat(eye_number),
    feet_type_gene: randomStat(feet_number),
    nose_type_gene: randomStat(nose_number),
    body_pattern_gene: randomStat(body_pattern_number),
    max_age_gene: randomStat(stats_number, true),
    intelligence_gene: randomStat(stats_number, true),
    strength_gene: randomStat(stats_number, true),
  }

  return Object.assign(newPet_start(user), newPet)
}

module.exports = newRandomPet