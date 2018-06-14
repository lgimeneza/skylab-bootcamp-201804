import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import { userActions } from './redux/actions/user'
import * as productsActions from './redux/actions/products'
import * as queryActions from './redux/actions/query'

class NavBar extends Component {
    static fetchData() {
	}

	state = {
        query: '',
    }
	
	componentDidMount() {
        this.props.retrieveUser()
	}
	
	handleChange = e => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}
	
	handleSubmit = e => {
		e.preventDefault();

		const { query } = this.state

		this.props.setQuery(query)
		this.props.history.push('/')
	}

	handleHomeLink = e => {
		e.preventDefault();

		this.setState({ query: '' })
		this.props.setQuery('')
		this.props.history.push('/')
	}

    render() {
		const { user } = this.props
        return (
        <div>
        <header>
			{/* <!-- TOP HEADER --> */}
			<div id="top-header">
				<div className="container">
					<ul className="header-links pull-left">
						<li><a href="#"><i className="fa fa-phone"></i> +021-95-51-84</a></li>
						<li><a href="#"><i className="fa fa-envelope-o"></i> email@email.com</a></li>
					</ul>
					<ul className="header-links pull-right">
						<li> 
							<Link to='/profile'><i className="fa fa-user-o"></i> { Object.keys(user).length ? user.name : 'My Account' } </Link> 
						</li>
					</ul>
				</div>
			</div>

			{/* <!-- MAIN HEADER --> */}
			<div id="header">
				<div className="container">
					<div className="row">
						{/* <!-- LOGO --> */}
						<div className="col-md-3">
							<div className="header-logo">
								<a href="#" className="logo">
									<img src="./img/logo.png" alt=""/>
								</a>
							</div>
						</div>

						{/* <!-- SEARCH BAR --> */}
						<div className="col-md-6">
							<div className="header-search">
								<form onSubmit={this.handleSubmit}>
									<input className="input" placeholder="Search here" name='query' value={this.state.query} onChange={this.handleChange}/>
									<button className="search-btn">Search</button>
								</form>
							</div>
						</div>

						{/* <!-- ACCOUNT --> */}
						<div className="col-md-3 clearfix">
							<div className="header-ctn">
								{/* <!-- Wishlist --> */}
								<div>
									<a href="#">
										<i className="fa fa-heart-o"></i>
										<span>Your Wishlist</span>
										<div className="qty">2</div>
									</a>
								</div>

								{/* <!-- Menu Toogle --> */}
								<div className="menu-toggle">
									<a href="#">
										<i className="fa fa-bars"></i>
										<span>Menu</span>
									</a>
								</div>
							</div>
						</div>
						{/* <!-- /ACCOUNT --> */}
					</div>
				</div>
			</div>
		</header>
        {/* <!-- NAVIGATION --> */}
        <nav id="navigation">
            <div className="container">
                <div id="responsive-nav">
                    {/* <!-- NAV --> */}
                    <ul className="main-nav nav navbar-nav">
                        <li><Link to='/' onClick={this.handleHomeLink} >Home</Link></li>
                    </ul>
                    {/* <!-- /NAV --> */}
                </div>
            </div>
        </nav>
        {/* <!-- /NAVIGATION --> */}
        </div>
        );
    }
}
function mapStateToProps(state) {
	const { user } = state
    return { user }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...userActions, ...productsActions, ...queryActions }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(NavBar))