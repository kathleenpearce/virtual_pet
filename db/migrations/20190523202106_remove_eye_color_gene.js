
exports.up = function(knex, Promise) {
  return knex.schema.table('pets', function (table){
    table.dropColumn('eye_color_gene')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.table('pets', function (table){
    table.integer('eye_color_gene')
  })

};
