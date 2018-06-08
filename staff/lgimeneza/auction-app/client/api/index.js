'use strict'

const axios = require('axios')

const auctionApi = {
    url: 'NO-URL',

    /**
     * @returns {Promise<[Product]>}
     */
    listProducts() {
        return Promise.resolve()
            .then(() => {

                return axios.get(`${this.url}/product`)
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

module.exports = auctionApi