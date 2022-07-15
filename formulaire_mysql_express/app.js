let express = require('express')
let user= require("./rooter/router")
const con = require('./database/db')

let app = express()

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
app.set('view engine','ejs')

app.use(express.static('public'))
app.use(express.json())
 app.use(express.urlencoded({ extended: false}))


app.use('/',user)

  });




app.listen(3000)
