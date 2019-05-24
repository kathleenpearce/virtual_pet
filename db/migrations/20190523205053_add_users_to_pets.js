
exports.up = function(knex, Promise) {
  return knex.schema.table('pets', function (table){
    table.integer('user_id')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.table('pets', function (table){
    table.dropColumn('user_id')
  })

};
