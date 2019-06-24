const express = require('express')
const journalRouter = express.Router()

const schema = require('../models/schema')

journalRouter.post('/new', (req, res, next) => {
    const newSchema = new schema (req.body) 
    newSchema.save((err, newSavedSchema) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(newSavedSchema)
    })
})

module.exports = journalRouter