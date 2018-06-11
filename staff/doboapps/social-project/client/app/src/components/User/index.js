import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom'
import logic from "../../logic"
import { Container } from 'reactstrap'

class user extends Component {

    state = {}



    render() {

        console.log(this.props.match.params)

        return (

            <Container>
                <h1>User</h1>
                <h4>k{this.props.match.params.id}</h4>
            </Container>
        )
    }


}
export default withRouter(user);