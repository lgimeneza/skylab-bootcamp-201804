import React, { Component } from "react"
import '../Main/main.css'


/**
 * The Profile with the userdata.
 * 
 * @class Profile
 * @extends {Component}
 */
class Profile extends Component {

    constructor() {
        super();

        this.state = {
            visible: false,
        }
    }

    componentDidMount(){
           this.props._handlerRetrieve()
    }

     /**
     * A handler that allows the user to change the text when the value is true.
     * 
     * @returns {boolean} - sets the property visibility into true or false
     */


  

    _handlerVisibility = () => {
        this.setState({ visible: true })
    }

    _deleteButton = (e) => {

        this.props._handlerDelete();
        this.setState({ visible: false });
        console.log("DELETE OK");
    }
    render() {
        return (
            <div className="container">


                <section className="firstSection" id="">
                <h2 className="big">¡Has vuelto! Debe ser época de emborracharse.
                </h2>
                    <button className="button">Open Tropic VilaReac</button>
                    <p className="inicia">You've already logged in.
                        <a className="sesion" href=""> Log Out</a>
                    </p>
                </section>
                
                <section className="secondSection profile">
                    <h2>Profile</h2>
                    <input type="text" placeholder={this.props.username} onChange={this.props._handlerWriteNewUsername} />
                    <input type="text" placeholder={(this.props.age) ? this.props.age : ''} onChange={this.props._handlerWriteAge} />
                    <input type="text" placeholder={(this.props.gender) ? this.props.gender : ''} onChange={this.props._handlerWriteGender} />
                    <input type="password" placeholder='password required' onChange={this.props._handlerWritePassword} />
                    <button onClick={this.props._handlerUpdate}>Update profile</button>


                    <button onClick={this._handlerVisibility}>delete profile</button>
                    {this.state.visible && <div>
                        <h2>Delete profile</h2>
                        <input type="text" placeholder="insert username" onChange={this.props._handlerWriteUsername} />
                        <input type="password" placeholder="insert password" onChange={this.props._handlerWritePassword} />
                        {/* <button onClick={() => { this.props._handlerDelete; this.setState({visible:false}); console.log("DELETE OK")}}>confirm</button> */}
                        {<button onClick={this._deleteButton}>confirm</button>}
                    </div>}
                </section>
           
            </div>

        )
    }
}
export default Profile