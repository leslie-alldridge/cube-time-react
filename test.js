const db = require('../db')
window.onload = db.getDates();

db.getDates().then((data) => {
    console.log(data);
    

})

alert('ok')
