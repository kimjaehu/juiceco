exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('preset_drink', function(table){
      table.increments('id').primary();
      table.text('name');
      table.text('img');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('preset_drink')
  ])
};