'use strict'

require('dotenv').config()

const { mongoose, models: { Auction } } = require('auction-data')
const { expect } = require('chai')
const logic = require('.')
const _ = require('lodash')

const { env: { DB_URL_TEST } } = process

describe('logic (notes)', () => {

    const title = 'title test 1',
    description = 'Lorem ipsum dolor sit amet consectetur adipiscing elit semper euismod, commodo urna dis ante erat sem aliquet aenean, tempor nulla non mauris a curabitur molestie metus. Sodales odio porttitor interdum sed iaculis luctus auctor tincidunt, et nunc tortor hendrerit aliquet vel sociosqu sociis, euismod senectus per pellentesque dis egestas est.',
    startDate = '2012-04-23T18:25:43.511Z',
    endDate = '2012-04-23T18:25:43.511Z',
    startPrice = 500,
    closed = false,
    image = 'la url de la imagen'

    const auctionData = { 
        title,
        description,
        startDate,
        endDate,
        startPrice,
        closed,
        image
    }

    const indexes = []

    before(() => mongoose.connect(DB_URL_TEST))

    beforeEach(() => {
        let count = 10 + Math.floor(Math.random() * 10)
        indexes.length = 0
        while (count--) indexes.push(count)

        return Promise.all([Auction.remove()])
    })

    describe('add auction', () => {
        it('should succeed on correct data', () =>
            Auction.create(auctionData)
                .then(({ id }) => {
                    return logic.addAuction(title,
                                            description,
                                            startDate,
                                            endDate,
                                            startPrice,
                                            closed,
                                            image)
                        .then(res => expect(res).to.be.true)
                })
        )

    })

    describe('list auctions', () => {
        it('should succeed on correct data', () => {

            const auctions = indexes.map(() => new Auction(auctionData).save())

            return Promise.all(auctions)
            .then(() => {
                return logic.listAuctions()
                .then(auctions => {
                    expect(auctions).to.exist
                    expect(auctions.length).to.equal(indexes.length)
                })
            })

        })

    })

    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})
