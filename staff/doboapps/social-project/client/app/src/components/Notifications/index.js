import React, { Component } from 'react';
import { Button, Popover, PopoverHeader, Alert } from 'reactstrap';

export default class Notifications extends Component {


  state = {
    popoverOpen: false
  }


  toggle = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  drawNotifications = ()=>{
    return this.props.notifications.map((n, key)=>{

      if(n.type ==="#friendship")
      return(<Alert key={"alert_n"+key} color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
          {`${n.user} ${n.notification}`}
                <Button onClick={()=>{this.props.accept(n.id)}} color="success">accept</Button>
                <Button onClick={()=>{this.props.ignore(n.id)}} color="danger">ignore</Button>
            </Alert>)

      else return (<Alert key={"alert_n"+key} color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                    {`${n.user} ${n.notification}`}
                  </Alert>)
    })    
  }

  render() {
    return (
      <div>
        <Button id="Popover1" onClick={this.toggle}>
          Launch Popover
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>

          {this.drawNotifications()}
          <PopoverHeader onClick={this.props.clearNotifications}  className="text-center">Clear Notifications</PopoverHeader>
        </Popover>
      </div>
    );
  }
}