
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pets').del()
    .then(function () {
      // Inserts seed entries
      return knex('pets').insert([
        {name: 'Bubbles', user_id: 1, time_last_fed_or_work: new Date().getTime(), happiness_at_time_last_fed: 40, hunger_at_time_last_fed: 75, time_at_birth: new Date().getTime() - 172800, time_last_mated: new Date().getTime() - 172800, gender: 'm', max_age_gene: 10, strength_gene: 4, intelligence_gene: 2, body_color_gene_red: 200, body_color_gene_blue: 100, body_color_gene_green: 150, body_pattern_gene: 3, body_pattern_gene_red: 150, body_pattern_gene_green: 150, body_pattern_gene_blue: 100, ear_type_gene: 2, ear_size_gene: 50, feet_type_gene: 1, eye_type_gene: 3, eye_color_gene_red: 50, eye_color_gene_green: 50, eye_color_gene_blue: 200, nose_type_gene: 3},
        {name: 'Eureka', user_id: 1, time_last_fed_or_work: new Date().getTime(), happiness_at_time_last_fed: 80, hunger_at_time_last_fed: 40, time_at_birth: new Date().getTime() - 172800, time_last_mated: new Date().getTime() - 172800, gender: 'f', max_age_gene: 20, strength_gene: 2, intelligence_gene: 4, body_color_gene_red: 200, body_color_gene_blue: 200, body_color_gene_green: 200, body_pattern_gene: 2, body_pattern_gene_red: 179, body_pattern_gene_green: 116, body_pattern_gene_blue: 65, ear_type_gene: 3, ear_size_gene: 30, feet_type_gene: 2, eye_type_gene: 2, eye_color_gene_red: 113, eye_color_gene_green: 174, eye_color_gene_blue: 50, nose_type_gene: 1},
        {name: 'Wiskers', user_id: 1, time_last_fed_or_work: new Date().getTime(), happiness_at_time_last_fed: 0, hunger_at_time_last_fed: 0, time_at_birth: new Date().getTime() - 172800, time_last_mated: new Date().getTime() - 172800, gender: 'm', max_age_gene: 5, strength_gene: 1, intelligence_gene: 1, body_color_gene_red: 50, body_color_gene_blue: 50, body_color_gene_green: 50, body_pattern_gene: 1, body_pattern_gene_red: 50, body_pattern_gene_green: 50, body_pattern_gene_blue: 200, ear_type_gene: 1, ear_size_gene: 80, feet_type_gene: 3, eye_type_gene: 1, eye_color_gene_red: 200, eye_color_gene_green: 200, eye_color_gene_blue: 100, nose_type_gene: 2},
        {name: 'I_am_error', user_id: 2, time_last_fed_or_work: new Date().getTime(), happiness_at_time_last_fed: 0, hunger_at_time_last_fed: 0, time_at_birth: new Date().getTime() - 172800, time_last_mated: new Date().getTime() - 172800, gender: 'm', max_age_gene: 5, strength_gene: 1, intelligence_gene: 1, body_color_gene_red: 50, body_color_gene_blue: 50, body_color_gene_green: 50, body_pattern_gene: 1, body_pattern_gene_red: 50, body_pattern_gene_green: 50, body_pattern_gene_blue: 200, ear_type_gene: 1, ear_size_gene: 80, feet_type_gene: 3, eye_type_gene: 1, eye_color_gene_red: 200, eye_color_gene_green: 200, eye_color_gene_blue: 100, nose_type_gene: 2},

      ]);
    });
};
