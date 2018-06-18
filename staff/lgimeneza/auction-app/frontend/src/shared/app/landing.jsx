import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './redux/actions/products'
import Countdown from './countdown.jsx'

import Nouislider from 'react-nouislider'
import Categories from './categories.jsx'

class Landing extends Component {

    static fetchData({ store }) {
        return store.dispatch(actions.getProducts())
    }

    state = {
        range: [0, 3000],
        priceMin: 0,
        priceMax: 3000,
    }
    
    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search)
        const q = params.get('q') || ''
        //const categories = params.get('c') || ''
        //this.props.getProducts(this.props.query)
        this.props.getProducts(q)
    }
    
    onProductClickHandler = id => e => {
        e.preventDefault()
        this.props.history.push(`/product/${id}`)
    }

    handleChange = e => {
        let { name, value } = e.target;

        name === 'priceMin' && value > this.state.range[1] && (value = this.state.range[1])
        name === 'priceMin' && value < this.state.range[0] && (value = this.state.range[0])
        name === 'priceMax' && value > this.state.range[1] && (value = this.state.range[1])
        name === 'priceMax' && value < this.state.range[0] && (value = this.state.range[0])

        this.setState({ [name]: Math.round(value) });
    }

    render() {
    const { products } = this.props
    return (
        <div>
            {/* --- SECTION --- */}
            <section className="section">
                <div className="container">

					{/* --- ASIDE --- */}
					<aside id="aside" className="col-md-3">


                        <Categories />

						<div className="aside">
							<h3 className="aside-title">Price</h3>
							<div className="price-filter">

								<div id="price-slider">
                                    <Nouislider range={{ min: this.state.range[0], max: this.state.range[1] }} start={[this.state.priceMin, this.state.priceMax]} connect={true} 
                                        onChange={(values) =>  {

                                            this.setState({ priceMin: Math.round(values[0]), priceMax: Math.round(values[1]) })

                                        } } />
                                </div>

								<div className="input-number price-min">
									<input id="price-min" type="number" name='priceMin' value={this.state.priceMin} onChange={this.handleChange}/>
									<span className="qty-up" onClick={() => this.state.priceMin < this.state.range[1] && this.setState({ priceMin:this.state.priceMin +10 })}>+</span>
									<span className="qty-down" onClick={() => this.state.priceMin > this.state.range[0] && this.setState({ priceMin:this.state.priceMin -10 })}>-</span>
								</div>

								<span>-</span>

								<div className="input-number price-max">
									<input id="price-max" type="number" name='priceMax' value={this.state.priceMax} onChange={this.handleChange}/>
									<span className="qty-up" onClick={() => this.state.priceMax < this.state.range[1] && this.setState({ priceMax:this.state.priceMax +10 })}>+</span>
									<span className="qty-down" onClick={() => this.state.priceMax > this.state.range[0] && this.setState({ priceMax:this.state.priceMax -10 })}>-</span>
								</div>

							</div>
						</div>


					</aside>

                    {/* --- STORE --- */}
                    <div id="store" className="col-md-9">
                        <div className="row">
                            { products.length ? products.map((product) => {
                                return (
                                <div className="col-xs-6 col-sm-4 col-md-4 " key={product._id} onClick={this.onProductClickHandler(product._id)}> 
                                    <div className="product">
                                        <div className="product-img">
                                            <img src={product.images[0]} alt=""/>
                                            <div className="product-label">
                                                <Countdown date={product.endDate} />
                                                <span className="new">NEW</span>
                                            </div>
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
                            }): <span>loading...</span>}
                        </div>
                    </div>

                </div>
            </section>
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

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Landing)