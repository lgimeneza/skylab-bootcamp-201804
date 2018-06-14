import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logic from '../../../logic'
import './index.css'


class LandingProducts extends Component {

    constructor() {
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        // TODO

        logic.listAllProducts()
            .then(products => {
                this.setState({ products })
            })
    }

    render() {

        return (
            <main>
                {this.state.products.length > 0 &&
                    <div className="landing-products-body">
                    <h1>Our top products</h1>
                    <section className="landing-products">
                        <div className="card landing-card-container">
                            <img className="card-img-top" src={`${this.state.products[0].image}`} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">{this.state.products[0].name}</h5>
                                {<p><Link to={`/categories/products/${this.state.products[0]._id}`} className="btn btn-primary list-button" role="button">product details</Link></p>}
                            </div>
                        </div>
                        <div className="card landing-card-container">
                            <img className="card-img-top" src={`${this.state.products[1].image}`} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">{this.state.products[1].name}</h5>
                                {<p><Link to={`/categories/products/${this.state.products[1]._id}`} className="btn btn-primary list-button" role="button">product details</Link></p>}
                            </div>
                        </div>
                        <div className="card landing-card-container">
                            <img className="card-img-top" src={`${this.state.products[2].image}`} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">{this.state.products[2].name}</h5>
                                {<p><Link to={`/categories/products/${this.state.products[2]._id}`} className="btn btn-primary list-button" role="button">product details</Link></p>}
                            </div>
                        </div>
                    </section>
                        </div>
                }

            </main>
        )
    }

}

export default LandingProducts