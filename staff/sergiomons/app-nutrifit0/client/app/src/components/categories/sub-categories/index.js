import React, { Component } from 'react'
import logic from '../../../logic'
import {Link} from 'react-router-dom'
import './index.css'
import Nav from '../../nav'

class Subcategories extends Component {

    state = {
       subcategories: [],
       isLogged: false
    }

    componentDidMount() {
        logic.listSubcategories()
          .then(subcategories => {
                this.setState({
                    subcategories
                })
          })        
    }

   render() {

    return (
        <div>        
           <Nav />     
           <ul>
               {this.state.subcategories.map(subcategory => {
                   return (<li key={subcategory.id} className="list-group-item">{subcategory.name}</li>)})}
           </ul>
        </div>
        )
   }       
}

export default Subcategories