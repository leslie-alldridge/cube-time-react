const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function saveTimes(time, now, testConn) {
  const conn = testConn || connection
  return conn('times').insert({'date': now, 'solve': time})
}

module.exports = {
  saveTimes
}