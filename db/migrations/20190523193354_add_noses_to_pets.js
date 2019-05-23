
exports.up = function(knex, Promise) {
  return knex.schema.table('pets', function (table){
    table.integer('nose_type_gene')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('pets', function (table){
    table.dropColumn('nose_type_gene')
  })
};
