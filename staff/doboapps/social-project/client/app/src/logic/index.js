const socialApi = require('social-api')

socialApi.url = 'http://localhost:5000/api'

const logic = {
    userId: 'NO-ID',
    cities : ['Alava','Albacete','Alicante','Almería','Asturias','Avila','Badajoz','Barcelona','Burgos','Cáceres',
    'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara',
    'Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra',
    'Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
    'Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza'],

    registerUser(name, email, password,city) {
        return socialApi.registerUser(name, email, password,city)
    },

    login(email, password) {
        return socialApi.authenticateUser(email, password)
            .then(data => {
                
                this.userId = data.data.id
                localStorage.setItem('id-app', data.data.id)
                return data
            })
    },

    retrieveUser(){
        return socialApi.retrieveUser(localStorage.getItem('id-app'))
    },

    uploadImageProfile(base64Image){
        return socialApi.uploadImageProfile(localStorage.getItem('id-app'),base64Image)
    },

    isLogged(){
        return localStorage.getItem("token") ? true : false
    },

    search(name,race,gender,city) {
        return socialApi.searchUser(name, race, gender,city)
    },

    logOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('id-app')
    }
}

module.exports = logic
