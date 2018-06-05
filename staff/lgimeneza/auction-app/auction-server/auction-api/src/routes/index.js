const express = require('express')
const bodyParser = require('body-parser')
const logic = require('auction-logic')
const jwt = require('jsonwebtoken')
const jwtValidation = require('./utils/jwt-validation')

const router = express.Router()

const { env: { TOKEN_SECRET, TOKEN_EXP } } = process

const jwtValidator = jwtValidation(TOKEN_SECRET)

const jsonBodyParser = bodyParser.json()

router.get('/auction', (req, res) => {

    return logic.listAuctions()
        .then(auction => {
            res.status(200).json({ status: 'OK', data: auction })
        })
        .catch(({ message }) => {
            res.status(400).json({ status: 'KO', error: message })
        })

})

router.post('/auction', jsonBodyParser, (req, res) => {
    const { body: { title, description, startDate, endDate, startPrice, closed, image } } = req

    logic.addAuction(title, description, startDate, endDate, startPrice, closed, image)
        .then(() => {
            res.status(201).json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400).json({ status: 'KO', error: message })
        })
})

module.exports = router