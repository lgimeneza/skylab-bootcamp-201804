import React, { Component } from 'react'
import logic from '../../../logic'
import {Link} from 'react-router-dom'
import ItemsProducts from '../../items-list/items-products'
import {Animated} from "react-animated-css";


class ProductsByCategory extends Component {

    state = {
        products: []
     }

    componentDidMount() {

        const categoryId = this.props.match.params.categoryId

        logic.listProductsByCategory(categoryId)
          .then(products => {
                this.setState({
                    products
                })
          })      
    }

    componentDidUpdate(prevProps) {

        const categoryId = this.props.match.params.categoryId

        if(prevProps.match.params.categoryId!== categoryId){

        logic.listProductsByCategory(categoryId)
          .then(products => {
                this.setState({
                    products
                })
          })      
        }    
    }

   render() {

    return (
        <div>
            <ItemsProducts products={this.state.products}/>                                   
        </div>  
    )
   }       
}

export default ProductsByCategory