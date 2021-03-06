exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('preset_drink', function(table){
      table.integer('preset_ingredient_id').unsigned();
      table.foreign('preset_ingredient_id').references('preset_ingredient.id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('preset_drink', function(table) {
      table.dropColumn('preset_ingredient_id');
    })
  ])
};