import React, { Component } from 'react'
import logic from '../../logic'
import { Link } from 'react-router-dom'
import './index.css'
import Navbar from './../navbar'
import Footer from './../footer'

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

                    <ul className="thumbnail">{this.state.categories.map(category => {
                        return (
                            <li key={category._id}>
                                <div className="col-sm-6 col-md-4 products">
                                    <img src="https://dummyimage.com/240x200/000/fff" alt="..." />
                                    <div className="caption">
                                        <h3>{category.name}</h3>
                                        <p>{category.description}</p>
                                        <p><a href="#" className="btn btn-primary" role="button">Button</a></p>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                    </ul>
            <Footer/>
            </main>
        )
    }

}

export default Products