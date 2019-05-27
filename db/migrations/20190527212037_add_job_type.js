
exports.up = function(knex, Promise) {
  return knex.schema.table('jobs', function (table){
    table.integer('job_type')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.table('jobs', function (table){
    table.dropColumn('job_type')
  })

};
