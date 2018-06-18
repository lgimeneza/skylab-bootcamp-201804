import React, { Component } from 'react'
import logic from '../../logic'
import {Link} from 'react-router-dom'
import ItemsCart from '../items-list/items-cart'
import Menu from '../menu'

class Cart extends Component {

    state = {
        cart: [],
        productTotal:"",
        cartTotal:""
     }

     componentDidMount() {
         this.getItems()
     }

     getItems = () => {
        if (logic._cart.length && logic._cart !== 'undefined') {
            logic.listProductsByIds()
                .then(cart => this.setState({ cart }))
        } else {
            this.setState({ cart: [] })
        }
    }

    onRemoveFromCart = (product) => {
        logic.removeProductFromCart(product)
        this.getItems()
    }


    quatitytProduct = e => {
        const value = e.target.value

        this.setState({
            productTotal: value
        })
    }

    render() {
        return (
            <main>
                <div className="container-fluid">
                    <div className="row mt-4">

                        <div className="col-xl-10 col-lg-10 col-md-12">
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
                                        return(
                                    <tr>
                                        <td><img style={{ width: '4rem', height: '2rem' }} src={product.image}/></td>
                                        <td><span style={{ width: '12rem', height: '2rem'}}>{product.name}</span></td>
                                        <td><span>{product.price} €/ud</span></td>
                                        <td><input id="quantity" type="number" min="1" step="1"  defaultValue="1" onChange={this.quatitytProduct} style={{ width: '2.5rem', height: '1.4rem', }}/></td>
                                        <td>
                                            <span>{product.price * this.state.productTotal} €</span>
                                            {console.log('this.state.productTotal: ', this.state.productTotal)}
                                        </td>
                                        <td>
                                            <button onClick={() => logic.removeProductFromCart(product.id)} style={{backgroundColor: "#bb3232", color: "white", cursor: "pointer", height: '1.6rem', }}>X</button>
                                        </td>
                                    </tr>)
                                    })}
                                </tbody>
                                <tfoot>
                                    <tr className="table-active">
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th>Total carrito</th>
                                        <th>30 €</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>

                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-7 col-xs-8 mx-auto">
                            <div class="card">
                                <h5 class="card-header" style={{borderTopLeftRadius: "calc(1rem - 1px)", borderTopRightRadius: "calc(1rem - 1px)"}}>
                                Total Carrito
                                </h5>
                                <div class="card-body">
                                    <p class="card-text" style={{fontSize: "2rem"}}>30 €</p>
                                </div>
                                <div class="card-footer">
                                    <Link to='/order'><button className="btn btn-lg btn-dark my-2 my-sm-0 btn-block mb-3" style={{ border:"1px solid #c6c6c6"}} type="submit">Pagar</button></Link>                                                	
                                </div>
                            </div>                   
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Cart
