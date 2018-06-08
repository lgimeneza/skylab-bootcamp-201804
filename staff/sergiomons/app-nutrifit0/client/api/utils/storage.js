
const storage = {

    setTokenStorage(token) {
        return localStorage.setItem('token', token)
    },

    getTokenStorage() {
        return localStorage.getItem('token')
    },

    removeTokenStorage() {
        return localStorage.removeItem('token')
    }
}

export default storage