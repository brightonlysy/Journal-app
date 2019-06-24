const express = require('express')
const journalRouter = express.Router()
const Schema = require('../models/schema')

journalRouter.route('/')

    .post((request, response) => {
        const newSchema = new Schema(request.body)
        newSchema.save((err, new_schema) =>{
            if(err) {
                return response.status(500).send(err)
            }
            return response.status(201).send(new_schema)
        })
    })

    journalRouter.route('/:id')

module.exports = journalRouter