
exports.up = function(knex, Promise) {
  return knex.schema.table('jobs', function (table){
    table.dropColumn('job_start_time')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.table('jobs', function (table){
    table.integer('job_start_time')
  })

};
