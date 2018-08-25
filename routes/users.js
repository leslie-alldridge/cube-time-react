const express = require('express')
const moment = require('moment')
const db = require('../db')

//flash notifications


const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/times', (req, res) => {
  res.redirect('/');
})

router.get('/stats', (req, res) => {
  db.getDates().then((data) => {
    console.log(data);
    
    res.render('stats', {data})
  })
})

router.post('/times', (req, res) => {
  let receivedTime = req.body.times;

  let currentDate = moment().format('ll');
  
  let array = receivedTime.split(',');
  
  for (let i = 0; i < array.length; i++){
    db.saveTimes(Number(array[i]), currentDate).then((data) => {
    })
  }
      res.render('index', {success: true})
  })


module.exports = router
