import React, { Component } from "react";
import { withRouter,Link} from 'react-router-dom'
import logic from "../../logic"
import {Container,CardImg,Col,NavLink} from 'reactstrap'

class Profile extends Component {

    state = {
        user: {}
    }

    getUser = () => {
        logic.retrieveUser().then((user)=>{

            console.log(user)

            this.setState({user})
        })
    }

    componentDidMount(){
         this.getUser()
    }

    render() {

        const {name,email,race,gender,city} = this.state.user

        return (

            <Container>
                <h1>Profile</h1>
                <Col xs={{ size: 8, offset: 2 }} sm={{ size: 6, offset: 3 }} md={{ size: 2, offset: 5 }}>
                <CardImg className="rounded-circle" top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=180%C3%97180&w=180&h=180" alt="Card image cap" />
                </Col>
                <Col>
                <NavLink tag={Link} to="/upload-picture">Change picture</NavLink>
                </Col>
                <h3>Name:{name}</h3>
                <h4>Email:{email}</h4>
                <h4>Race:{race}</h4>
                <h4>Gender:{gender}</h4>
                <h4>City:{city}</h4>
                
            </Container>
        )
    }
}
export default withRouter(Profile);