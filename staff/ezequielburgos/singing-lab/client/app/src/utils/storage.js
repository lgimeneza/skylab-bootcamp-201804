const storage = {

    setToken(value) {
        // Set the token in sessionStorage
        return sessionStorage.setItem('token', value)
    },

    getToken() {
        // Get the information saved in sessionStorage
        return sessionStorage.getItem('token')
    },

    removeToken() {
        // Remove the token saved in sessionStorage
        return sessionStorage.removeItem('token')
    }
}

export default storage