import React, { Component } from "react";
import { withRouter,Link } from 'react-router-dom'
import logic from "../../logic"
import {CardUser} from '../'
import {Container,Row, Badge} from 'reactstrap'

import './style.scss';


class Home extends Component {

    state = {
        loading: "Loading...",
        users: [],
        cityToSearch: undefined,
        genderToSearch:undefined,
        raceToSearch:undefined
    }

    getIdUser = () => {
        return localStorage.getItem("id-app")
    }

   
    handleKeepGender = (e) => {
        let genderToSearch = e.target.value;

        if(genderToSearch==="All") genderToSearch=undefined
        this.setState({ genderToSearch })
    }

    handleKeepRace = (e) => {
        let raceToSearch = e.target.value;
        if(raceToSearch==="All") raceToSearch=undefined

        this.setState({ raceToSearch })
    }

    getRaces = () => {
        return logic.races.map((race,i) => <option key={"r-"+i} value={race}>{race}</option>)
    }
    
    
    
    
    handleKeepCity = (e) => {
        let cityToSearch = e.target.value;
        if(cityToSearch==="All") cityToSearch=undefined
        this.setState({ cityToSearch })
    }

    getCities = () => {
        return logic.cities.map((city,i) => <option key={"c-"+i} value={city}>{city}</option>)
    }


    getUsersByCity = () => {

        logic.retrieveUser(this.getIdUser()).then(({city})=>{

            logic.search(undefined, undefined, undefined, city)
                .then(({ status, users }) => {

                    this.setState({
                        loading: "",
                        users,
                        cityToSearch:city
                    })
                })
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        logic.search(undefined, this.state.raceToSearch, this.state.genderToSearch, this.state.cityToSearch)
                .then(({ status, users }) => {

                    this.setState({
                        loading: "",
                        users
                    })
                })
        
    }


    componentDidMount(){
        if(logic.isLogged())
         this.getUsersByCity()
    }

    render() {

        return (

            <Container>
                <h1>Home</h1><Badge tag={Link} to={`/user/${this.getIdUser()}`} color="secondary">Profile</Badge>


                <form onSubmit={this.handleSubmit}>

                    <select value={this.state.cityToSearch} onChange={this.handleKeepCity} type="text" placeholder="City">
                    <option key={"c-first"} value={undefined}>All</option>
                    {this.getCities()}</select>
                    <select value={this.state.raceToSearch} onChange={this.handleKeepRace} type="text" placeholder="Race">
                    <option key={"r-first"} value={undefined}>All</option>
                    {this.getRaces()}
                    </select>
                    <select value={this.state.genderToSearch} onChange={this.handleKeepGender} type="text" placeholder="Gender">
                        <option key={"g-0"} value={undefined}>All</option>
                        <option key={"g-1"} value="male">Male</option>
                        <option key={"g-2"} value="female">Female</option>
                    </select>

                    
                    <input type="submit" value="Search" />
                </form>

                <h3>Near you...</h3>
                <Row>
                    {this.state.users.map((user,i) => {
                        if(user._id!==this.getIdUser())
                            return   <CardUser key={i+"-"+user.id} user={user} />
                    })}
                </Row>
            </Container>
        )
    }
}
export default withRouter(Home);