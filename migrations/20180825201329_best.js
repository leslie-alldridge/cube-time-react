exports.up = (knex, Promise) => {
    return knex.schema.createTable('bests', (table) => {
      table.increments('id').primary()
      table.string('date')
      table.float('best')
    })
  }
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('bests')
  }
  