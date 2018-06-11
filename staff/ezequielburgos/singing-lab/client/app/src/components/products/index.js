import React, { Component } from 'react'
import logic from '../../logic'
import './index.css'
import Navbar from './../navbar'
import Footer from './../footer'
import ListItems from './../ListItems'

class Products extends Component {

    constructor() {
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
        logic.listProducts(this.props.match.params.id)
            .then(products => this.setState({ products }))
    }

    render() {
        return (
            <main>
                <Navbar />
                <h2 className="main-title">These are my products</h2>

                <ListItems
                    items={this.state.products}
                />

                <Footer />
            </main>
        )
    }

}

export default Products