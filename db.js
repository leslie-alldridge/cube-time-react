const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function saveTimes(time, now, testConn) {
  const conn = testConn || connection
  return conn('times').insert({'date': now, 'solve': time})
}

function saveBest(time, now, testConn) {
  const conn = testConn || connection
  return conn('bests').insert({'date': now, 'best': time})
}

function saveAverage(time, now, testConn) {
  const conn = testConn || connection
  return conn('averages').insert({'date': now, 'average': time})
}

function getDates(testConn){
  const conn = testConn || connection
  return conn('times').select()
}

function getAverages(testConn){
  const conn = testConn || connection
  return conn('averages').select()
}

function getBests(testConn){
  const conn = testConn || connection
  return conn('bests').select()
}

module.exports = {
  saveTimes,
  getDates,
  getAverages,
  getBests,
  saveBest,
  saveAverage
}