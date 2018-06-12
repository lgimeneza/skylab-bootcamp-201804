import React, { Component } from 'react'
import logic from '../../../logic'

class AllProducts extends Component {

    state = {
       products: [],
    }

    componentDidMount() {

        logic.listProducts()
          .then(products => {
                this.setState({
                    products
                })
          })       
    }

   render() {

    return (       
         
        <div className="col-10 col-lg-10 col-md-8 col-sm-8 col-xs-12">
            <ul>
                <div className="row ml-3">
                    {this.state.products.map(product => {
                    return ( 
                        <div className="col-xl-4 col-lg-6 col-md-11 col-sm-12 col-xs-12" >
                            <div className="card mb-5">
                                <img className="card-img-top" alt={product.name} src={product.image} />
                                <div className="card-block">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">Precio: {product.price} €/und</p>
                                    <p className="card-bottom">
                                        <button className="btn btn-md btn-outline-secondary my-2 my-sm-0 ml-1" type="submit">Detalles</button> 
                                        <button className="btn btn-md btn-outline-dark my-2 my-sm-0 ml-4" type="submit">Añadir al carrito</button>                                                  
                                    </p>
                                </div>
                            </div>
                    </div>
                        )})}
                </div>      
            </ul>
            
        </div>

        )
   }       
}

export default AllProducts