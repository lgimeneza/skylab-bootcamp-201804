'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const logic = require('logic')
const jwt = require('jsonwebtoken')
const jwtValidation = require('./utils/jwt-validation')

const router = express.Router()

const { env: { TOKEN_SECRET, TOKEN_EXP } } = process

const jwtValidator = jwtValidation(TOKEN_SECRET)

const jsonBodyParser = bodyParser.json()

router.get('/product', (req, res) => {

    return logic.listProducts()
        .then(products => {
            res.status(200).json({ status: 'OK', data: products })
        })
        .catch(({ message }) => {
            res.status(400).json({ status: 'KO', error: message })
        })

})

router.get('/product/:productId', (req, res) => {
    const { params: { productId } } = req

    return logic.retrieveProduct(productId)
        .then(product => {
            res.status(200).json({ status: 'OK', data: product })
        })
        .catch(({ message }) => {
            res.status(400).json({ status: 'KO', error: message })
        })

})

router.post('/product', jsonBodyParser, (req, res) => {
    const { body: { title, description, startDate, endDate, startPrice, closed, image } } = req

    logic.addProduct(title, description, startDate, endDate, startPrice, closed, image)
        .then(() => {
            res.status(201).json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400).json({ status: 'KO', error: message })
        })
})

module.exports = router