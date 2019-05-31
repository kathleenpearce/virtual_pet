
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function (table){
    table.bigint('gold')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function (table){
    table.dropColumn('gold')
  })

};
