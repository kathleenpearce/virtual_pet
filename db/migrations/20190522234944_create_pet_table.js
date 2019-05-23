
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pets', function (table) {
    table.increments();
    table.string('name')
    table.integer('time_last_fed_of_work')
    table.integer('hunger_at_time_last_fed')
    table.integer('happiness_at_time_last_fed')
    table.integer('time_last_mated')
    table.integer('time_at_birth')
    table.string('gender')
    table.integer('max_age_gene')
    table.integer('strength_gene')
    table.integer('intelligence_gene')
    table.integer('body_color_gene_red')
    table.integer('body_color_gene_green')
    table.integer('body_color_gene_blue')
    table.integer('body_pattern_gene')
    table.integer('body_pattern_gene_red')
    table.integer('body_pattern_gene_green')
    table.integer('body_pattern_gene_blue')
    table.integer('ear_type_gene')
    table.integer('ear_size_gene')
    table.integer('feet_type_gene')
    table.integer('eye_type_gene')
    table.integer('eye_color_gene')

  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pets')

};
