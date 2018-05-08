import React, { Component } from "react"
import '../Main/main.css'

class Profile extends Component {

    constructor() {
        super();

        this.state = {
            visible: false
        }
    }

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
            <div>


                <section className="firstSection">
                    <h2>Trabaja mejor en equipo con Fevernote Business</h2>
                    <ul className="list">
                        <li>Novedad. Espacios para organizar y colaborar con tu equipo</li>
                        <li>Usuarios y dispositivos ilimitados para que puedas acceder a las notas desde cualquier lugar</li>
                        <li>Con una suscripción anual de Evernote Business se incluye Evernote Premium gratis para uso personal</li>
                    </ul>
                </section>


                <section className="secondSection">
                    {/* UPDATE */}
                    <h2>Update</h2>
                    <button onClick={this.props._handlerRetrieve}>Conseguir datos</button><br />
                    {/* <button onClick={this.props.state.disabled = ""}>Enable changes</button><br/> */}
                    <button onClick={this.props._handlerUpdate}>Submit changes</button><br />
                    <input disabled={this.props.disabled} type="text" placeholder={this.props.username} onChange={this.props._handlerWriteNewUsername} />

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