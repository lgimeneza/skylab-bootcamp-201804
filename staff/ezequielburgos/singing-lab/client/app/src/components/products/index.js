import React, { Component } from 'react'
import Footer from '../footer'
import logic from '../../logic'
import './index.css'
import ListItems from './../list-items'

class Products extends Component {

    constructor() {
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        logic.listProducts(this.props.categoryId)
            .then(products => this.setState({ products }))
    }

    componentDidUpdate(prevProps) {
        if(prevProps.categoryId !== this.props.categoryId){
            logic.listProducts(this.props.categoryId)
                .then(products => this.setState({ products }))   
        }
    }

    render() {
        return (

            <main>
                <h2 className="main-title">These are my products</h2>
                <ListItems
                    productDetail
                    cartProducts
                    items={this.state.products}
                    onAddToCart={this.props.onAddToCart}
                />
                <Footer />
            </main>
        )
    }

}

export default Products