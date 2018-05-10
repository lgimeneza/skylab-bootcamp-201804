import React, { Component } from "react"
import logic from '../../logic'
import celebrities from "../../data/data"
import swal from 'sweetalert2'

class Home extends Component {

    state = {
        picture_url: '',
        userFaceInfo: false,
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
        let user=this.state.userFaceInfo
        if (user) {
            let userGender=user.gender.type
            let userAge=user.age
            let userEthnicity;
            if (user.white>user.black) {
                userEthnicity='white'
            } else {
                userEthnicity='black'
            }
            let candidates =[]
            let candidate;
            let filteredByAge=[]
            for (const key in celebrities) {
                if (celebrities[key].gender.type===userGender) {
                    if(userEthnicity==='white' && (celebrities[key].white>celebrities[key].black)) {
                        candidates.push({key:celebrities[key]})
                    }
                    else if (userEthnicity==='black' && (celebrities[key].white<celebrities[key].black)) {
                        candidates.push({key:celebrities[key]})
                    }
                }
            }
            filteredByAge=candidates.map(function(x) {
                return Math.abs(x.key.age-userAge)
            })

            let position=filteredByAge.indexOf(Math.min(...filteredByAge))

            candidate=candidates[position].key.url

            this.setState({
                candidate
            })
        }
        else {
            swal({
                type: 'error',
                title: 'Oopsies!',
                text: 'You should retrieve your data in the first place!'
            })
        }
    }

    render() {

        if (this.props.isLogged()) {
            return <div>
                <img className="w-25"  src={this.state.picture_url}/>
                <img className="w-25"  src={this.state.candidate}/>
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