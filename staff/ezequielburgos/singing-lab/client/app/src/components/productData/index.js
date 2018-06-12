import React, { Component } from 'react'
import logic from '../../logic'
import './index.css'
import Navbar from './../navbar'
import Footer from './../footer'

class ProductData extends Component {

    constructor() {
        super()
        this.state = {
            product: []
        }
    }

    componentDidMount() {

        logic.retrieveProduct(this.props.match.params.id)
            .then(product => this.setState({ product }))
    }

    render() {
        return (
            <main>
                <Navbar />
                <h2 className="main-title">this is the product</h2>

                <ul className="thumbnail">
                    <li key={this.state.product._id}>
                        <div className="col-sm-6 col-md-4 products">
                            <img src={this.state.product.image} alt="bruno mars" width="240px" height="200px" />
                            <div className="caption">
                                <h3>{this.state.product.name}</h3>
                                <p>{this.state.product.description}</p>
                            </div>
                        </div>
                    </li>
                </ul>

                <Footer />
            </main>
        )
    }

}

export default ProductData