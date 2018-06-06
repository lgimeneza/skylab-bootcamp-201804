
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

  getBookingHoursForYearMonth(year, month) {
    return Promise.resolve()
      .then(() => {

        //TODO VALIDATIONS

        return axios(`${this.url}/booking/hours/${year}/${month}`, { year, month })
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
}
module.exports = logic
