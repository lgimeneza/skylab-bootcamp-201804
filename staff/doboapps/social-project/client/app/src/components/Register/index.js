import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import logic from "../../logic";
import {Form, Input, Button, Container, Col} from 'reactstrap'
import './style.scss'

class Register extends Component {

    state = {
        userName: "",
        userEmail: "",
        password: "",
        repeatPassword: "",
        userCity: "",
        RegisterFailedMessage: "",

    }

    comparePassword() {

        if ((this.state.password !== this.state.repeatPassword) && this.state.repeatPassword.length) {
            this.setState({
                notMatchingMessage: "Passwords don't match"
            })
        } else {
            this.setState({
                notMatchingMessage: ""
            })
        }
    }


    handleKeepName = (e) => {
        let userName = e.target.value;
        this.setState({ userName })
    }


    handleKeepEmail = (e) => {
        let userEmail = e.target.value;
        this.setState({ userEmail })
    }

    handleKeepCity = (e) => {
        let userCity = e.target.value;
        this.setState({ userCity })
    }

    handleKeepPassword = (e) => {
        let password = e.target.value;

        Promise.resolve().then(() => {
            this.setState({ password })
        }).then(() => {
            this.comparePassword()
        })
    }

    handleKeepRepeatPassword = (e) => {
        let repeatPassword = e.target.value;

        Promise.resolve().then(() => {
            this.setState({ repeatPassword })
        }).then(() => {
            this.comparePassword()
        })
    }

    handleRegister = (e) => {
        e.preventDefault();
        if (this.state.notMatchingMessage === '') {

            logic.registerUser(this.state.userName, this.state.userEmail, this.state.password,this.state.userCity)
                .then(res => {
                    if (res === true) {
                        alert("You registered awesomely!")
                        this.props.history.push('/login')
                    }
                    else {
                        alert("opps error " + res)

                        this.setState({ registerFailedMessage: res.error })
                    }
                })
        } else {
            alert("password no coincide")
        }
    }

    getCities = cities => {
        return logic.cities.map((city,i) => <option key={"c-"+i} value={city}>{city}</option>)
    }



    render() {

        return (

            
    <div className="container-register" >
    <img src="../../images/others/login-family-golden.jpg" alt="family-dog"/>
    <Container >

        <Col sm={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>

        <Form className=" text-center  form-register p-3 pl-5 pr-5 rounded " onSubmit={this.handleRegister}>
            <h3>Register </h3>
            <hr className="my-4"/>
            <Input className="m-3" value={this.state.userName}  onChange={this.handleKeepName} type="text" placeholder="Name" autoFocus />
            <Input className="m-3" value={this.state.UserEmail}  onChange={this.handleKeepEmail} type="text" placeholder="Email"  />            
            <select className="form-control" value={this.state.UserCity} onChange={this.handleKeepCity} type="text" placeholder="City"><option key="c-first" value={null}>Select city</option>{this.getCities()}</select>
            <Input  className="m-3" value={this.state.password} onChange={this.handleKeepPassword} type="password" placeholder="Password" />
            <Input  className="m-3" value={this.state.repeatPassword} onChange={this.handleKeepRepeatPassword} type="password" placeholder="Repeat Password" />
            <p>{this.state.notMatchingMessage}</p>

            <Button className="m-2" type="submit" > Register</Button>
        </Form>
        </Col>

    </Container>

</div>

        )
    }
}

export default withRouter(Register);


