import React, { Component } from "react"
import { withRouter } from 'react-router-dom'
import logic from "../../logic"
import {Form, Input, Button, Container, Col} from 'reactstrap'

import './style.scss'


class Login extends Component {

    state = {
        userEmail: "",
        password: "",
    }

    handleKeepEmail = (e) => {
        let userEmail = e.target.value;
        this.setState({ userEmail })
    }

    handleKeepPassword = (e) => {
        let password = e.target.value;
        this.setState({ password })
    }

    handleLogin = (e) => {
        e.preventDefault()
        logic.login(this.state.userEmail, this.state.password)
            .then(res => {

                if (res.status === 'OK') {

                    alert(res.data.id)

                    this.props.logIn()//change the state "isLogged" of app.js
                    this.props.history.push('/')

                } else {
                    alert("error logeo " + res)
                }
            })
    }

    render() {

        return (

            <div className="container-login" >
                <img src="../../images/others/login-family-dogs.jpg" alt="family-dog"/>
                <Container >

                    <Col sm={{ size: 10, offset: 1 }} sm={{ size: 6, offset: 3 }}>

                    <Form className=" text-center  form-login p-5 rounded " onSubmit={this.handleLogin}>
                        <h3 className="mt-3 mb-2">Login </h3>
                        <h4 className="">Wellcome to Dogger </h4>

                        <Input className="m-3" value={this.state.userEmail} onChange={this.handleKeepEmail} type="text" placeholder="Email" />
                        <Input  className="m-3" value={this.state.password} onChange={this.handleKeepPassword} type="password" placeholder="Password" />
                        <Button className="m-3" type="submit" > Log me in</Button>
                    </Form>
                    </Col>

                </Container>

            </div>
        )
    }
}

export default withRouter(Login);