import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom'
import logic from "../../../logic"
import {Row, Col, Jumbotron,Container, Button, Badge,NavLink,CardImg } from 'reactstrap'
import Gallery  from '../gallery/'

class OtherUser extends Component {

    state = {
        user: undefined,
        email: undefined,
        race: undefined,
        gender: undefined,
        description: undefined,
        photoProfile: "../../images/others/profile-dog.jpg",
        city: undefined,
        zip: undefined,
        images:[],
        friends: [],
        loves: [],
        notifications: [],
        newNotifications: [],
        requestAlreadySent: false,
        url:this.props.localStorage
    }

    getUser = () => {

        logic.retrieveUser(this.props.getUserIdParams()).then((user) => {
            this.setState(user)
            
            let newNotifications = logic.getNotifications(this.state.notifications)
            this.setState({ newNotifications })

            if (this.requestAlreadySent())
                this.setState({ requestAlreadySent: true })

        })
    }


    handlerButtonFriendShip = () => {

        logic.sendNotifactionRelationship(this.props.getUserIdParams(), localStorage.getItem("id-app"), 'friendship:')
            .then((res) => {
                alert(res)
                this.setState({ requestAlreadySent: true })
            })
    }



    requestAlreadySent = () => {

        let AlreadySent = false

        if (this.state.newNotifications.find(n => n.id === localStorage.getItem("id-app")))
            return true
        if (this.state.friends.find(n => n === localStorage.getItem("id-app")))
            return true

        return AlreadySent

    }


    showIfAreFriends() {
        console.log(this.state)
        return this.state.friends.find((friend)=>{
            if(localStorage.getItem("id-app") === friend)
            return true
            else return false
        })
    }

    getImagesUser = ()=>{

        return this.state.images.map((img,i) =><Col xs="6" md="4" ><img key={"img-"+i} src={img.route} alt="dog" /></Col>
        );
    }


    componentDidMount() {
        (this.getUser())
    }

    render() {

                    console.log(this.state.requestAlreadySent)

        return (

            <Container className="container-info-user">
                <Row>
                    <Col xs="4">
                        <CardImg className="rounded-circle" top src={this.state.photoProfile} alt="Card image cap" />
                    </Col>
                    <Col xs="8">
                        <Jumbotron>

                            <h1 className="display-5 text-capitalize ">{this.state.name}</h1>
                            <h5 className="text-capitalize">{this.state.race}</h5>
                            <h5 className="text-capitalize">{this.state.gender}</h5>
                            <h5 className="text-capitalize">{this.state.city}</h5>
                            <h5 className="text-capitalize">{this.state.birthdate}</h5>
                            <h5 className="text-capitalize">{this.state.friends.length}</h5>

                            <hr className="my-2" />
                            <p>{this.state.description}</p>
                            <p className="lead">
                            {(!this.showIfAreFriends() && !this.state.requestAlreadySent) && <Button onClick={this.handlerButtonFriendShip} color="danger">Request friendship</Button>}
                            </p>
                        </Jumbotron>
                    </Col>
                </Row>

                {this.showIfAreFriends() &&<Gallery images={this.getImagesUser()} />}

            </Container>
        )
    }


}
export default withRouter(OtherUser);