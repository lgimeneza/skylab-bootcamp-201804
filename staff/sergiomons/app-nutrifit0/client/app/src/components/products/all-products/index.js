import React, { Component } from 'react'
import logic from '../../../logic'
import Menu from '../../menu'
import Carousel from '../../carousel'
import ItemsProducts from '../../items-list/items-products'

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
            <ItemsProducts products={this.state.products} />
        </div>             

        )
   }       
}

export default AllProducts