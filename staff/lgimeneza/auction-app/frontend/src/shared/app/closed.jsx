import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './redux/actions/products'

class Closed extends Component {

    static fetchData({ store }) {
        return store.dispatch(actions.getProducts());
    }
    
    componentDidMount() {
        this.props.getProducts(this.props.query)
    }
    
    onProductClickHandler = id => e => {
        e.preventDefault()
        this.props.history.push(`/product/${id}`)
    }

    render() {
    const { products } = this.props
    return (
        <div>
        <div id="store" className="col-md-12">
            <div className="row">
                {products.map((product) => {
                    return (
                    <div className="col-xs-12 col-sm-6 col-md-3 " key={product._id} onClick={this.onProductClickHandler(product._id)}> 
                        <div className="product">
                            <div className="product-img">
                                <img src={product.image} alt=""/>
                            </div>
                            <div className="product-body">
                                <h3 className="product-name"><a href="#">{product.title}</a></h3>
                                <h4 className="product-price">{product.maxBid}€</h4>
                                <div className="product-rating"/>
                                <button type="button" className="primary-btn">Make offer</button>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
        </div>
    )}
}

function mapStateToProps(state) {
    const { products, query } = state
    return { products, query }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Closed);