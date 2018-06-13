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
       isLogged: false
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
            <main>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Carousel/>
                        
                        <div className="row">
                            <Menu />

                            <AllProducts/>
                        </div>
                        
                    </div>
                </div>
            </div>                        
           </main>
        </div>
        )
   }       
}

export default Home