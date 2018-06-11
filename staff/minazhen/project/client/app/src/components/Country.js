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
                this.setState({ photos: data.photos })
            });

    }

    add = (e) => {
        const add = e.target.value
        this.setState({ add })

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
            <h5>from {username}</h5>
        
            {this.state.photos.map((photo) =>
                     <div key={photo.id}>
                        <img src={photo.url} alt={countryName}/>
                    </div>)}
            <form onSubmit={this.clicking}>
                <input type="text" onChange={this.add} value={add} placeholder="Paste url" autoComplete="off" />
                <button type="submit">Add Country</button>
            </form>
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