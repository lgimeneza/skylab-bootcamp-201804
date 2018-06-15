import React, { Component } from 'react'
import logic from '../../../logic'
import Menu from '../../menu'
import Carousel from '../../carousel'
import ItemsList from '../../items-list'

class AllProducts extends Component {

    state = {
        products: [],
     }
 
     componentDidMount() {
 
         logic.listProducts()
           .then(products => {
                 this.setState({
                     products
                 })
           })       
     }
    
   render() {

    return (          
        <div>
            <ItemsList products={this.state.products} />
        </div>             

        )
   }       
}

export default AllProducts