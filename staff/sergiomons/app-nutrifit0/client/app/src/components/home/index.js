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
                        <div className="row">
                            <div className="col-md-4">
                                <ul>
                                    <li className="list-item">
                                        Lorem ipsum dolor sit amet
                                    </li>
                                    <li className="list-item">
                                        Consectetur adipiscing elit
                                    </li>
                                    <li className="list-item">
                                        Integer molestie lorem at massa
                                    </li>
                                    <li className="list-item">
                                        Facilisis in pretium nisl aliquet
                                    </li>
                                    <li className="list-item">
                                        Nulla volutpat aliquam velit
                                    </li>
                                    <li className="list-item">
                                        Faucibus porta lacus fringilla vel
                                    </li>
                                    <li className="list-item">
                                        Aenean sit amet erat nunc
                                    </li>
                                    <li className="list-item">
                                        Eget porttitor lorem
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul>
                                    <li className="list-item">
                                        Lorem ipsum dolor sit amet
                                    </li>
                                    <li className="list-item">
                                        Consectetur adipiscing elit
                                    </li>
                                    <li className="list-item">
                                        Integer molestie lorem at massa
                                    </li>
                                    <li className="list-item">
                                        Facilisis in pretium nisl aliquet
                                    </li>
                                    <li className="list-item">
                                        Nulla volutpat aliquam velit
                                    </li>
                                    <li className="list-item">
                                        Faucibus porta lacus fringilla vel
                                    </li>
                                    <li className="list-item">
                                        Aenean sit amet erat nunc
                                    </li>
                                    <li className="list-item">
                                        Eget porttitor lorem
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul>
                                    <li className="list-item">
                                        Lorem ipsum dolor sit amet
                                    </li>
                                    <li className="list-item">
                                        Consectetur adipiscing elit
                                    </li>
                                    <li className="list-item">
                                        Integer molestie lorem at massa
                                    </li>
                                    <li className="list-item">
                                        Facilisis in pretium nisl aliquet
                                    </li>
                                    <li className="list-item">
                                        Nulla volutpat aliquam velit
                                    </li>
                                    <li className="list-item">
                                        Faucibus porta lacus fringilla vel
                                    </li>
                                    <li className="list-item">
                                        Aenean sit amet erat nunc
                                    </li>
                                    <li className="list-item">
                                        Eget porttitor lorem
                                    </li>
                                </ul>
                            </div>
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