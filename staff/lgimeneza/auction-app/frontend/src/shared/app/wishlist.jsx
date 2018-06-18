import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './redux/actions/products'

class Wishlist extends Component {

    static fetchData({ store }) {
        //return store.dispatch(actions.getProducts());
    }
    
    componentDidMount() {
        //this.props.getProducts(this.props.query)

    }
    
    onProductClickHandler = id => e => {
        e.preventDefault()
        //this.props.history.push(`/product/${id}`)
    }

    render() {
    return (
    <div className="container">

        <div className="row row-pb-md">
            <div className="col-md-10 col-md-offset-1">

                <div className="product-name">
                    <div className="one-forth text-center">
                        <span>Product Details</span>
                    </div>
                    <div className="one-eight text-center">
                        <span>Price</span>
                    </div>
                    <div className="one-eight text-center">
                        <span>Quantity</span>
                    </div>
                    <div className="one-eight text-center">
                        <span>Total</span>
                    </div>
                    <div className="one-eight text-center">
                        <span>Remove</span>
                    </div>
                </div>



                <div className="product-cart">
                    <div className="one-forth">
                        <div className="product-img" style="background-image: url(images/item-6.jpg);">
                        </div>
                        <div className="display-tc">
                            <h3>Product Name</h3>
                        </div>
                    </div>
                    <div className="one-eight text-center">
                        <div className="display-tc">
                            <span className="price">$68.00</span>
                        </div>
                    </div>
                    <div className="one-eight text-center">
                        <div className="display-tc">
                            <input type="text" id="quantity" name="quantity" className="form-control input-number text-center" value="1" min="1" max="100" />
                        </div>
                    </div>
                    <div className="one-eight text-center">
                        <div className="display-tc">
                            <span className="price">$120.00</span>
                        </div>
                    </div>
                    <div className="one-eight text-center">
                        <div className="display-tc">
                            <a href="#" className="closed"></a>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    </div>
    
    )}
}

function mapStateToProps(state) {
    //const { products, query } = state
    //return { products, query }
}
function mapDispatchToProps(dispatch) {
    //return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Wishlist);