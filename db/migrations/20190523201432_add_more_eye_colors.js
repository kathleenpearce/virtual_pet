
exports.up = function(knex, Promise) {
  return knex.schema.table('pets', function (table){
    table.integer('eye_color_gene_red')
    table.integer('eye_color_gene_green')
    table.integer('eye_color_gene_blue')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.table('pets', function (table){
    table.dropColumn('eye_color_gene_red')
    table.dropColumn('eye_color_gene_green')
    table.dropColumn('eye_color_gene_blue')
  })

};
