import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from './redux/actions/product-actions'

class Product extends Component {
    static fetchData({ store, params: { id } }) {
        return store.dispatch(actions.getProduct(id));
    }
    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        this.props.getProduct(id);
    }
    render() {
        const { match: { params }, product } = this.props;
        return (

        <div className="section">
            <div className="container">
            <div className="row">
                <div className="col-md-5 col-md-push-2">
                <div id="product-main-img">
                    <div className="product-preview">
                    <img src={'/dist/assets/' + product.image} alt=''/>
                    </div>
                </div>
                </div>
                <div className="col-md-2  col-md-pull-5">
                <div id="product-imgs">
                    <div className="product-preview">
                    <img src="/dist/assets/images/product01.png" alt='' />
                    </div>
                    <div className="product-preview">
                    <img src="/dist/assets/images/product03.png" alt='' />
                    </div>
                    <div className="product-preview">
                    <img src="/dist/assets/images/product08.png" alt='' />
                    </div>
                    <div className="product-preview">
                    <img src="/dist/assets/images/product06.png" alt='' />
                    </div>
                </div>
                </div>
                <div className="col-md-5">
                <div className="product-details">
                    <h2 className="product-name">{product.title}</h2>
                    <div>
                    <h3 className="product-price">{product.startPrice}€ </h3>
                    <span className="product-available">Active</span>
                    </div>
                    <p>{product.description}</p>
                    <div className="add-to-cart">
                    <div className="qty-label">
                        Enter your bid 
                        <div className="input-number">
                        <input type="number" value={product.startPrice} />
                        <span className="qty-up">+</span>
                        <span className="qty-down">-</span>
                        </div>
                    </div>
                    <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> Submit bid</button>
                    </div>
                    <ul className="product-links">
                    <li>Share:</li>
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                    <li><a href="#"><i className="fa fa-envelope" /></a></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        )
    }}

function mapStateToProps(state) {
    return {
        ...state.product,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Product);