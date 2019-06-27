const express = require ('express')
const app = express()
require("dotenv").config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const expressJwt = require("express-jwt")
const path = require('path')
const PORT = process.env.PORT || 8000


app.use(express.json())
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use("/api", expressJwt({ secret: process.env.SECRET }))
app.use(express.static(path.join(_dirname, "client", "build")))

//connect to db
mongoose.set('useCreateIndex', true)
mongoose.connect(
    process.env.mongolab-convex-90600 || 'mongodb://localhost:27017/journaldb', 
    {
        userNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    }, 
    () => console.log('Connected to DB')
)
    
// app.use("/auth", require("./routes/auth"));
require('./routes/journalRouter.js')(app)
app.use('/journalRoutes', require('./routes/journalRouter'))
app.get("*", (req, res) => {
    res.sendFile(path.join(_dirname, "client", "Build", "index.html"))
})

app.use((err, req, res, next) => {
    console.error(err)
    if(err.name === "unathorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})