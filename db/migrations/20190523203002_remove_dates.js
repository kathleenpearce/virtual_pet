
exports.up = function(knex, Promise) {
  return knex.schema.table('pets', function (table){
    table.dropColumn('time_last_mated')
    table.dropColumn('time_at_birth')
    table.dropColumn('time_last_fed_or_work')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.table('pets', function (table){
    table.integer('time_last_mated')
    table.integer('time_at_birth')
    table.integer('time_last_fed_or_work')
  })

};
