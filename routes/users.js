const express = require('express')
let moment = require('moment-timezone');
const db = require('../db');

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/times', (req, res) => {
  res.redirect('/');
})

router.get('/stats', (req, res) => {
  db.getDates().then((data) => {
    res.render('stats', {data})
  })
})

router.get('/help', (req, res) => {
  res.render('help')
})

router.post('/times', (req, res) => {
  let currentDate = moment().tz('Pacific/Auckland').format('MMM Do');
  let receivedTime = req.body.times;
  let receivedAverage = req.body.average;
  let receivedBest = req.body.best;

  //save best and av to db
  db.saveBest(Number(receivedBest), currentDate).then((average) => {
    db.saveAverage(Number(receivedAverage), currentDate).then((best) => {
      let array = receivedTime.split(',');
  
      for (let i = 0; i < array.length; i++){
        db.saveTimes(Number(array[i]), currentDate).then((data) => {
        })
      }
          res.render('index', {success: true})
    })
  })
})

  router.post('/stats/', (req, res) => {
   
    let request = req.body.request
    switch (request){
      case '1':
        res.redirect('/stats')
      break;
      case '2':
        res.redirect('/stats/2')
      break;
      case '3':
        res.redirect('/stats/3')
      break;
    }
  })

  router.get('/stats/2', (req, res) => {
    db.getAverages().then((data) => {
     
      
      res.render('stats2', {data})
    })
  })

  router.get('/stats/3', (req, res) => {
    db.getBests().then((data) => {
      
      
      res.render('stats3', {data})
    })
  })

module.exports = router
