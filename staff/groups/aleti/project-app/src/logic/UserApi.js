const UserApi = {

    url: 'https://skylabcoders.herokuapp.com/api',
    token: '',

    loginUser(body){
        return Promise.resolve()
        .then(()=>{

            if (!body) throw Error('Input body not valid')

            if( typeof body.username !== 'string' || typeof body.password !== 'string' ) 
                throw Error('Input body not valid')
    
            return  fetch(`${this.url}/auth`, { 
                body: JSON.stringify(body),
                headers: {
                    "content-type": "application/json"
                },
                method: 'POST'
            })
            .then(resp => resp.json())
            .then(info => info)

        })
    },

    registerUser(body){
        return Promise.resolve()
        .then(()=>{

            if (!body) throw Error('Input body not valid')

            if( typeof body.username !== 'string' || typeof body.password !== 'string' ) 
                throw Error('Input body not valid')

            return fetch(`${this.url}/user`, { 
                body: JSON.stringify(body),
                headers: {
                    "content-type": "application/json"
                },
                method: 'POST'
            })
            .then(resp => resp.json())
            .then(info => info)

        })
    },

    retrieveUser(userId, token){
        return Promise.resolve()
        .then(()=>{

            if( typeof userId !== 'string' || typeof token !== 'string' ) 
                throw Error('Input parameter not valid')

            return fetch(`${this.url}/user/${userId}`, { 
                headers: {
                    "Authorization": 'Bearer ' + token
                },
                method: 'GET'
            })
            .then(resp => resp.json())
            .then(info => info)

        })
    },

    unregisterUser(body, userId, token){

        return Promise.resolve()
        .then(()=>{

            if (!body) throw Error('Input body not valid')

            if( typeof body.username !== 'string' || 
                typeof body.password !== 'string' || 
                typeof userId !== 'string' ||
                typeof token !== 'string' ) 
                throw Error('Input parameter not valid')


            return fetch(`${this.url}/user/${userId}`, { 
                body: JSON.stringify(body),
                headers: {
                    "content-type": "application/json",
                    "Authorization": 'Bearer ' + token
                },
                method: 'DELETE'
            })
            .then(resp => resp.json())
            .then(info => info)
        })
    },

    updateUser(body, userId, token){

        return Promise.resolve()
        .then(()=>{

            if (!body) throw Error('Input body not valid')

            if( typeof body.username !== 'string' || 
                typeof body.password !== 'string' || 
                typeof userId !== 'string' ||
                typeof token !== 'string' ) 
                throw Error('Input parameter not valid')

            return fetch(`${this.url}/user/${userId}`, { 
                body: JSON.stringify(body),
                headers: {
                    "content-type": "application/json",
                    "Authorization": 'Bearer ' + token
                },
                method: 'PUT'
            })
            .then(resp => resp.json())
            .then(info => info)
        })
    }

}

export default logic