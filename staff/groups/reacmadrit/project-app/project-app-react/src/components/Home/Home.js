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
                    swal({
                        type: 'success',
                        title: 'You\'re in!',
                        text: 'Ready for a face compare? Go to profile and upload your picture please :)'
                    })
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
                        userFaceInfo: res.images[0].faces[0].attributes //no face detected
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
                text: 'Please hit the Retrieve button first'
            })
        }
    }

    render() {

        if (this.props.isLogged()) {
            return <div className="text-center">
                <div className="box-img rounded-circle m-4"  >
                <img className="w-100 "  src={this.state.picture_url}/>
                </div>
                <div className="box-img rounded-circle m-4"  >
                <img className="w-100 "  src="http://ishushkanov.com/blogs/wp-content/uploads/%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%8B.jpg"/>
                <img className="w-100 "  src={this.state.candidate}/>
                </div>
                <h3> #1 - Go to profile and upload your profile picture. </h3>
                <button className="btn bg-lightcyan m-2" onClick={this.retrieveFaceInfo}>retrieve!</button>                
                <button className="btn bg-darkcyan m-2" onClick={this.comparePics}>Compare!</button>
            </div>
        } else {
            return <h2>You are not allowed</h2>
        }
    }
}

export default Home;