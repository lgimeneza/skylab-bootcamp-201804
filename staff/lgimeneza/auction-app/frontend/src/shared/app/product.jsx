import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './redux/actions/product'

class Product extends Component {
    static fetchData({ store, params: { id } }) {
        return store.dispatch(actions.getProduct(id));
    }

    state = {
        bid: '',
    }

    componentDidMount = () => {
        const { match: { params: { id } } } = this.props;
        this.props.getProduct(id)
        .then(()=>{
            
            this.setState( { bid: this.props.product.maxBid } )
        })
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();

        //TODO check bid

        const { product, user } = this.props

        if (Object.keys(user).length === 0) {

            this.props.history.push('/login')

        } else {

            const { bid } = this.state

            if (product._id && user._id && bid) {
                this.props.addProductBid(product._id, user._id, bid)
                .then(() => {
                    this.props.getProduct(product._id);
                })
            }

        }

    }

    render() {
        const { product } = this.props
        
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
                    <h3 className="product-price">{product.maxBid}€ </h3>
                    <span className="product-available">Active</span>
                    </div>
                    <p>{product.description}</p>
                    <div className="add-to-cart">
                    <div className="qty-label">
                        Enter your bid 
                        <div className="input-number">
                            <input type="number" name='bid' value={this.bid} onChange={this.handleChange} />
                        <span className="qty-up">+</span>
                        <span className="qty-down">-</span>
                        </div>
                    </div>
                    <button onClick={this.handleSubmit} className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> Submit bid</button>
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
    const { product, user } = state
    return { product, user }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Product);