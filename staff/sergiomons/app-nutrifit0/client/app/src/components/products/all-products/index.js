import React, { Component } from 'react'
import logic from '../../../logic'
import ItemsProducts from '../../items-list/items-products'

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
            <div className="row mt-4 mb-2">
                <div className="col-2 col-lg-2 col-md-10 col-sm-8 col-xs-12">   
            </div>
            <div className="col-10 col-lg-10 col-md-12 col-sm-12 col-xs-12">   
                <h1 className="card-title" style={{backgroundColor: "#babcbe", color:"#555c63", fontSize: "1.5rem", fontWeight: "bold"}}>Nuestros Productos</h1>
            </div>
                <div>
                    <div className="row">   
                        <ItemsProducts products={this.state.products} onAddToCart={this.props.onAddToCart}/>
                    </div> 
                </div>  
            </div>      
               
        )
   }       
}

export default AllProducts