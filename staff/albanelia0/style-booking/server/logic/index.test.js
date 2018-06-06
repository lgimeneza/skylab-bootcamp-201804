'use strict'


require('dotenv').config()

const { mongoose, models: { User, Service, Booking } } = require('data')
const { expect } = require('chai')
const logic = require('.')
const moment = require('moment')


const { env: { DB_URL } } = process

describe('logic (style-booking)', () => {
  const userData = { name: 'John', surname: 'Doe', email: 'jd@mail.com', password: '123' }
  const otherUserData = { name: 'Jack', surname: 'Wayne', email: 'jw@mail.com', password: '456' }
  const dummyUserId = '123456781234567812345678'
  const dummyNoteId = '123456781234567812345678'

  const serviceData = { name: 'lavado de pelo', duration: 30, price: 15 }
  const serviceData2 = { name: 'corte de pelo', duration: 60, price: 45 }

  before(() => mongoose.connect(DB_URL))

  beforeEach(() => Promise.all([User.remove(), Service.deleteMany(), Booking.deleteMany()]))

  describe('register user', () => {

    describe('should succeed on correct dada', () => {

      it('should register', () =>
        logic.registerUser('John', 'Doe', 'jd@mail.com', '123')
          .then(res => expect(res).to.be.true)
      )
    })
    describe('should give error in the error data', () => {

      it('should fail on already registered user', () =>
        User.create(userData)
          .then(() => {
            const { name, surname, email, password } = userData

            return logic.registerUser(name, surname, email, password)
          })
          .catch(({ message }) => {
            expect(message).to.equal(`user with email ${userData.email} already exists`)
          })
      )

      it('should fail on no user name', () =>
        logic.registerUser()
          .catch(({ message }) => expect(message).to.equal('user name is not a string'))
      )

      it('should fail on empty user name', () =>
        logic.registerUser('')
          .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
      )

      it('should fail on blank user name', () =>
        logic.registerUser('     ')
          .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
      )

      it('should fail on no user surname', () =>
        logic.registerUser(userData.name)
          .catch(({ message }) => expect(message).to.equal('user surname is not a string'))
      )

      it('should fail on empty user surname', () =>
        logic.registerUser(userData.name, '')
          .catch(({ message }) => expect(message).to.equal('user surname is empty or blank'))
      )

      it('should fail on blank user surname', () =>
        logic.registerUser(userData.name, '     ')
          .catch(({ message }) => expect(message).to.equal('user surname is empty or blank'))
      )

      it('should fail on no user email', () =>
        logic.registerUser(userData.name, userData.surname)
          .catch(({ message }) => expect(message).to.equal('user email is not a string'))
      )

      it('should fail on empty user email', () =>
        logic.registerUser(userData.name, userData.surname, '')
          .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
      )

      it('should fail on blank user email', () =>
        logic.registerUser(userData.name, userData.surname, '     ')
          .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
      )

      it('should fail on no user password', () =>
        logic.registerUser(userData.name, userData.surname, userData.email)
          .catch(({ message }) => expect(message).to.equal('user password is not a string'))
      )

      it('should fail on empty user password', () =>
        logic.registerUser(userData.name, userData.surname, userData.email, '')
          .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
      )

      it('should fail on blank user password', () =>
        logic.registerUser(userData.name, userData.surname, userData.email, '     ')
          .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
      )
    })
  })


  describe('authenticate user', () => {
    describe('should succeed on correct dada', () => {

      it('should succeed on correct data', () =>
        User.create(userData)
          .then(() =>
            logic.authenticateUser('jd@mail.com', '123')
              .then(id => expect(id).to.exist)
          )
      )
    })

    describe('should give error in the error data', () => {

      it('should fail on no user email', () =>
        logic.authenticateUser()
          .catch(({ message }) => expect(message).to.equal('user email is not a string'))
      )

      it('should fail on empty user email', () =>
        logic.authenticateUser('')
          .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
      )

      it('should fail on blank user email', () =>
        logic.authenticateUser('     ')
          .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
      )

      it('should fail on no user password', () =>
        logic.authenticateUser(userData.email)
          .catch(({ message }) => expect(message).to.equal('user password is not a string'))
      )

      it('should fail on empty user password', () =>
        logic.authenticateUser(userData.email, '')
          .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
      )

      it('should fail on blank user password', () =>
        logic.authenticateUser(userData.email, '     ')
          .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
      )
    })

  })

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
              expect(res.length).to.equal(2)
              expect(res[0].day).to.equal(6)
              expect(res[1].day).to.equal(7)
              expect(res[0].bookingHours).to.equal(1.5)
              expect(res[1].bookingHours).to.equal(1)
            })
        })
    )//TODO CATCH 

  })

  after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})