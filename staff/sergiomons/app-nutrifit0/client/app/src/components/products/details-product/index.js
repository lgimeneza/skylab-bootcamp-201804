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
                    <div className="col-10 col-lg-10 col-md-8 col-sm-8 col-xs-12">
                    <div className="row ">
                        <div className="col-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mr-4 mb-5">
                            <img alt="Bootstrap Image Preview" src={this.state.product.image} />
                        </div>
                        <div className="col-7 col-lg-7 col-md-12 col-sm-12 col-xs-12">
                            <dl>
                                <dt>
                                    {this.state.product.name}
                                </dt>
                                <dd>
                                    A description list is perfect for defining terms.
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
                        <button className="btn btn-md btn-outline-dark my-2 my-sm-0 ml-4" type="submit" onClick={() => logic.addProductToCart(this.props.match.params.productId)}><i id='icon' className="fas fa-shopping-cart mr-2"></i>Añadir al carrito</button>                                                  

                    </div>
                    </div>
                
            </div>
        </div>
        )
   }       
}

export default ProductDetails