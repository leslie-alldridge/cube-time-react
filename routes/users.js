const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/times', (req, res) => {
  //console.log(req.body)
  //need to do key value pairs and submit times as individual lines
  let receivedTime = req.body.times;
  let date = new Date().toISOString().split('T')[0];
  console.log(date);
  


  console.log(receivedTime);
  let array = receivedTime.split(',');
  
  for (let i = 0; i < array.length; i++){
    db.saveTimes(Number(array[i]), date).then((data) => {
    })
  }
    //console.log(data);
      res.send('you hit post')
  })


module.exports = router
