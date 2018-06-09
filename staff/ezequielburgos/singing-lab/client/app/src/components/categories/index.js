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
            categories: []
        }
    }

    componentDidMount() {
        document.body.style.background = 'white'

        logic.listCategories()
            .then(categories => this.setState({ categories }))
    }

    render() {
        return (
            <main>
                <Navbar />
                <h2 className="main-title">These are my categories</h2>

                <ListItems
                    btnShow
                    items={this.state.categories}
                />

                <Footer />
            </main>
        )
    }

}

export default Products