import React, { Component } from "react";
import {Input} from 'reactstrap'

class Text extends Component {

    state = {
        edit: false
    }

    handleEdit = (edit) => {
        this.setState({edit })
    }

    render() {

        

       if (!this.state.edit) return (<legend onClick={()=>{this.handleEdit(true)}} >
            {this.props.data}
            <i onClick={()=>{this.handleEdit(false)}} className="far fa-edit"></i>
            <hr className="my-2" />
       </legend>)
       else  return (<div><Input onChange={this.props.handleKeep} type="text" value={this.props.data} autoFocus /><i onClick={()=>{this.handleEdit(false)}} className="far fa-check-square"></i></div>)
    }
}

export default Text;