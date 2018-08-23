exports.up = (knex, Promise) => {
  return knex.schema.createTable('times', (table) => {
    table.increments('id').primary()
    table.string('date')
    table.float('solve')
  })
}
exports.down = (knex, Promise) => {
  return knex.schema.dropTable('times')
}
