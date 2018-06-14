import React, { Component } from 'react'
import logic from '../../logic'
import './index.css'
import Navbar from './../navbar'
import Footer from './../footer'
import ListItems from './../list-items'

class Products extends Component {

    constructor() {
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        logic.listProducts(this.props.match.params.id)
            .then(products => this.setState({ products }))
    }

    render() {
        return (
            <main>
                <Navbar />
                <h2 className="main-title">These are my products</h2>

                <ListItems
                    productDetail
                    items={this.state.products}
                />

                <Footer />
            </main>
        )
    }

}

export default Products