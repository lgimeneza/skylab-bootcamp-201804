import React, { Component } from 'react'
import logic from '../../logic'
import {Link} from 'react-router-dom'
import Menu from '../menu'
import ItemsList from '../items-list'

class Cart extends Component {

    state = {
        products: []
     }

    componentDidMount() {
       this.getItems()
    }

    getItems = () => {
        logic.listCartById((products) => {this.setState({products})})
    }

    onRemoveItem = (product) => {
        logic.removeProductFromCart(product);

        this.getItems()

    }

   render() {

    return (
        <div className="container-fluid">
        
            <ul>                                  
                <div className="row ml-1">
                    {this.state.products.map(product => (
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12" key={product.id}>
                            <div className="card mb-5">
                                <img className="card-img-top" alt={product.name} src={product.image} />
                                <div className="card-block">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">Precio: {product.price} €/und</p>
                                    <p className="card-bottom">
                                        <Link to={`/product/${product.id}`}><button className="btn btn-md btn-outline-secondary my-2 my-sm-0 ml-1" type="submit">Detalles</button> </Link>
                                        <button className="btn btn-md btn-outline-dark my-2 my-sm-0 ml-4" type="submit" onClick={() => logic.addProductToCart(product.id)}><i id='icon' className="fas fa-shopping-cart mr-2"></i>Añadir al carrito</button>                                                  
                                        <button className="btn btn-md btn-outline-dark my-2 my-sm-0 ml-4" type="submit" onClick={() => this.onRemoveItem(product.id)}><i id='icon' className="fas fa-shopping-cart mr-2"></i>Remove item</button>
                                    </p>
                                </div>
                            </div>
                        </div>))}                               
                    
                </div> 
                    
            </ul>  
        </div>

        )
   }       
}

export default Cart