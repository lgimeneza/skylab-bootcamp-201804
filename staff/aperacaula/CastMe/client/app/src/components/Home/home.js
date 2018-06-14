import React,{Component} from "react";
//import { Link } from "react-router-dom";
import claqueta from "./images/claqueta.jpg"
import logic from "../../logic"
import './home.css'

class Home extends Component {

	state={
		name:'',
		surname:'',
		profilePicture: '',
		applications: '',
	}

	

	componentDidMount(){

		if(!logic.userId) this.props.history.push('/')
		if (this.props.match.params !== logic.userId){
			this.props.history.push(`/home/${logic.userId}`)
		}
		logic.retrieveUserLite(logic.userId)
			.then(({name,surname, profilePicture, applications})=>{
				
				this.setState({
					name,
					surname,
					profilePicture,
					applications
	
				})
				
				
			})
		
		// if (this.props.onCorrectingRoute(this.props.params.userId) ){
		// 	console.log('si')
		// 	logic.retrieveUserLite(logic.userId)
		// 	.then(({name,surname, profilePicture, applications})=>{
				
		// 		this.setState({
		// 			name,
		// 			surname,
		// 			profilePicture,
		// 			applications
	
		// 		})
				
				
		// 	})
		// }
		
	}

	render(){

		return (
		<div>
		<div id="wrapper-login">
		<header id="header-wrapper-login">
			<div id="header-login">
				<div id="menu1-login">
					<ul>
						<li className="menu_link"><a >Homepage</a></li>
						<li className="menu_link"><a >Castings</a></li>
					</ul>
				</div>
				<div id="logo-login">
					<h1><a >CastMe </a></h1>
				</div>
				<div id="menu2-home">
					<ul>
						<li className="menu_link"><img className="small-image-preview" style={{borderRadius:"50%"}} src={this.state.profilePicture} alt=''/><a id="profile-name-home">{`${this.state.name} ${this.state.surname}`}</a></li>

					</ul>
				</div>
			</div>
			{/* end #header */} 
		</header>
		
		<div id="page">
			<div id="page-bgtop">
				<div id="page-bgbtm">
					
						<div className="post-home">
							<h2 className="title"><a >Applications</a></h2>
							<div className="entry">
								<p><img src={claqueta} alt="" width="225" height="225" className="alignleft" /> {(this.state.applications) ? this.state.applications[0].title : null}</p>
							</div>
						</div>
					
					{/*end #content*/}
					
					<div style={{clear: 'both'}}>&nbsp;</div>
				</div>
			</div>
		</div>
		{/*end #menu*/}
		<div id="three-columns">
		<h1 className='bottom-title'>We think these might me interesting for you:</h1>
			<div id="column1">
				<h2>Casting 1</h2>
				<p>Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.</p>
				<p><a  className="link-style">Read More</a></p>
			</div>
			<div id="column2">
				<h2>Casting 2</h2>
				<p>Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.</p>
				<p><a  className="link-style">Read More</a></p>
			</div>
			<div id="column3">
				<h2>Casting 3</h2>
				<p>Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.Lilam sucks and Eric too.</p>
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
}

export default Home;