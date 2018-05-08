

const logic={
    url: "https://skylabcoders.herokuapp.com/api",



    registerUser( username, password, mail){

        return Promise.resolve()
        .then(()=> {
            if (arguments.length<3) throw (Error("There is a missing field"))

            // if ( typeof username !== "string" )

            let headers= {}
            headers.headers= {'Content-Type': 'application/json'}
            headers.method="POST"
            headers.body=JSON.stringify(
            {
                
                username,
                password,
                mail

            })


            return fetch(`${this.url}/user`, headers)
                .then(resp => resp.json())
                .then(resp => {
                    if (resp.status === 'KO'){
                        throw Error(resp.error)
                    }
                })
          
        })
    },

    loginUser(username, password){

        return Promise.resolve()
        .then(()=>{
            let headers= {}
            headers.headers= {'Content-Type': 'application/json'}
            headers.method="POST"
            headers.body=JSON.stringify(
            {
                
                username,
                password

            })


            return fetch(`${this.url}/auth`, headers)
                .then(resp => resp.json())
                .then(resp => {
                    if (resp.status === 'KO'){
                        throw Error(resp.error)
                    }
                })
                
                
          
        })
    },

    retrieveInfo(id, token){
        
        let headers={

           headers: {Authorization:`Bearer ${token}`}
        }
       
        return fetch(`${this.url}/user/${id}`, headers)
        .then(resp => resp.json())
        .then(resp => {
            if (resp.status === 'KO'){
                throw Error(resp.error)
            }
        })

        
    },

    updateInfo(id,body,token){

        let headers= {}

        headers.method="PUT"
        headers.body= JSON.stringify(body)
        headers.headers= {Authorization:`Bearer ${token}`,'Content-Type': 'application/json'}
        

        return fetch(`${this.url}/user/${id}`, headers)
            .then(resp => resp.json())
            .then(resp => {
                if (resp.status === 'KO'){
                    throw Error(resp.error)
                }
            })
      

    },

    unregisterUser(id, body,token){

        let headers={}
        headers.method="DELETE"
        headers.body= JSON.stringify(body)
        headers.headers= {Authorization:`Bearer ${token}`,'Content-Type': 'application/json'}
        // headers.body= JSON.stringify(body)

        return fetch(`${this.url}/user/${id}`, headers)
        .then (resp=>resp.json())
        .then(resp => {
            if (resp.status === 'KO'){
                throw Error(resp.error)
            }
        })
    }
}


export default logic