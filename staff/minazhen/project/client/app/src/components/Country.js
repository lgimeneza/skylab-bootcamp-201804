import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import logic from '../logic'
import '../App.css';


class Country extends Component {
    state = {
        add: "",
        photos: [], 
        countryName: this.props.match.params.countryName,
        username: this.props.match.params.username
        ,state: ""
    }

    componentWillMount() {

        logic.retrieveCountry(this.state.countryName)
            .then(data => {
                console.log(data)
                if (data !== undefined) this.setState({ photos: data.photos })
            });

    }

    add = (e) => {
        const add = e.target.value
        this.setState({ add })
    }

    upload = (e) => {
        let file = e.target.files[0]
        return logic.uploadPhoto(file)
        .then(add => {
            const { username, countryName } = this.state
            logic.addPhoto(countryName, add)
            .then(()=> this.props.history.push(`/${countryName}`) 
        
        )
        })
        // let formData = new FormData()
        // formData.append("file", file)
        // formData.append("upload_preset", logic.sign)

        // axios({
        //     url: `${logic.cloud}/upload`,
        //     method: "POST",
        //     headers: {
        //         "Content-Type" : "application/x-form-urlencoded"
        //     },
        //     data: formData
        // }).then(console.log).catch(err => console.error(err))
            
    }

    retrievePicture = (e) => {
        console.log(e.target)
    }

    clicking = (e) => {
        e.preventDefault()
        const { username, countryName, add } = this.state
        logic.addPhoto(countryName, add)
        .then(()=> {
            this.props.history.push(`/${countryName}`) 
        })
        // if (username === undefined){
        //     this.props.history.push(`/world`) 
        // } else {
        //     this.props.history.push(`/world/mina`) 
        // }
        
    }

    // countryUrl = (e) => {
    //     const add = e.target.value
    //     this.setState({ add })

    // }
    // submit = (e) => {
    //     e.preventDefault()
    //     logic.addPhoto(this.state.add)
    //         .then(() => this.props.history.push(`/${this.state.username}/${this.state.countryName}`))
    //         .catch(error => {
    //             console.error("show -> "+ error.message)
    //             this.props.history.push(`/${this.state.username}/${this.state.countryName}`)
    //         })
    // }

    // componentWillMount() {
    //     if (this.state.countryName) { //comprobacion
    //         return logic.retrieveCountry(logic.userId, this.state.countryName)//(find user -> id)
    //             .then((data) => {
    //                 data.photos.forEach((v) => {
    //                     this.state.photos.push(v.url)
    //                 })
    //             })
    //     } else this.props.history.push(`/home`)
    // }
    render() {
        const { username, countryName, photos, add } = this.state
        
        return (
        <div className="country">
            
            <h1>{countryName}</h1>
            {(username === undefined) ? <h5> My photos </h5> : <h5>from {username}</h5> }
            
            {this.state.photos.map((photo) =>
                     <div key={photo._id} className="photos" onClick={this.retrievePicture}>
                        <img src={photo.url} alt={countryName}/>
                    </div>)}
                <label className="file-upload-container" htmlFor="file-upload">
                    <input id="file-upload" onChange={this.upload} type="file" style={{display: "none"}}/>
                    Select picture
                </label>
            {/* <form onSubmit={this.clicking}>
                <input type="text" onChange={this.add} value={add} placeholder="Paste url" autoComplete="off" />
                <button type="submit">Upload Photo</button>
            </form> */}
        </div>)
    }
    // render() {
    //     const { username, countryName, add } = this.state
    //     return (
    //     <div className="country">
    //         <h1>{countryName}</h1>
    //         <h5>from {username}</h5>
    //         <form onSubmit={this.submit}>
    //             <input type="text" onChange={add} value={add} placeholder="Add Photo" autoComplete="off" />
    //             <button type="submit">Add Photo</button>
    //         </form>
    //         {this.state.photos.map(url =>
    //             <img src ={url} />)}
    //     </div>)
    // }
}

export default withRouter(Country)