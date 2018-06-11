import React, { Component } from "react";
import { withRouter,Link} from 'react-router-dom'
import logic from "../../logic"
import {Text,Select} from "../"
import {Container,CardImg,Col,NavLink} from 'reactstrap'

class Profile extends Component {

    state = {
        user: undefined,
        email: undefined,
        race: undefined,
        gender: undefined,
        city: undefined
    }

    handleKeepName = (e) => {
        let name = e.target.value;
        this.setState({ name })
    }

    handleKeepEmail = (e) => {
        let email = e.target.value;
        this.setState({ email })
    }

    handleKeepGender = (e) => {
        let gender = e.target.value;
        this.setState({ gender })
    }

    getUser = () => {
        logic.retrieveUser().then(({name,email,race,gender,city})=>{
            this.setState({name,email,race,gender,city})
        })
    }

    componentDidMount(){
         this.getUser()
    }

    render() {


        return (

            <Container>
                <h1>Profile</h1>
                <Col xs={{ size: 8, offset: 2 }} sm={{ size: 6, offset: 3 }} md={{ size: 2, offset: 5 }}>
                <CardImg className="rounded-circle" top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=180%C3%97180&w=180&h=180" alt="Card image cap" />
                </Col>
                <Col>

                <NavLink tag={Link} to="/upload-picture">Change picture</NavLink >
                </Col>
                <Text data={this.state.name}  handleKeep={this.handleKeepName}/>
                <Text data={this.state.email}  handleKeep={this.handleKeepEmail}/>
                <Select data={this.state.gender}  handleKeep={this.handleKeepGender}/>

                <h4>Race:{this.state.race}</h4>
                <h4>Gender:{this.state.gender}</h4>
                <h4>City:{this.state.city}</h4>
                
            </Container>
        )
    }
}
export default withRouter(Profile);