const newPet_start = require('./newpet_start.js')

const pet1 ={
body_color_gene_blue:
100,
body_color_gene_green:
150,
body_color_gene_red:
200,
body_pattern_gene:
3,
body_pattern_gene_blue:
100,
body_pattern_gene_green:
150,
body_pattern_gene_red:
150,
ear_size_gene:
50,
ear_type_gene:
2,
eye_color_gene_blue:
200,
eye_color_gene_green:
50,
eye_color_gene_red:
50,
eye_type_gene:
3,
feet_type_gene:
1,
gender:
"m",
happiness_at_time_last_fed:
40,
hunger_at_time_last_fed:
75,
id:
5,
intelligence_gene:
2,
max_age_gene:
10,
name:
"Bubbles",
nose_type_gene:
3,
strength_gene:
4,
time_at_birth:
"1558644565044",
time_last_fed_or_work:
"1558644737844",
time_last_mated:
"1558644565044",
user_id:
1
}

const pet2 = {
body_color_gene_blue:
200,
body_color_gene_green:
200,
body_color_gene_red:
200,
body_pattern_gene:
2,
body_pattern_gene_blue:
65,
body_pattern_gene_green:
116,
body_pattern_gene_red:
179,
ear_size_gene:
30,
ear_type_gene:
3,
eye_color_gene_blue:
50,
eye_color_gene_green:
174,
eye_color_gene_red:
113,
eye_type_gene:
2,
feet_type_gene:
2,
gender:
"f",
happiness_at_time_last_fed:
80,
hunger_at_time_last_fed:
40,
id:
6,
intelligence_gene:
4,
max_age_gene:
20,
name:
"Eureka",
nose_type_gene:
1,
strength_gene:
2,
time_at_birth:
"1558644565044",
time_last_fed_or_work:
"1558644737844",
time_last_mated:
"1558644565044",
user_id:
1}

const color_mutator = 20
const ear_mutator = 5
const stats_mutator = 4
const age_mutator = 4

const color_range = [50, 200]
const stats_range = [1, 255]
const age_range = [1, 255]
const ear_size_range = [0, 100]

const mutator = function(type) {
  return Math.round((Math.random()*type)-(type/2))
}

const geneMixer = function(gene, mutatorType, range) {
  let variation = (Math.random() < .5 ? pet1[gene] : pet2[gene]) + mutator(mutatorType)

  if (range){
    if (variation < range[0]){
      variation = range[0]
    } else if (variation > range[1]) {
      variation = range[1]
    }
  }

  return `"${gene}" : ${variation}`
}


const breed = function (user, pet1, pet2) {
  console.log(geneMixer('body_color_gene_blue', color_mutator))
  let dna = JSON.parse(`{
    ${geneMixer('body_color_gene_blue', color_mutator, color_range)},
    ${geneMixer('body_color_gene_red', color_mutator, color_range)},
    ${geneMixer('body_color_gene_green', color_mutator, color_range)},
    ${geneMixer('body_pattern_gene_blue', color_mutator, color_range)},
    ${geneMixer('body_pattern_gene_red', color_mutator, color_range)},
    ${geneMixer('body_pattern_gene_green', color_mutator, color_range)},
    ${geneMixer('eye_color_gene_blue', color_mutator, color_range)},
    ${geneMixer('eye_color_gene_red', color_mutator, color_range)},
    ${geneMixer('eye_color_gene_green', color_mutator, color_range)},
    ${geneMixer('ear_size_gene', ear_mutator, ear_size_range)},
    ${geneMixer('ear_type_gene', 0)},
    ${geneMixer('body_pattern_gene', 0)},
    ${geneMixer('eye_type_gene', 0)},
    ${geneMixer('feet_type_gene', 0)},
    ${geneMixer('nose_type_gene', 0)},
    ${geneMixer('intelligence_gene', stats_mutator, stats_range)},
    ${geneMixer('strength_gene', stats_mutator, stats_range)},
    ${geneMixer('max_age_gene', age_mutator, age_range)}
  }`)

   let baby = Object.assign(newPet_start(user), dna)
   return baby

}

console.log(breed(1,pet1,pet2))