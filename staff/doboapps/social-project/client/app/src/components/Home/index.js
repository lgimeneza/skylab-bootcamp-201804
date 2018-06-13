import React, { Component } from "react";
import { withRouter,Link } from 'react-router-dom'
import logic from "../../logic"
import {CardUser} from '../'
import {Container,Row, Badge} from 'reactstrap'

class Home extends Component {

    state = {
        loading: "Loading...",
        users: []
    }

    getIdUser = () => {
        return localStorage.getItem("id-app")

    }


    getUsersByCity = () => {


        logic.retrieveUser(this.getIdUser()).then(({city})=>{

            logic.search(undefined, undefined, undefined, city)
                .then(({ status, users }) => {
                    this.setState({
                        loading: "",
                        users,
                    })
                })
        })
    }

    componentDidMount(){
        if(logic.isLogged())
         this.getUsersByCity()
    }

    render() {

        return (

            <Container>
                <h1>Home</h1><Badge tag={Link} to={`/user/${this.getIdUser()}`} color="secondary">Profile</Badge>

                <h3>Near you...</h3>
                <Row>
                    {this.state.users.map(user => {
                        return   <CardUser key={user.name+Date.now().toString()} user={user} />
                    })}
                </Row>
            </Container>
        )
    }
}
export default withRouter(Home);