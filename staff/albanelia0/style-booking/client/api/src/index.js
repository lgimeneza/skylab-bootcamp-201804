
'use strict'

const axios = require('axios')

/**
 * Style Booking logic
 */
const logic = {

  url: 'NO-URL',

  token: 'NO-TOKEN',

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

        return axios.post(`${this.url}/user`, { name, surname, email, password })
          .then(({ status, data }) => {
            if (status !== 201 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

            return true

          })
          .catch(err => {
            if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

            if (err.response) {
              const { response: { data: { error: message } } } = err

              throw Error(message)
            } else throw err

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

        return axios.patch(`${this.url}/user`, { id, name, surname, email, password, newEmail, newPassword })
          .then(({ status, data }) => {
            if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

            return data.data
          }).catch(err => {
            if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

            if (err.response) {
              const { response: { data: { error: message } } } = err

              throw Error(message)
            } else throw err

          })
      })
  },

  /**
   * @param {String} id
   * @param {String} email
   * @param {String} password
   *
   */
  unregisterUser(userId, email, password) {
    return Promise.resolve()
      .then(() => {
        if (typeof userId !== 'string') throw Error('user userId is not a string')

        if (!(userId = userId.trim()).length) throw Error('user userId is empty or blank')

        if (typeof email !== 'string') throw Error('user email is not a string')

        if (!(email = email.trim()).length) throw Error('user email is empty or blank')

        if (typeof password !== 'string') throw Error('user password is not a string')

        if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

        return axios.delete(`${this.url}/user`, { userId, email, password })
          .then(({ status, data }) => {
            if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

            return true
          }).catch(err => {
            if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

            if (err.response) {
              const { response: { data: { error: message } } } = err

              throw Error(message)
            } else throw err

          })
      })

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


        return axios.post(`${this.url}/auth`, { email, password })
          .then(({ status, data }) => {
            if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)
            const { data: { id, token } } = data

            this.token = token

            return { id, token }
          })
          .catch(err => {
            if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

            if (err.response) {
              const { response: { data: { error: message } } } = err

              throw Error(message)
            } else throw err

          })
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

        return axios.get(`${this.url}/booking/hours/${year}/${month}`, { year, month })
          .then(({ status, data }) => {
            if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

            return data.data

          })
          .catch(err => {
            if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

            if (err.response) {
              const { response: { data: { error: message } } } = err

              throw Error(message)
            } else throw err

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
    return Promise.resolve()
      .then(() => {
        return axios.get(`${this.url}/booking/hours/${year}/${month}/${day}`, { year, month, day })
          .then(({ status, data }) => {
            if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

            return data.data

          })
          .catch(err => {
            if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

            if (err.response) {
              const { response: { data: { error: message } } } = err

              throw Error(message)
            } else throw err

          })
      })
  },

  /**
 * @param {object} userId
 * @param {Array} serviceIds
 * @param {Date} date
 *
 * @returns {Promise<Data>}
 */
  placeBooking(userId, serviceIds, date) {
    return Promise.resolve()
      .then(() => {
        //TODO VALIDATIONS
        // - Comprobar que la hora de inicio de la reserva no sea menor al inicio de jornada
        //   o mayor al fin de jornada (tirar un error en ese caso)
        return axios.post(`${this.url}/booking`, { userId, serviceIds, date })
          .then(({ status, data }) => {
            if (status !== 201 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

            return data.data

          })
          .catch(err => {
            if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

            if (err.response) {
              const { response: { data: { error: message } } } = err

              throw Error(message)
            } else throw err

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
        return axios.get(`${this.url}/booking`, { year, month, day })
          .then(({ status, data }) => {
            if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

            return data.data

          })
          .catch(err => {
            if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

            if (err.response) {
              const { response: { data: { error: message } } } = err

              throw Error(message)
            } else throw err

          })
      })
  },

  /**
   * This function should list the bookings of user
   * @returns {Promise<Data>}
   */
  listBookingsUser(userId) {
    return Promise.resolve()
      .then(() => {
        return axios.get(`${this.url}/booking/${userId}`, { userId})
          .then(({ status, data }) => {
            if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

            return data.data

          })
          .catch(err => {
            if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

            if (err.response) {
              const { response: { data: { error: message } } } = err

              throw Error(message)
            } else throw err

          })
      })
  },

  /**
   * @param {String} bookingId
   * @param {String} userId
   *
   * @returns {Promise<boolean>}
   */
  deleteBooking(bookingId, userId) {
    return Promise.resolve()
      .then(() => {
        return axios.delete(`${this.url}/booking/${bookingId}/${userId}`, { bookingId, userId })
          .then(({ status, data }) => {
            if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

            return true

          })
          .catch(err => {
            if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

            if (err.response) {
              const { response: { data: { error: message } } } = err

              throw Error(message)
            } else throw err

          })

      })

  },
}
module.exports = logic
