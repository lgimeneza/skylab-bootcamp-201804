import React, { Component } from 'react'
import logic from '../../../logic'
import {Link} from 'react-router-dom'
import Menu from '../../menu'

class ProductDetails extends Component {

    state = {
        product: {}
     }

    componentDidMount() {

        const productId = this.props.match.params.productId

        logic.productDetails(productId)
          .then(product => {
   
              
                this.setState({
                    product: product[0]
                })
          })      
    }

   render() {

    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <Menu />
                    <div className="col-10 col-lg-10 col-md-8 col-sm-12 col-xs-12">
                    <div className="row h-100">
                        <div className="col-lg-5 col-md-10 col-sm-12 col-xs-12 ml-1 mr-1 mb-3">
                            <img className="w-100 h-80" style={{ height: "25rem" }}alt={this.state.product.name} src={this.state.product.image} />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-3 ml-3">
                            <dl>
                                <dt>
                                    Este producto está compuesto: 
                                </dt>
                                <dd>
                                    {this.state.product.name}
                                    
                                </dd>
                                <dt>
                                    Euismod
                                </dt>
                                <dd>
                                    Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.
                                </dd>
                                <dd>
                                    Donec id elit non mi porta gravida at eget metus.
                                </dd>
                                <dt>
                                    Malesuada porta
                                </dt>
                                <dd>
                                    Etiam porta sem malesuada magna mollis euismod.
                                </dd>
                                <dt>
                                    Felis euismod semper eget lacinia
                                </dt>
                                <dd>
                                    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                                </dd>
                            </dl>
                        </div>

                    </div>
                    </div>
                
            </div>
                        <button className="btn btn-md btn-outline-dark my-2 my-sm-0 ml-4" type="submit" onClick={() => logic.addProductToCart(this.props.match.params.productId)}>Añadir al carrito</button>                                                  
                        <Link to='/cart'><button className="btn btn-md btn-outline-secondary my-2 my-sm-0 ml-4">Ir al carrito</button> <i id="iconNav" className="fas fa-shopping-cart mr-4"><span id="numBadget" className="badge badge-pill badge-danger">{logic._cart.length}</span>Ir al carrito</i></Link>     
       </div>
        )
   }       
}

export default ProductDetails