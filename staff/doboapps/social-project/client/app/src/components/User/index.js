import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom'
import logic from "../../logic"
import { Container, Button, Badge,NavLink } from 'reactstrap'
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
        images:[],
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

        logic.acceptFriendship(localStorage.getItem("id-app"), idFriend)
            .then(res => {
                alert(res+" friend add")                
                logic.sendNotifactionRelationship(idFriend, localStorage.getItem("id-app"), 'acceptFriendship:')
                    .then((res) => {
                        alert(res+" notification sent")
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

    showIfAreFriends() {

        return this.state.friends.find((friend)=>{
            if(localStorage.getItem("id-app") === friend)
            return true
        })
    }

    getRaces = () => {
        return logic.races.map((race,i) => <option key={"r-"+i} value={race}>{race}</option>)
    }
    

    getImagesUser = ()=>{

        return this.state.images.map((img,i) =><img key={"img-"+i} src={img.route} alt="image dog" />
        );
    }


    componentDidMount() {
        (this.getUser())
    }

    render() {
        return (

            <Container>
                {this.showInProfile() && <Badge tag={Link} to={`/edit-profile`} color="secondary">Edit Profile</Badge>}

                <h1>{this.state.name}</h1>

                {!this.showInProfile() && !this.state.requestAlreadySent && (<Button onClick={this.handlerButtonFriendShip} color="danger">request friendship</Button>)}

                {this.showInProfile() && <Notifications accept={this.handlerAcceptFriendship} ignore={this.handlerIgnoreFriendship} notifications={this.state.newNotifications} clearNotifications={this.clearNotifications} />}
                <h4>friends:{this.state.friends.length}</h4>
                <h4>{this.state.race}</h4>
                <h4>{this.state.gender}</h4>
                <h4>{this.state.city}</h4>
                {this.showInProfile() && <NavLink tag={Link} to="/upload-picture-user">Upload a picture</NavLink >}
                {(this.showInProfile() || this.showIfAreFriends()) &&  <div>{this.getImagesUser()}</div>}

            </Container>
        )
    }


}
export default withRouter(User);