import React,{Component} from "react";
import { Link } from "react-router-dom";

import logic from "../../logic"
import './index.css'


class Home extends Component {

	state={
		name:'',
		surname:'',
		profilePicture: '',
		applications: '',
	}

	

	componentDidMount(){
			
		if (this.props.onCorrection(this.props.userId) ){
			console.log('si')
			logic.retrieveUserLite(logic.userId)
			.then(({name,surname, profilePicture, applications})=>{
				
				this.setState({
					name,
					surname,
					profilePicture,
					applications
	
				})
				
				
			})
		}
		
	}

	printDate(date){
		
		const day= Number(date.substring(8,10))
		const month= Number(date.substring(5,7))
		const year= Number(date.substring(0,4))
		return `${day}/${month}/${year}`
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
						<li className="menu_link">
							<Link to="/profile" >
							<img className="small-image-preview" style={{borderRadius:"50%"}} src={this.state.profilePicture} alt=''/>
							
								{`${this.state.name} ${this.state.surname}`}
                			</Link>
					
						</li>

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
								<table className='applications'>
								<thead>
									<tr>
									<th>Project Title</th>
									<th>Published Date</th>
									<th>End Date</th>
									<th>Status</th>
									<th>Role</th>
									</tr>
								</thead>
								<tbody>
								
								{
									(this.state.applications) ? 
									
									this.state.applications.map(application =>{
										return (
											<tr>
												<td>{application.title}</td>
												<td>{this.printDate(application.publishedDate)}</td>
												<td>{this.printDate(application.endDate)}</td>
												<td>{application.situation}</td>
												<td>{application.casting.title}</td>
											</tr>
										)

									}) : 
								
									null}
								</tbody>
								</table>
								{/* <p><img src={claqueta} alt="" width="225" height="225" className="alignleft" /> {this.state.surname}</p> */}
							</div>
						</div>
					
					
					
					<div style={{clear: 'both'}}>&nbsp;</div>
				</div>
			</div>
		</div>
		{/*end #menu*/}
		<div id="three-columns">
		<h1 className='bottom-title'>We think these might me interesting for you:</h1>
			<div id="column1">
				<h3>New Talents</h3>
				<p>For film. We are looking for new talents in an open casting, whatever your age, whatever your background, come and...</p>
				<p><a  className="link-style">Read More</a></p>
			</div>
			<div id="column2">
				<h3>Much Ado About Nothing</h3>
				<p>For theatre. We need an actress between 20-30 years old to perform in "Much Ado About Nothing", of W. Shakespeare, next season at TNC...</p>
				<p><a  className="link-style">Read More</a></p>
			</div>
			<div id="column3">
				<h3>Leading male</h3>
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
}

export default Home;