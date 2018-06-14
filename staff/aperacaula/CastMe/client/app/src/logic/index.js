
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

    retrieveUserLite(userId){
        return api.retrieveUserLite(userId)
    },

    retrieveUser(userId){
        return api.retrieveUser(userId)
    },

    deleteUser(id,email,password){
        return api.unregisterUser(id,email,password)
            .then(res=>{
                sessionStorage.clear()
                return res
            })
    }



    //profile(userId){

    //}
}

export default logic

