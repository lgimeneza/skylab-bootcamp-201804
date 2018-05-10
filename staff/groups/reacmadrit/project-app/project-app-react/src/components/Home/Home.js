import React, { Component } from "react";
import logic from '../../logic'
import celebrities from "../../data/data"

class Home extends Component {

    state = {
        picture_url: '',
        userFaceInfo: {},
        famousPeopleInfo: []
    }

    componentDidMount() {
        let userId = localStorage.getItem('id-app')
        let token = localStorage.getItem('token-app')

        if (userId && token) {

            logic.retrieve(userId, token).then(resp => {
                if (resp.data.picture_url) {
                    this.setState({
                        picture_url: resp.data.picture_url
                    })
                }
                else {
                    alert('input pic')
                }
            })
        }
    }
    retrieveFaceInfo = () => {
        let dataPackage = {
            method: 'POST',
            body: JSON.stringify({ "image": this.state.picture_url }),
            headers: new Headers({
                "Content-Type": "application/json",
                "app_id": "47e7faef",
                "app_key": "3d5e1fd27468674bfd2f6c0cddde59aa"
            })
        }
        fetch('http://api.kairos.com/detect', dataPackage)
            .then(res => res.json())
            .then(res => {
                Promise.resolve()
                .then(() => {
                    this.setState({
                        userFaceInfo: res.images[0].faces[0].attributes
                    })
                })
            })
            .catch(err => err.message)
    }

    comparePics = () => {
        console.log("hola")
    }

    render() {

        console.log("fadsfdas")

        if (this.props.isLogged()) {
            return <div>
                <p>{this.state.userFaceInfo.age}</p>
                <button onClick={this.retrieveFaceInfo}>retrieve!</button>                
                <button onClick={this.comparePics}>Compare!</button>
            </div>
        }
        else {
            return <h2>You are not allowed</h2>
        }

    }
}

export default Home;