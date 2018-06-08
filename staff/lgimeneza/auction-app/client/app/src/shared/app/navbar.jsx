import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    static fetchData() {
    }
    render() {
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
						<li><a href="#"><i className="fa fa-user-o"></i> My Account</a></li>
					</ul>
				</div>
			</div>
			{/* <!-- /TOP HEADER --> */}

			{/* <!-- MAIN HEADER --> */}
			<div id="header">
				{/* <!-- container --> */}
				<div className="container">
					{/* <!-- row --> */}
					<div className="row">
						{/* <!-- LOGO --> */}
						<div className="col-md-3">
							<div className="header-logo">
								<a href="#" className="logo">
									<img src="./img/logo.png" alt=""/>
								</a>
							</div>
						</div>
						{/* <!-- /LOGO --> */}

						{/* <!-- SEARCH BAR --> */}
						<div className="col-md-6">
							<div className="header-search">
								<form>
									<input className="input" placeholder="Search here"/>
									<button className="search-btn">Search</button>
								</form>
							</div>
						</div>
						{/* <!-- /SEARCH BAR --> */}

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
								{/* <!-- /Wishlist --> */}

								{/* <!-- Menu Toogle --> */}
								<div className="menu-toggle">
									<a href="#">
										<i className="fa fa-bars"></i>
										<span>Menu</span>
									</a>
								</div>
								{/* <!-- /Menu Toogle --> */}
							</div>
						</div>
						{/* <!-- /ACCOUNT --> */}
					</div>
					{/* <!-- row --> */}
				</div>
				{/* <!-- container --> */}
			</div>
			{/* <!-- /MAIN HEADER --> */}
		</header>
        {/* <!-- NAVIGATION --> */}
        <nav id="navigation">
            {/* <!-- container --> */}
            <div className="container">
                {/* <!-- responsive-nav --> */}
                <div id="responsive-nav">
                    {/* <!-- NAV --> */}
                    <ul className="main-nav nav navbar-nav">
                        <li><Link to='/'>Home</Link></li>
                    </ul>
                    {/* <!-- /NAV --> */}
                </div>
                {/* <!-- /responsive-nav --> */}
            </div>
            {/* <!-- /container --> */}
        </nav>
        {/* <!-- /NAVIGATION --> */}
        </div>
        );
    }
}
export default Home;