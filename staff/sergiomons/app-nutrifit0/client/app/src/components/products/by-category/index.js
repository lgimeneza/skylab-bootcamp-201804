import React, { Component } from 'react'
import logic from '../../../logic'
import {Link} from 'react-router-dom'
import ItemsProducts from '../items-products'

class ProductsByCategory extends Component {

    componentDidMount() {

        const categoryId = this.props.match.params.categoryId

        logic.listProductsByCategory(categoryId )
          .then(products => {
                this.setState({
                    products
                })
          })      
    }

   render() {

    return (
        <ItemsProducts/>
    )
   }       
}

export default ProductsByCategory