import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom'
import logic from "../../logic"
import { Container, Button } from 'reactstrap'
import { Notifications } from '../'
class User extends Component {

    state = {
        user: undefined,
        email: undefined,
        race: undefined,
        gender: undefined,
        description: undefined,
        photoProfile: undefined,
        city: undefined,
        zip: undefined,
        friends: [],
        loves: [],
        notifications: [],
        newNotifications: [],
        requestAlreadySent: false
    }


    getUserIdParams = () => {
        let { pathname: idUser } = this.props.location
        idUser = idUser.substr(6)

        return idUser;
    }

    getUser = () => {

        logic.retrieveUser(this.getUserIdParams()).then((user) => {

            this.setState(user)

            let newNotifications = logic.getNotifications(this.state.notifications)
            this.setState({ newNotifications })

            if (this.requestAlreadySent())
                this.setState({ requestAlreadySent: true })

        })
    }


    clearNotifications = () => {
        logic.deleteNotifications()
            .then((res) => {
                alert(res)
                this.setState({ newNotifications: [] })
            })
    }


    handlerButtonFriendShip = () => {

        logic.sendNotifactionRelationship(this.getUserIdParams(), localStorage.getItem("id-app"), 'friendship:')
            .then((res) => {
                alert(res)
                this.setState({ requestAlreadySent: true })
            })
    }

    handlerAcceptFriendship = (idFriend) => {

        let promises = []

        promises.push(logic.acceptFriendship(localStorage.getItem("id-app"), idFriend))
        promises.push(logic.acceptFriendship(idFriend, localStorage.getItem("id-app")))


        Promise.all(promises)
            .then(res => {

                alert(res)
                
                logic.sendNotifactionRelationship(idFriend, localStorage.getItem("id-app"), 'acceptFriendship:')
                    .then((res) => {
                        alert(res)
                        this.clearNotifications()
                    })
            })
    }

    handlerIgnoreFriendship = (idFriend) => {
        this.clearNotifications()
    }



    requestAlreadySent = () => {

        let AlreadySent = false

        if (this.state.newNotifications.find(n => n.id === localStorage.getItem("id-app")))
            return true
        if (this.state.friends.find(n => n === localStorage.getItem("id-app")))
            return true

        return AlreadySent

    }


    showInProfile() {

        if (localStorage.getItem("id-app") === this.getUserIdParams())
            return true
    }


    componentDidMount() {
        (this.getUser())
    }

    render() {

        return (

            <Container>
                <h1>{this.state.requestAlreadySent && "true"}</h1>
                <h1>{!this.state.requestAlreadySent && "false"}</h1>

                <h1>{this.state.name}</h1>

                {!this.showInProfile() && !this.state.requestAlreadySent && (<Button onClick={this.handlerButtonFriendShip} color="danger">request friendship</Button>)}

                {this.showInProfile() && <Notifications accept={this.handlerAcceptFriendship} ignore={this.handlerIgnoreFriendship} notifications={this.state.newNotifications} clearNotifications={this.clearNotifications} />}
                <h4>friends:{this.state.friends.length}</h4>
                <h4>{this.state.race}</h4>
                <h4>{this.state.gender}</h4>
                <h4>{this.state.city}</h4>

            </Container>
        )
    }


}
export default withRouter(User);