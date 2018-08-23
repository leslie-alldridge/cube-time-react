const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/times', (req, res) => {
  //console.log(req.body)
  //need to do key value pairs and submit times as individual lines
  let receivedTime = req.body.times;
  console.log(receivedTime);
  let array = receivedTime.split(',');
  
  for (let i = 0; i < array.length; i++){
    db.saveTimes(Number(array[i])).then((data) => {
    })
  }
  
    //console.log(data);
      res.send('you hit post')


  })


module.exports = router
