const db = require('./db')

let userTimes = document.getElementById('timeOut').innerText
let saveTimesBtn = document.getElementById('saveTimesBtn')
let valTimes = document.getElementById('timeList').innerText;

console.log(valTimes)

saveTimesBtn.addEventListener('click', function(){
    saveTimes(valTimes)
})

function saveTimes(times){
    db.saveTimes(times)
}
