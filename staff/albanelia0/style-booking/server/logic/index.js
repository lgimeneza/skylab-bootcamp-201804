
'use strict'

const { models: { User, Booking, Service } } = require('data')
const moment = require('moment')

/**
 * Style Booking logic
 */
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

            if (user) throw Error(`user with email ${email} already exists`)

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
    return Promise.resolve()
      .then(() => {
        if (typeof id !== 'string') throw Error('user id is not a string')

        if (!(id = id.trim()).length) throw Error('user id is empty or blank')

        if (typeof name !== 'string') throw Error('user name is not a string')

        if (!(name = name.trim()).length) throw Error('user name is empty or blank')

        if (typeof surname !== 'string') throw Error('user surname is not a string')

        if ((surname = surname.trim()).length === 0) throw Error('user surname is empty or blank')

        if (typeof email !== 'string') throw Error('user email is not a string')

        if (!(email = email.trim()).length) throw Error('user email is empty or blank')

        if (typeof password !== 'string') throw Error('user password is not a string')

        if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

        return User.findOne({ email, password })
      })
      .then(user => {
        if (!user) throw Error('wrong credentials')

        if (user.id !== id) throw Error(`no user found with id ${id} for given credentials`)

        if (newEmail) {
          return User.findOne({ email: newEmail })
            .then(_user => {
              if (_user && _user.id !== id) throw Error(`user with email ${newEmail} already exists`)

              return user
            })
        }

        return user
      })
      .then(user => {
        user.name = name
        user.surname = surname
        user.email = newEmail ? newEmail : email
        user.password = newPassword ? newPassword : password

        return user.save()
      })
      .then(() => true)
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
   * Returns the booking hours (on existing days) for a given year and month
   *
   * @example
   *  logic.getBookingHoursByYearMonth(2018, 6)
   *    .then(bookingHours => bookingHours.forEach(console.log))
   * // output
   * { day: 5, bookingHours: 6 }
   * { day: 11, bookingHours: 3 }
   * { day: 25, bookingHours: 7 }
   * { day: 30, bookingHours: 2.5 }
   *
   * @param {Number} year
   * @param {Number} month
   *
   * @returns {Promise<[{day<Number>, bookingHours<Number>}]>}
   */
  getBookingHoursForYearMonth(year, month) {
    return Promise.resolve()
      .then(() => {

        //TODO VALIDATIONS
        const monthStart = moment(`${year}-${month}-01`, 'YYYY-MM-DD')
        const monthEnd = moment(monthStart).add(1, 'M')
        const monthDays = monthEnd.diff(monthStart, 'days')
        return Booking.find({
          $and: [
            { "date": { $gte: monthStart } },
            { "date": { $lt: monthEnd } }
          ]
        })
          .then(bookings => {
            if (bookings.length) {
              const bookingHours = bookings.reduce((accum, booking) => {
                const { date, endDate } = booking
                const dayOfMonth = date.getDate()

                // calculate the duration of booking in hours
                const diff = moment(endDate).diff(date)
                const duration = moment.duration(diff).asHours()

                // add hours of this booking to the accum object's date key
                if (!accum[dayOfMonth]) accum[dayOfMonth] = 0
                accum[dayOfMonth] += duration

                return accum
              }, {})

              return Object.keys(bookingHours).map(key => ({ day: parseInt(key), bookingHours: bookingHours[key] }))
            } else return []
          })
      })
  },

  /**
   * Returns the booking hours for a given year, month, day
   *
   * @example
   *  logic.getBookingHoursForYearMonthDay(2018, 10, 1)
   *    .then(bookingHours => bookingHours.forEach(console.log))
   * // output
   * { start: 9, end: 10.5 }
   * { start: 12.5, end: 13.5 }
   * { start: 15.25, end: 16 }
   *
   * @param {Number} year
   * @param {Number} month
   * @param {Number} day
   */
  getBookingHoursForYearMonthDay(year, month, day) { // yyyy-MM-dd

    Promise.resolve(() => {
      //TODO VALIDATIONS

      // let hours = []
      // for (let i = 8; i < 17; i++) {

      //   for (let j = 0; j < 60; j += 15) {
      //     if (!hours[i]) hours[i] = i

      //     hours[i] = j

      //     for (key in hours) {
      //       if (hours[key] !== j)

      //         hours += key + hours[j]
      //     }

      //   }
      // }

      const hoursOfDays = {}

      let _hours = []
      for (let i = 8; i < 17; i++) {

        for (let j = 0; j < 60; j += 15) {
          _hours.push(`${i}.${j}`)

        }
      }

      const dayStart = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD')
      const dayEnd = moment(dayStart).add(1, 'days')

      return Booking.find({
        $and: [
          { "date": { $gte: dayStart } },
          { "date": { $lt: dayEnd } }
        ]
      })

        .then(booking => {
          const hoursOfWork = _hours.forEach(hour => {

            const endDate = booking.endDate

            // calculate the duration of booking in hours
            const diff = moment(endDate).diff(date)
            const duration = moment.duration(diff).asHours()


            hoursOfDays = { "start": 8, "end": endDate }


          });

          // bookingHours => { 5: 3, 10: 7.5 }

          return Object.keys(bookingHours).map(key => ({ day: parseInt(key), bookingHours: bookingHours[key] }))
        })
    })
  },
  /**
   * @param {String} userId
   * @param {Array} serviceIds
   * @param {Date} date
   *
   * @returns {Promise<Data>}
   */
  placeBooking(userId, serviceIds, date) {
    return Promise.resolve()
      .then(() => {
        //TODO VALIDATIONS

        let totalDuration = 0

        return Promise.all(serviceIds.map(serviceId => {
          return Service.findById(serviceId)
            .then(res => {

              const { _doc: { duration } } = res
              totalDuration += duration
            })
        }))
          .then(() => {
            const endDate = moment(date).add(totalDuration, 'minutes').toDate()

            return Booking.create({
              userId,
              services: serviceIds,
              date,
              endDate
            }).then(res => {

              const { _doc: booking } = res
              const data = {
                bookingId: booking._id,
                services: booking.services.map(s => s._id),
                userId: booking.userId,
                date: booking.date,
                endDate: booking.endDate
              }
              return data
            })
          })
      })
  },
/**
 * This function should list all bookings
 * 
 * @returns {Promise<Data>}
 */
  listBookings() {
    return Promise.resolve()
      .then(() => {
        return Booking.find()
          .then(res => res)
      })
  },

/**
 * This function should list the bookings of user
 * @returns {Promise<Data>}
 */
  listBookingsUser(userId) {
    return Promise.resolve()
      .then(() => {
        if (typeof userId !== 'string') throw Error('userId is not a string')

        if (!(userId = userId.trim()).length) throw Error('userId is empty or blank')

        return Booking.find()
          .then(res => res)
      })
  },

  /**
   * @param {String} bookingId
   * @param {String} idUser
   *
   * @returns {Promise<boolean>}
   */
  deleteBooking(idUser, bookingId) {
    Promise.resolve()
      .then(() => {
        if (typeof idUser !== 'string') throw Error('user id is not a string')

        if (!(idUser = idUser.trim()).length) throw Error('user id is empty or blank')

        if (typeof bookingId !== 'string') throw Error('note id is not a string')

        if (!(bookingId = bookingId.trim())) throw Error('note id is empty or blank')



        return Booking.findById({ bookingId: { idUser } })
          .then(user => {
            if (!user) throw Error(`no user found with id ${idUser}`)


            // if (!note) throw Error(`no note found with id ${bookingId}`)

            // note.remove()

            // return user.save()
          })
        // .then(() => true)
      })

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

}
module.exports = logic
