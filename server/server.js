const express = require ('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const port = 8000

app.use(express.json())

app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/journaldb', 
    {userNewUrlParser: true},
    () => {console.log('Connected to DB')
})

app.use('/journalRoutes', require('./routes/journalRouter'))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})