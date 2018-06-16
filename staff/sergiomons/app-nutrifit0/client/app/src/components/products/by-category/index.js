import React, { Component } from 'react'
import logic from '../../../logic'
import {Link} from 'react-router-dom'
import ItemsList from '../../items-list'
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

    componentWillReceiveProps(props) {

        const categoryId = props.match.params.categoryId

        logic.listProductsByCategory(categoryId)
          .then(products => {
                this.setState({
                    products
                })
          })      
    }

   render() {

    return (
        <div>
            <ItemsList products={this.state.products}/>                                   
        </div>  
    )
   }       
}

export default ProductsByCategory