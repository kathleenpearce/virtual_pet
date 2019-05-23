
exports.up = function(knex, Promise) {
  return knex.schema.createTable('jobs', function (table) {
    table.increments();
    table.integer('pet_id')
    table.integer('job_start_time')
    table.integer('hunger_at_start')
    table.integer('happy_at_start')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jobs')

};
