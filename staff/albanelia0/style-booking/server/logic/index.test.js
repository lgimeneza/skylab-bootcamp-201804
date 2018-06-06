'use strict'


require('dotenv').config()

const { mongoose, models: { User, Service, Booking } } = require('data')
const { expect } = require('chai')
const logic = require('.')
const moment = require('moment')


const { env: { DB_URL } } = process

describe('logic (style-booking)', () => {
  const serviceData = { name: 'lavado de pelo', duration: 30, price: 15 }
  const serviceData2 = { name: 'corte de pelo', duration: 60, price: 45 }

  before(() => mongoose.connect(DB_URL))

  beforeEach(() => Promise.all([User.remove(), Service.deleteMany(), Booking.deleteMany()]))

  describe('create a booking', () => {
    it('should succeed on correct data', () =>
      Promise.all([
        User.create({ name: 'John', surname: 'Doe', email: 'johndoe@mail.com', password: '123' }),
        Service.create(serviceData),
        Service.create(serviceData2)
      ])
        .then(res => {

          const [{ _doc: { _id: userId } }, { _doc: service1 }, { _doc: service2 }] = res

          // first booking data
          const date = new Date()
          const totalDuration = service1.duration + service2.duration
          const endDate = moment(date).add(totalDuration, 'minutes').toDate()

          // second booking data
          const date2 = moment().add(1, 'days').toDate()
          const totalDuration2 = service2.duration
          const endDate2 = moment(date2).add(totalDuration2, 'minutes').toDate()

          return Promise.all([
            Booking.create({
              userId,
              services: [service1._id, service2._id],
              date,
              endDate
            }),
            Booking.create({
              userId,
              services: [service2._id],
              date: date2,
              endDate: endDate2
            }),
          ])
            .then(() => {
               return logic.getBookingHoursForYearMonth(2018, 6)
            })
            .then(res => {
              // TODO: EXPECT
              console.log(res)
              
            })
        })

    )
  })

  after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})