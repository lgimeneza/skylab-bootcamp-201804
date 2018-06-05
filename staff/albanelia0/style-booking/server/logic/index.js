
'use strict'

const { models: { User, Booking, Service } } = require('data')
const moment = require('moment')

const workdayStart = '09:00'
const workdayEnd = '17:00'
//el diff devuelve la cantidad de minutos que han pasado desde fecha A a fecha B
const workdayMinutes = moment(workdayEnd).diff(moment(workdayStart), 'minutes')

const logic = {

  /**
   * @param {string} name
   * @param {string} surname
   * @param {string} gmail
   * @param {string} password
   *
   * @returns {Promise<boolean>}
   */
  registerUser(name, surname, email, password) {
    return Promise.resolve()
      .then(() => {
        if (typeof name !== 'string') throw Error('user name is not a string')

        if (!(name = name.trim()).length) throw Error('user name is empty or blank')

        if (typeof surname !== 'string') throw Error('user surname is not a string')

        if ((surname = surname.trim()).length === 0) throw Error('user surname is empty or blank')

        if (typeof email !== 'string') throw Error('user email is not a string')

        if (!(email = email.trim()).length) throw Error('user email is empty or blank')

        if (typeof password !== 'string') throw Error('user password is not a string')

        if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

        return User.findOne({ email })
          .then((user) => {

            if (user) throw Error(`User with email ${email} already exists`)

            return User.create({ name, surname, email, password })
              .then(() => true)
          })
      })

  },
  /**
     * 
     * @param {string} id 
     * @param {string} name 
     * @param {string} surname 
     * @param {string} email 
     * @param {string} password 
     * @param {string} newEmail 
     * @param {string} newPassword 
     * 
     * @returns {Promise<boolean>}
     */
  updateUser(id, name, surname, email, password, newEmail, newPassword) {

  },
  /**
   * @param {String} id
   * @param {String} email
   * @param {String} password
   *
   */
  unregisterUser(id, email, password) {

  },

  /**
     * 
     * @param {string} email 
     * @param {string} password 
     * 
     * @returns {Promise<string>}
     */
  authenticateUser(email, password) {
    return Promise.resolve()
      .then(() => {
        if (typeof email !== 'string') throw Error('user email is not a string')

        if (!(email = email.trim()).length) throw Error('user email is empty or blank')

        if (typeof password !== 'string') throw Error('user password is not a string')

        if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

        return User.findOne({ email, password })
      })
      .then(user => {
        if (!user) throw Error('wrong credentials')

        return user.id
      })
  },
  /**
   * @param {Date} startDate
   * @param {Date} endDate
   * 
   * @returns {Promise<availability>}
   */
  getAvailableDaysForYearMonth(year, month) {
    return Promise.resolve()
      .then(() => {
        //TODO get all bookings in given year and month
        // check days that are fully booked
        // create array to return with days and two states: true => available, false => full
        // example: [true, true, true .... false, true, true ,true... true] if march => array.length = 31
        const monthStart = moment(`${year}-${month}-01 00:00`)
        const monthEnd = monthStart.add(1, 'month')
        //para saber hasta la fecha del mes siguiente cuantos dias han pasado desde monthstart
        const monthDays = monthEnd.diff(monthStart, 'days')
        return Booking.find({
          $and: [
            { "date": { $gte: monthStart } },
            { "date": { $lt: monthEnd } }
          ]
        })
          .then((bookings) => {
            const availableDays = []
            for (let i = 0; i < monthDays; i++) {
              const day = i + 1
              const currentDayBookings = bookings.filter((booking) => {
                const bookingDate = moment(booking.date).format('YYYY-MM-DD')
                //si la fecha del booking es para este mismo dia se incluiría en el array devuelto por filter
                return bookingDate === moment(`${year}-${month}-${day}`)
              })
              const bookingsMinutes = currentDayBookings.reduce((sum, booking) => {
                const minutes = moment(booking.endDate).diff(moment(booking.date), 'minutes')
                return sum + minutes
              }, 0)
              availableDays.push(bookingsMinutes < workdayMinutes)
            }
            return availableDays
          })
      })
  },

  getAvailableHoursForDate(date) { // yyyy-MM-dd

  },
  /**
   * @param {String} idUser
   * @param {String} serviceId
   * @param {Date} date
   * 
   * @returns {Promise<boolean>}
   */
  placeBooking(idUser, serviceId, date, endDate) { // yyyy-MM-dd HH:mm
    return Promise.resolve()
      .then(() => {
        //TODO VALIDATIONS

        // iduser = '123'

        // services = ['345','456']
        User.findOne({ id: idUser })
          .then((res) => {

          })
        date = new Date()

        //totalDuration = ser
        endDate = moment(date).add(totalDuration, 'minutes').toDate()

        return Booking.create({ idUser, serviceId, date, endDate })
      })

  },

  /**
   * @param {String} bookingId
   * @param {String} idUser
   *
   * @returns {Promise<boolean>}
   */
  deleteBooking(idUser, bookingId) {

  },

  /**
   * @param {String} bookingId
   * @param {String} service
   * @param {String} Date
   *
   * @returns {Promise<boolean>}
   */
  updateBooking(bookingId, service, Date) {

  },

  createService(name, duration, price) {
    return Promise.resolve()
      .then(() => {
        //TODO VALITATIONS

        return Service.create({ name, duration, price })
          .then((res) => res)
      })
  }

}
module.exports = logic
