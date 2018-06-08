import React, { Component } from "react";

import { Link } from "react-router-dom";

function Landing(props) {
  return (


    <div>
    <div id="wrapper">
	<header id="header-wrapper">
		<div id="header">
			<div id="menu1">
				<ul>
					<li className="menu_link"><a href="#">Homepage</a></li>
					<li className="menu_link"><a href="#">Castings</a></li>
				</ul>
			</div>
			<div id="logo">
				<h1><a href="#">CastMe </a></h1>
				<p>We find you. You find us.</p>
			</div>
			<div id="menu2">
				<ul>
					<li className="menu_link"><a href="#">About</a></li>
					<li className="menu_link"><a href="#">Contact Us</a></li>
				</ul>
			</div>
		</div>
		{/* end #header */} 
	</header>
	<aside id="welcome">
		<h2 className="title"><a href="#">Welcome to CastMe </a></h2>
		<div className="entry">
			<p>This is <strong>CastMe </strong>, a free tool for actors and actresses that want to find a spot in the industry.  <a href="login">Login</a> (or <a href="register">Register</a>) in order to manage your casting, update your profile or promote yourself. We will help you to find the best matches, filtering the results to those that will increase your chances</p>
			<div id="buttons">
                <Link to="/login">
                    <button className="link-style">Login</button>
                </Link>
				
                <Link to="/register">
                    <button className="link-style">Register</button>
                </Link>
				
			</div>
		</div>
	</aside>
	
	{/* end #page */}
	<div id="page">
		<div id="page-bgtop">
			<div id="page-bgbtm">
				<div id="content">
					<div className="post">
						<h2 className="title"><a href="#">Latest News</a></h2>
						<div className="entry">
							<p><img src="images/claqueta.png" alt="" width="225" height="225" className="alignleft" /> Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.</p>
						</div>
					</div>
				</div>
				{/*end #content*/}
				<div id="sidebar">
					<ul>
						<li>
							<h2>Topics</h2>
							<ul>
								<li><a href="#">Lilam sucks</a></li>
								<li><a href="#">Eric too</a></li>
								<li><a href="#">Lilam sucks</a></li>
								<li><a href="#">Eric too</a></li>
								<li><a href="#">Lilam sucks</a></li>
								<li><a href="#">Eric too</a></li>
							</ul>
						</li>
					</ul>
				</div>
				{/*end #sidebar*/}
				<div style="clear: both;">&nbsp;</div>
			</div>
		</div>
	</div>
	{/*end #menu*/}
	<div id="three-columns">
		<div id="column1">
			<h2>Casting 1</h2>
			<p>Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.</p>
			<p><a href="#" className="link-style">Read More</a></p>
		</div>
		<div id="column2">
			<h2>Casting 2</h2>
			<p>Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.</p>
			<p><a href="#" className="link-style">Read More</a></p>
		</div>
		<div id="column3">
			<h2>Casting 3</h2>
			<p>Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.</p>
			<p><a href="#" className="link-style">Read More</a></p>
		</div>
	</div>
</div>
<div id="footer">
	<p>&copy; CastMe. All rights reserved.</p>
</div>
</div>
      );
}

export default Landing;