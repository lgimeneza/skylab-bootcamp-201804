import React, { Component } from 'react'
import logic from '../../logic'
import './index.css'
import Navbar from './../Navbar'
import Footer from './../Footer'
import ListItems from './../ListItems'

class Categories extends Component {

    constructor() {
        super()
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        logic.listCategories()
            .then(categories => this.setState({ categories }))
    }

    render() {
        return (
            <main>
                <Navbar />
                <h2 className="main-title">These are my categories</h2>
                <hr/>

                <ListItems
                    btnShow
                    items={this.state.categories}
                />

                <Footer />
            </main>
        )
    }

}

export default Categories