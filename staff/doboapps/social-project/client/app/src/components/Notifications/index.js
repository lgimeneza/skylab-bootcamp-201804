import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { Button, Popover, PopoverHeader, Alert } from 'reactstrap';
import logic from "../../logic"
import './style.scss';


class Notifications extends Component {


  state = {
    popoverOpen: false,
    notifications:this.props.notifications
  }


  toggle = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
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



handlerIgnoreFriendship = () => {
  this.clearNotifications()
}


clearNotifications = () => {
  logic.deleteNotifications()
      .then((res) => {
          alert("clear:"+res)
          this.props.clearNotifications()
      })
}




  drawNotifications = ()=>{
    
    return this.props.notifications.map((n, key)=>{
      console.log(n.type)

      if(n.type ==="#friendship")
      return(<Alert key={"alert_n"+key} color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
          {`${n.user} ${n.notification}`}
                <Button tag={Link} to={`/user/${n.id}`}   onClick={()=>{this.handlerAcceptFriendship(n.id)}} color="primary">
                  <i className="fas fa-check-circle fa-2x"></i>
                </Button>
                <Button onClick={()=>{this.handlerIgnoreFriendship()}}  color="danger">
                  <i className="fas fa-times-circle fa-2x"></i>
                </Button>
            </Alert>)

      else return (<Alert key={"alert_n"+key} color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                    {`${n.user} ${n.notification}`}
                  </Alert>)
    })    
  }


  render() {

    

    let notification ="without-notification"
    if(this.props.notifications.length>0) notification="one-notification"

    return (
      <div>
        <Button  color="link"  id="Popover1" onClick={this.toggle}>
        <i className={"fas fa-bell fa-1x "+notification}></i>
        </Button>

        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
            {this.drawNotifications()}
            {(this.props.notifications.length>0) ?
            <PopoverHeader onClick={this.clearNotifications}  className="text-center">Clear Notifications</PopoverHeader>
            : <PopoverHeader  className="text-center">Without  Notifications</PopoverHeader>}
        </Popover>
      </div>
    );
  }
}

export default withRouter(Notifications)