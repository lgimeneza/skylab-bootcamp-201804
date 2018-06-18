import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './redux/actions/product'
import openSocket from 'socket.io-client';

import ReactSlick from "react-slick";

var socket

class Product extends Component {
    static fetchData({ store, params: { id } }) {
        return store.dispatch(actions.getProduct(id));
    }

    state = {
        bid: '',
        priceClass:'',
        slickImg: null,
        slickImgs: null,
        nav1: null,
        nav2: null

    }

    componentDidMount = () => {
        const { match: { params: { id } }, product: { maxBid } } = this.props;

        socket = openSocket('http://localhost:5000')
        socket.on('newBid', (productId) => {
            if (id === productId){

                this.props.getProduct(id)
                .then(()=>{
                    this.setState( { bid: maxBid, priceClass: 'bounceInDown' }, () =>{
                        setTimeout(() => this.setState({priceClass: ''}),1000)
                    } )
                })
            }
        })

        socket.on('error', (error) => {
            console.log('socket error')
        })

        this.props.getProduct(id)
        .then(()=>{
            this.setState({ 
                bid: this.props.product.maxBid,
                nav1: this.slider1,
                nav2: this.slider2
             })
        })
    }

    componentWillUnmount = () => {
        socket.close()
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()

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
        const { priceClass } = this.state
        const settingsImgs = {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: 0,
            vertical: true,
            asNavFor: this.state.nav1,
            ref: slider => (this.slider2 = slider)
        }
        const settingsImg = {
            infinite: true,
            speed: 300,
            dots: false,
            arrows: true,
            fade: true,
            asNavFor: this.state.nav2,
            ref: slider => (this.slider1 = slider)
        }

        return (

        <div className="section">
            <div className="container">
            <div className="row">

                <div id='product-main-img' className="product-preview col-md-5 col-md-push-2">

                    <ReactSlick {...settingsImg} >
                        {product.images && product.images.length && product.images.map((image, index) => {
                            return (
                                <img key={index} src={image} alt=''/>
                            )
                        })}
                    </ReactSlick>

                </div>

                <div id='product-imgs' className="col-md-2  col-md-pull-5">

                    <ReactSlick  {...settingsImgs} >
                        {product.images && product.images.length && product.images.map((image, index) => {
                            return (
                                <img key={index} src={image} alt=''/>
                            )
                        })}
                    </ReactSlick>

                </div>

                <div className="col-md-5">
                <div className="product-details">
                    <h2 className="product-name">{product.title}</h2>
                    <div>
                    <h3 className={`product-price animated ${priceClass}`}>{product.maxBid}€ </h3>
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