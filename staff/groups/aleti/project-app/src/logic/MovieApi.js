const MovieApi = {

    url: 'http://api.themoviedb.org/3',
    key: 'c9e81d7384a0e7aa9d0deecb8c80c2cc',

    
    getTvPopular(){
        return Promise.resolve()
        .then(()=>{

            return  fetch(`${this.url}/tv/popular?api_key=${this.key}&language=en-US&page=1`)
            .then(resp => resp.json())
            .then(info => console.log(info))
        })
    },
    
    getMoviesPopular(){
        return Promise.resolve()
        .then(()=>{

            return  fetch(`${this.url}/movie/popular?api_key=${this.key}&language=en-US&page=1`)
            .then(resp => resp.json())
            .then(info => console.log(info))
        })
    },

    searchMulti(query){
        return Promise.resolve()
        .then(()=>{

            return  fetch(`${this.url}/search/multi?api_key=${this.key}&query=${query}&language=en-US&page=1&include_adult=false`)
            .then(resp => resp.json())
            .then(info => console.log(info))
        })
    }

}

export default MovieApi