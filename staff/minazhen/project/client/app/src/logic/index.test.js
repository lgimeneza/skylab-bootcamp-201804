"use strict"

const { expect } = require("chai")
const logic = require(".")
const travelApi = require("api")

describe("logic (top10travels-app)", () => {
    const userData = { username: "JohnDoe", password: "123", location: "EUA" }
    const { username, password, location } = userData
    const dUrl = "http://en.toureast.com/portals/0/img/country/japan/japan_header.jpg"
    const dUrl2 = "https://www.roughguides.com/wp-content/uploads/2012/08/128040751-e1353429509474-660x420.jpg"

    beforeEach(done => {
        const { username, password } = userData

        travelApi.authenticateUser(username, password)
            .then(userId =>
                travelApi.unregisterUser(userId, username, password)
            )
            .then(() => done())
            .catch(() => done())
    })

    describe("register", () => {
        it("should succeed on correct data", () =>
            logic.registerUser(username, password, location)
                .then(res => {
                    expect(res).to.be.true
                    return (logic.login(username, password))
                        .then(res => {
                            expect(res).to.be.true

                            expect(logic.userId).not.to.equal("NO-ID")
                        })
                })
        )
    })

    describe("login", () => {
        it("should succeed on correct data", () =>
            logic.registerUser(username, password, location)
                .then((res) => {
                    return logic.login(username, password)
                })
                .then(res => {
                    expect(res).to.be.true

                    expect(logic.userId).not.to.equal("NO-ID")
                })
        )
    })

    describe("retrieve user", () => {
        it("should succeed on correct data", () =>
            logic.registerUser(username, password, location)
                .then(() => logic.login(username, password))
                .then(() => logic.retrieveUser())
                .then(res => {
                    expect(res).to.exist
                    expect(res.username).to.equal("JohnDoe")
                    expect(res.location).to.equal("EUA")
                    expect(logic.userId).not.to.equal("NO-ID")
                })
        )
    })

    describe("unregister user", () => {
        it("should succeed on correct data", () =>
            logic.registerUser(username, password, location)
                .then(() => logic.login(username, password))
                .then(() => logic.unregister(username, password))
                .then(res => {
                    expect(res).to.be.true
                    expect(logic.userId).to.equal("NO-ID")
                })
        )
    })

    describe("world", () => {
        it("should succeed on correct data without country", () =>
            logic.registerUser(username, password, location)
                .then(() => logic.login(username, password))
                .then(() => logic.world())
                .then(res => {
                    expect(res).to.exist
                    expect(res.length).to.equal(0)
                })
        )
    })

    describe("retrieve country", () => {
        it("should succeed on correct data", () =>
            logic.registerUser(username, password, location)
                .then(() => logic.login(username, password))
                .then(() => logic.retrieveCountry("Japan"))
                .then((res) => {
                    expect(res).to.exist
                    console.log("NO PHOTO just name")
                    console.log(res)
                })
        )
    })

    describe("add photo", () => {
        it("should succeed on correct data", () =>
            logic.registerUser(username, password, location)
                .then((x) => logic.login(username, password))
                .then((x) => logic.addPhoto("Japan", dUrl))
                .then((res) => {
                    console.log("RES >> " + res)
                    // expect(res).to.be.true
                    return logic.retrieveUser()
                        .then(res => {
                            console.log(res)
                            expect(res).to.exist
                            expect(res.username).to.equal("JohnDoe")
                            expect(res.location).to.equal("EUA")
                            // expect(res.countries.length).to.equal(1)
                            expect(logic.userId).not.to.equal("NO-ID")
                        })
                })
        )

        it("internal and create country", () =>
            travelApi.registerUser(username, password, location)
                .then((res) => {
                    return travelApi.authenticateUser(username, password)
                        .then((id) => {
                            debugger
                            return travelApi.addPhoto(id, "Japan", dUrl)
                                .then(idp => {
                                    debugger
                                    expect(idp).to.exist
                                    return travelApi.retrieveUser(id)
                                        .then(user => {
                                            debugger
                                            console.log(user)
                                            expect(user.countries.length).to.equal(1)
                                            return travelApi.retrieveCountry(id, "Japan")
                                                .then(country => {
                                                    debugger
                                                    console.log("country")
                                                    console.log(country)
                                                    expect(country.photos.length).to.equal(1)
                                                })
                                        })
                                })

                        })
                })
        )
    })
})