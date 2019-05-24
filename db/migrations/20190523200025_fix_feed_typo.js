
exports.up = function(knex, Promise) {
  return knex.schema.table('pets', function (table){
    table.dropColumn('time_last_fed_of_work')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('pets', function (table){
    table.integer('time_last_fed_of_work')
  })

};
