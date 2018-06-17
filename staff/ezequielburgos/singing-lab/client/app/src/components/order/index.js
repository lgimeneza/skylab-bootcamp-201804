import React, { Component } from 'react'
import Footer from '../footer'
import './index.css'
import logic from '../../logic'


class Cart extends Component {

    constructor() {
        super()
        this.state = {
            cart: []
        }
    }

    componentDidMount() {
        this.getItems()
    }

    getItems = () => {
        if (logic._cart.length && logic._cart !== 'undefined') {
            logic.listProductsByIds()
                .then(cart => this.setState({ cart }))
        }else{
            this.setState({ cart: [] })
        }
    }

    // onRemoveFromCart = (product) => {
    //     logic.removeProductFromCart(product)
    //     this.getItems()
    // }

    render() {
        return (
            <main>
                <h2 className="main-title">this is the order</h2>

                <ul className="listitems-body">
                    <div className="thumbnail listitems-subbody">
                        {this.state.cart.map(item => (
                            <li key={item._id} className="items">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img className="card-img-top" src={item.image} alt="course or category" />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                        </div>
                                    </div>
                            </li>
                        ))}
                        {/* <a className="btn btn-outline-secondary" onClick={() => this.onRemoveFromCart(item._id)} role="button">Remove from cart</a> */}
                    </div>
                </ul>

                <Footer />
            </main>
        )
    }
}

export default Cart