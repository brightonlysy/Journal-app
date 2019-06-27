const express = require('express')
const journalRouter = express.Router()
const Schema = require('../models/schema')

journalRouter.post('/', (request, response) => {
    const newSchema = new Schema(request.body)
    
    newSchema.save((err, new_schema) => {
        console.log(error)
        console.log(newSchema)
        if(err) {
            console.log('working err')
            return response.status(500).send(err)
        }

        console.log('working real')
        return response.status(201).send(new_schema)
    })
})

journalRouter.get('/', (request, response) => {
    Schema.find((err, allJournals) =>{
        if(err) {
            response.status(500)
            return response.send(err)
        }
        return response.status(200).send(allJournals)
    })
})

journalRouter.get('/:_id', (request, response) => {
    Schema.findOne({_id: request.params._id}, (err, foundJournal) => {
        if(err) {
            response.status(500)
            return response.send(err)
        }
        return response.status(200).send(foundJournal)
    })
})


    journalRouter.post('/auth/login')

    

module.exports = journalRouter