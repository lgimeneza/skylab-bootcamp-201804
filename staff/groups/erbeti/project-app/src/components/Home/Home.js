import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'
import logic from '../../logic'
import CharacterSearch from './CharacterSearch'

class Home extends Component {

    state= {
        query: "",
        list: []
    }

    keepQuery=(e)=>{
        const query= e.target.value
        this.setState({query})

    }

    getList=(e) =>{
        e.preventDefault()
        

        logic.fetchCharacters(this.state.query)
        .then(resp => this.setState({
            list: resp,
            query: ''
        }))
        



    }

    render () {
      
        return(
        <div>
            <div>
                <Link to="/profile">
                    <button>Profile</button>
                </Link>
            </div>
            <p>Bienvenidos</p>
            <p>la "home"</p>

            <form onSubmit={this.getList}>
                <input type="text" onChange={this.keepQuery} value={this.state.query}/>
                <button type="submit">Search Character</button>
            </form>

             <CharacterSearch list={this.state.list} />

        </div>

        )
        
    }

}

export default withRouter(Home)