import React, { Component } from 'react'
import logic from '../../logic'
import {Link} from 'react-router-dom'
import './index.css'
import Menu from '../menu'
import Carousel from '../carousel'
import AllProducts from '../products/all-products';

class Home extends Component {

    state = {

       products: [],

    }

    // componentDidMount() {
    //     logic.listProducts()
    //       .then(products => {
    //             this.setState({
    //                 products
    //             })
    //       })      
    // }

   render() {

        return (
            <div>
                <AllProducts/>
            </div>    
        )   
    }
}

export default Home