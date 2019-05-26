const newPet_start = require('./newpet_start.js')
const geneMixer = require('./gene_mixer.js')

// change these numbers to manipulate the 1 standard deviation of the mutation varance
const color_mutator = 10
const ear_mutator = 5
const stats_mutator = 2
const age_mutator = 2

// change these numbers to limit the [lower, upper] limit of mutations
const color_range = [50, 200]
const stats_range = [1, 255]
const age_range = [1, 255]
const ear_size_range = [0, 100]


// creates a new creature with default values and mixes the genes of the parents together randomly
const breed = function (user, pet1, pet2) {
  let dna = JSON.parse(`{
    ${geneMixer(pet1, pet2, 'body_color_gene_blue', color_mutator, color_range)},
    ${geneMixer(pet1, pet2, 'body_color_gene_red', color_mutator, color_range)},
    ${geneMixer(pet1, pet2, 'body_color_gene_green', color_mutator, color_range)},
    ${geneMixer(pet1, pet2, 'body_pattern_gene_blue', color_mutator, color_range)},
    ${geneMixer(pet1, pet2, 'body_pattern_gene_red', color_mutator, color_range)},
    ${geneMixer(pet1, pet2, 'body_pattern_gene_green', color_mutator, color_range)},
    ${geneMixer(pet1, pet2, 'eye_color_gene_blue', color_mutator, color_range)},
    ${geneMixer(pet1, pet2, 'eye_color_gene_red', color_mutator, color_range)},
    ${geneMixer(pet1, pet2, 'eye_color_gene_green', color_mutator, color_range)},
    ${geneMixer(pet1, pet2, 'ear_size_gene', ear_mutator, ear_size_range)},
    ${geneMixer(pet1, pet2, 'ear_type_gene', 0)},
    ${geneMixer(pet1, pet2, 'body_pattern_gene', 0)},
    ${geneMixer(pet1, pet2, 'eye_type_gene', 0)},
    ${geneMixer(pet1, pet2, 'feet_type_gene', 0)},
    ${geneMixer(pet1, pet2, 'nose_type_gene', 0)},
    ${geneMixer(pet1, pet2, 'intelligence_gene', stats_mutator, stats_range)},
    ${geneMixer(pet1, pet2, 'strength_gene', stats_mutator, stats_range)},
    ${geneMixer(pet1, pet2, 'max_age_gene', age_mutator, age_range)}
  }`)
   return Object.assign(newPet_start(user), dna)
}

module.exports = breed