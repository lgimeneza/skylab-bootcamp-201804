'use strict'

const { models: { User, Demand, Casting, PersonalData, PhysicalData, ProfessionalData } } = require('notes-data')

const logic = {
    /**
     * 
     * 
     * @param {string} email 
     * @param {string} password 
     * @param {object} personalData 
     * @param {object} physicalData 
     * @param {object} professionalData 
     * @param {string} videobookLink
     * @param {array} pics
     * 
     * 
     * 
     * 
     * @returns {Promise<boolean>}
     */
    registerUser(email, password, personalData, physicalData, professionalData, videobookLink, pics ) {
        return Promise.resolve()
            .then(() => {
                if (typeof email !== 'string') throw Error('user email is not a string')

                if (!(email = email.trim()).length) throw Error('user email is empty or blank')

                if (typeof videobookLink !== 'string') throw Error('user videobookLink is not a string')

                if ((videobookLink = videobookLink.trim()).length === 0) throw Error('user videobookLink is empty or blank')

                if (typeof personalData !== 'object') throw Error('personal data is not what it should be')

                if (!(personalData = personalData.trim()).length) throw Error('personal data is empty or blank')

                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                if (typeof professionalData !== 'object') throw Error('professional data is not what it should be')

                if (!(professionalData = professionalData.trim()).length) throw Error('professional data is empty or blank')

                if (typeof physicalData !== 'object') throw Error('physical data is not what it should be')

                if (!(physicalData = physicalData.trim()).length) throw Error('physical data is empty or blank')

                if (! pics instanceof Array ) throw Error('pics should be an array')

                return User.findOne({ email })
                    .then(user => {
                        if (user) throw Error(`user with email ${email} already exists`)

                        return User.create({ email, password, personalData, physicalData, professionalData, videobookLink, pics })
                            .then(() => true)
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

                return User.findOne({ email, password })
            })
            .then(user => {
                if (!user) throw Error('wrong credentials')

                return user.id
            })
    },

    /**
     * 
     * @param {string} id
     * 
     * @returns {Promise<User>} 
     */
    retrieveUser(id) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')

                return User.findById(id).select({ _id: 0})
            })
            .then(user => {
                if (!user) throw Error(`no user found with id ${id}`)

                return user
            })
    },

    /**
     * 
     * @param {string} id 
     * @param {string} email 
     * @param {string} password 
     * @param {object} personalData 
     * @param {object} physicalData 
     * @param {object} professionalData 
     * @param {string} videobookLink
     * @param {array} pics
     * @param {string} newEmail 
     * @param {string} newPassword 
     * 
     * @returns {Promise<boolean>}
     */
    updateUser(email, password, newEmail, newPassword, personalData, physicalData, professionalData, videobookLink, pics ) {
        return Promise.resolve()
            .then(() => {
                if (typeof email !== 'string') throw Error('user email is not a string')

                if (!(email = email.trim()).length) throw Error('user email is empty or blank')

                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                if (typeof newEmail !== 'string') throw Error('user newEmail is not a string')

                if (!(newEmail = newEmail.trim()).length) throw Error('user newEmail is empty or blank')

                if (typeof newPassword !== 'string') throw Error('user newPassword is not a string')

                if ((newPassword = password.trim()).length === 0) throw Error('user newPassword is empty or blank')

                if (typeof videobookLink !== 'string') throw Error('user videobookLink is not a string')

                if ((videobookLink = videobookLink.trim()).length === 0) throw Error('user videobookLink is empty or blank')

                if (typeof personalData !== 'object') throw Error('personal data is not what it should be')

                if (!(personalData = personalData.trim()).length) throw Error('personal data is empty or blank')

                if (typeof professionalData !== 'object') throw Error('professional data is not what it should be')

                if (!(professionalData = professionalData.trim()).length) throw Error('professional data is empty or blank')

                if (typeof physicalData !== 'object') throw Error('physical data is not what it should be')

                if (!(physicalData = physicalData.trim()).length) throw Error('physical data is empty or blank')

                if (! pics instanceof Array ) throw Error('pics should be an array')

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
                user.email = newEmail ? newEmail : email
                user.password = newPassword ? newPassword : password
                user.personalData = personalData
                user.professionalData = professionalData
                user.physicalData = physicalData
                user.videobookLink = videobookLink
                user.pics = pics

                return user.save()
            })
            .then(() => true)
    },

    /**
     * 
     * @param {string} id 
     * @param {string} email 
     * @param {string} password 
     * 
     * @returns {Promise<boolean>}
     */
    unregisterUser(id, email, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')

                if (typeof email !== 'string') throw Error('user email is not a string')

                if (!(email = email.trim()).length) throw Error('user email is empty or blank')

                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                return User.findOne({ email, password })
            })
            .then(user => {
                if (!user) throw Error('wrong credentials')

                if (user.id !== id) throw Error(`no user found with id ${id} for given credentials`)

                return user.remove()
            })
            .then(() => true)
    },

    /**
     * 
     * @param {string} userId 
     * 
     * @returns {Promise<array>}
     */
    getCastings(userId){
        return Promise.resolve()
            .then(()=>{

                if (typeof userId !== 'string') throw Error('user id is not a string')

                if (!(userId = userId.trim()).length) throw Error('user id is empty or blank')

                return User.findById(userId)
            })
            .then(user =>{
                const applications=[]
                user.castings.forEach(casting => applications.push(casting))
                return applications
            })
    },

    eligibility(userId,demandId){ //Has to check if the user can join the demand
        return Promise.resolve()
    },


    /**
     * 
     * @param {string} userId 
     * @param {string} castingId
     * @param {string} demandId 
     * 
     * @returns {Promise<array>}
     */
    joinCasting(userId, castingId, demandId){
        return Promise.resolve()
            .then(()=>{

                if (typeof userId !== 'string') throw Error('user id is not a string')

                if (!(userId = userId.trim()).length) throw Error('user id is empty or blank')

                if (typeof castingId !== 'string') throw Error('user id is not a string')

                if (!(castingId = castingId.trim()).length) throw Error('user id is empty or blank')

                if (typeof demandId !== 'string') throw Error('user id is not a string')

                if (!(demandId = demandId.trim()).length) throw Error('user id is empty or blank')

                return User.findById(userId)
            })
            .then(user =>{
                return Casting.findById(castingId)//hace falta pasar por el intermediario?? Ensenya el diagrama
                    .then(casting =>{
                        return Demand.findById(demandId)
                            console.log('not finished')
                            //Faltaaaaaaa
                        
                    })
                const applications=[]
                user.castings.forEach(casting => applications.push(casting))
                return applications
            })



    }

    
}

module.exports = logic