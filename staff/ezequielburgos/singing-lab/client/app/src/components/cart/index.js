import React, { Component } from 'react'
import Footer from '../footer'
import './index.css'
import logic from '../../logic'
import { Link } from 'react-router-dom'

class Cart extends Component {

    constructor() {
        super()
        this.state = {
            cart: [],
            total: []
        }
    }

    componentDidMount() {
        this.getItems()
    }

    getItems = () => {
        if (logic._cart.length && logic._cart !== 'undefined') {
            logic.listProductsByIds()
                .then(cart => this.setState({ cart, total: [] }))
        } else {
            this.setState({ cart: [] })
        }
    }

    onRemoveFromCart = (product) => {
        logic.removeProductFromCart(product)

        this.getItems()
    }

    render() {

        this.state.cart.map(item => this.state.total.push(item.price))

        return (
            <main>
                <section className="main-title my-cart-title">
                    <i className="fas fa-shopping-cart"></i>
                    <span> My Cart</span>
                </section>
                <section className="main-section-cart">
        
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Course</th>
                            <th scope="col">Units available</th>
                            <th scope="col">discount</th>
                            <th scope="col">Price</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cart.map(item => (
                            <tr key={item._id}>
                                <td width="10%"><img className="card-img-top cart-image" src={item.image} alt="course or category" /></td>
                                <td> <h5 className="card-title">{item.name}</h5></td>
                                <td>{item.stock}</td>
                                <td>{item.discount}%</td>
                                <td> <h5 className="card-title">{item.price} €</h5></td>
                                <td><a className="btn btn-outline-secondary" onClick={() => this.onRemoveFromCart(item._id)} role="button">Remove from cart</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {<div className="card text-right total-price-card">
                    <div className="card-body">
                    <h2>Total price</h2>
                        <h2 className="card-title">{this.state.total.length && this.state.total.reduce((accumulator, currentValue) => accumulator + currentValue)}€</h2>
                        <Link to="/order" className="btn btn-outline-secondary" role="button">Buy the products</Link>
                    </div>
                </div>}
                </section>
                <Footer />
            </main>
        )
    }
}

export default Cart