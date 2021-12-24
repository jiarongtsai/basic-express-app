// require modules
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

// set the handlebars as view engine
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname:'hbs'}))
app.set('view engine', 'hbs')

app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(3000, (req, res)=>{
    console.log('The server is listening on port 3000.')
})