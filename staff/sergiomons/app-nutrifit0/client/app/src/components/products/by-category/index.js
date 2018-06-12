import React, { Component } from 'react'
import logic from '../../logic'
import {Link} from 'react-router-dom'

class Categories extends Component {

    state = {
       categories: [],
       isLogged: false
    }

    componentDidMount() {

        logic.listProductsByCategory()
          .then(categories => {
                this.setState({
                    categories
                })
          })      
    }

   render() {

    return (
        <div>               
           <ul>
               {this.state.categories.map(category => {
                   return (<li key={category.id} className="list-group-item">{category.name}</li>)})}
           </ul>
        </div>
        )
   }       
}

export default Categories