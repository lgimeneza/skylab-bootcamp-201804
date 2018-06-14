import React from "react";
//import './landing.css'
import { Link } from "react-router-dom";
import claqueta from "./images/claqueta.jpg"

function Landing(props) {
  	return (


    <div>
    <div id="wrapper">
	<header id="header-wrapper">
		<div id="header">
			<div id="menu1">
				<ul>
					<li className="menu_link"><a >Homepage</a></li>
					<li className="menu_link"><a >Castings</a></li>
				</ul>
			</div>
			<div id="logo">
				<h1><a >CastMe </a></h1>
				<p>We find you. You find us.</p>
			</div>
			<div id="menu2">
				<ul>
					<li className="menu_link"><a >About</a></li>
					<li className="menu_link"><a >Contact Us</a></li>
				</ul>
			</div>
		</div>
		{/* end #header */} 
	</header>
	<aside id="welcome">
		<h2 className="title"><a >Welcome to CastMe </a></h2>
		<div className="entry">
			<p>This is <strong>CastMe </strong>, a free tool for actors and actresses that want to find a spot in the industry.  <a href="login">Login</a> (or <a href="register">Register</a>) in order to manage your casting, update your profile or promote yourself. We will help you to find the best matches, filtering the results to those that will increase your chances</p>
			<div id="buttons">
                <Link className="link-style" to="/login" >
                    Login
                </Link>
				
                <Link className="link-style" to="/register">
                    Register
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
						<h2 className="title"><a >Latest Castings</a></h2>
						<div className="entry">
							<p><img src={claqueta} alt="" width="225" height="225" className="alignleft" /> Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.</p>
						</div>
					</div>
				</div>
				{/*end #content*/}
				<div className="sidebar">
					<ul>
						<li>
							<h2>Topics</h2>
							<ul>
								<li><a >Film</a></li>
								<li><a >Theatre</a></li>
								<li><a >Singing</a></li>
								<li><a >Dancing</a></li>
								<li><a >Publicity</a></li>
								
							</ul>
						</li>
					</ul>
				</div>
				{/*end #sidebar*/}
				<div style={{clear: 'both'}}>&nbsp;</div>
			</div>
		</div>
	</div>
	{/*end #menu*/}
	<div id="three-columns">
		<div id="column1">
			<h2>New Talents</h2>
			<p>For film. We are looking for new talents in an open casting, whatever your age, whatever your background, come and...</p>
			<p><a  className="link-style">Read More</a></p>
		</div>
		<div id="column2">
			<h2>Much Ado About Nothing</h2>
			<p>For theatre. We need an actress between 20-30 years old to perform in "Much Ado About Nothing", of W. Shakespeare, next season at TNC...</p>
			<p><a  className="link-style">Read More</a></p>
		</div>
		<div id="column3">
			<h2>Leading male</h2>
			<p>For film. Leading role for male actor with singing and dancing notions. Movie to be shot next August between Barcelona and...</p>
			<p><a  className="link-style">Read More</a></p>
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