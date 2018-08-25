exports.up = (knex, Promise) => {
    return knex.schema.createTable('averages', (table) => {
      table.increments('id').primary()
      table.string('date')
      table.float('average')
    })
  }
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('averages')
  }
  