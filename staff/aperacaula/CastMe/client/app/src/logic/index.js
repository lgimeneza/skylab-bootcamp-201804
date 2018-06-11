
import api from 'api'

api.url='http://localhost:5000/api'

const logic = {
    userId: 'NO-ID',

    registerUser(email, password, personalData, physicalData, professionalData, videobookLink, profilePicture) {
        return api.registerUser(email, password, personalData, physicalData, professionalData, videobookLink, profilePicture)
    },

    login(email, password) {
        return api.authenticateUser(email, password)
            .then(id => {
                this.userId = id

                return true
            })
    },

    //profile(userId){

    //}
}

export default logic

