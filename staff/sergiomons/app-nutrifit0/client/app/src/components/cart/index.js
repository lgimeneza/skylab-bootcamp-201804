import React, { Component } from 'react'
import logic from '../../logic'
import { Link } from 'react-router-dom'
import Order from '../order'

class Cart extends Component {

    state = {
        cart: [],
        productTotal: "",
        totalCart: [],
    }

    componentDidMount() {
        this.getItems()
    }

    getItems = () => {

            if (logic._cart.length && logic._cart !== 'undefined') {
                logic.listProductsFromCart()
                    .then(products => this.setState({ cart: products, totalCart: [] }))
            } else {
                this.setState({ cart: [],  totalCart: []})
            }
    }

    onRemoveFromCart = (product) => {
        logic.removeProductFromCart(product)
        return this.getItems()
    }

    getTotalCart = () => {

        return this.state.cart.length ? this.state.totalCart.reduce((accum, current) => { return accum + current }) : "0"
    }

    changeQuantity = () => {
        
    }

    render() {
        this.state.cart.map(product => { this.state.totalCart.push(product.price * product.quantity) })
        return (
            <main>
                <div className="container-fluid">
                    <div className="row mt-4">

                        <div className="col-xl-10 col-lg-9 col-md-12 col-sm-12 col-xs-12">
                            <table className="table">
                                <thead>
                                    <tr className="table-active">
                                        <th>#</th>
                                        <th>Artículo</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th>Total</th>
                                        <th>Borrar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.cart.map(product => {
                                        return (
                                            <tr key={product.id}>
                                                <td><img style={{ width: '3.5rem', height: '2rem' }} src={product.image} /></td>
                                                <td><span style={{ width: '12rem', height: '2rem' }}>{product.name}</span></td>
                                                <td><span>{product.price} €/ud</span></td>
                                                <td><input id="quantity" type="number" min="1" step="1" value={product.quantity} onChange={this.changeQuantity}style={{ width: '2.5rem', height: '1.4rem', }} /></td>
                                                <td> <span>{product.price * product.quantity} €</span></td>
                                                <td><button onClick={() => this.onRemoveFromCart(product.id)} style={{ backgroundColor: "#bb3232", color: "white", cursor: "pointer", height: '1.6rem' }}>X</button></td>
                                            </tr>)
                                    })}
                                </tbody>
                                <tfoot>
                                    <tr className="table-active">
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th>Total carrito</th>
                                        <th>{this.getTotalCart()} €</th>
                                    </tr>
                                </tfoot>
                            </table>

                        </div>

                        <div className="col-xl-2 col-lg-3 col-md-6 col-sm-7 col-xs-8 mx-auto mb-4">
                            <div className="card">
                                <h5 className="card-header" style={{ borderTopLeftRadius: "calc(1rem - 1px)", borderTopRightRadius: "calc(1rem - 1px)" }}>Total Carrito</h5>
                                <div className="card-body">
                                    <p className="card-text" style={{ fontSize: "2rem" }}>{this.getTotalCart()} €</p>
                                </div>
                                <div className="card-footer">
                                    <Link to='/order'><button className="btn btn-lg btn-dark my-2 my-sm-0 btn-block mb-3" style={{ border: "1px solid #c6c6c6" }} type="submit">Pagar</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to='/'><button className="btn btn-md btn-secondary mt-1 mb-3 mx-auto" style={{ border: "1px solid #c6c6c6" }} type="submit">Seguir comprando</button></Link>
                </div>
            </main>
        )
    }
}

export default Cart
