
const express = require('express')
const bodyParser = require('body-parser')
const logic = require('logic')
const jwt = require('jsonwebtoken')
const jwtValidation = require('./utils/jwt-validation')

const router = express.Router()

const { env: { TOKEN_SECRET, TOKEN_EXP } } = process

router.post('/user/', bodyParser.json(), (req, res) => {
  const { body: { name, surname, email, password } } = req

  logic.registerUser(name, surname, email, password)
    .then(() => {
      res.status(201)
      res.json({ status: 'OK' })
    })
    .catch(({ message }) => {
      res.status(400)
      res.json({ status: 'KO', error: message })
    })
})
router.post('/auth', bodyParser.json(), (req, res) => {
  const { body: { email, password } } = req
  logic.authenticateUser(email, password)
    .then(id => {
      const token = jwt.sign({ id }, TOKEN_SECRET, { expiresIn: TOKEN_EXP })

      res.status(200)
      res.json({ status: 'OK', data: { id, token } })
    })
    .catch(({ message }) => {
      res.status(400)
      res.json({ status: 'KO', error: message })
    })
})
router.post('/user/services', bodyParser.json(), (req, res) => {
  const { body: { name, duration, price } } = req

  logic.createService(name, duration, price)
    .then((service) => {
      res.status(201)
      res.json({ status: 'OK', data: { service } })
    })
    .catch(({ message }) => {
      res.status(400)
      res.json({ status: 'KO', error: message })
    })
})

router.get('/availability/:year/:month', (req, res) => {
  const { params: { year, month } } = req
  logic.getAvailableDaysForYearMonth(year, month)
    .then((service) => {
      debugger
      res.status(200)
      res.json({ status: 'OK', })
    })
    .catch(({ message }) => {
      res.status(400)
      res.json({ status: 'KO', error: message })
    })
}),
  router.delete('/delete/booking/user/:idUser/:bookingId', (req, res) => {
    const { params: { idUser, bookingId } } = req

    logic.deleteBooking(idUser, bookingId)
      .then((booking) => {
        console.log(booking)
        res.status(200)
        res.json({ status: 'OK', })
      })
      .catch(({ message }) => {
        res.status(400)
        res.json({ status: 'KO', error: message })
      })
  }),

  router.post('/create/booking', bodyParser.json(), (req, res) => {
    const { body: { idUser, serviceId, date, endDate } } = req

    logic.placeBooking(idUser, serviceId, date, endDate)
      .then((booking) => {
        console.log(booking)
        res.status(201)
        res.json({ status: 'OK', })
      })
      .catch(({ message }) => {
        res.status(400)
        res.json({ status: 'KO', error: message })
      })
  })

module.exports = router
