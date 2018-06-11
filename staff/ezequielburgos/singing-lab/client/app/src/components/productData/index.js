import React, { Component } from 'react'
import logic from '../../logic'
import './index.css'
import Navbar from './../navbar'
import Footer from './../footer'
import ListItems from './../ListItems'

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

                <ListItems
                    items={this.state.product}
                />

                <Footer />
            </main>
        )
    }

}

export default ProductData