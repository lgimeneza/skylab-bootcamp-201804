import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom'
import logic from "../../logic"
import { CardUser } from '../'
import { Nav, NavLink, CardImg, Container, Col, Row, Badge } from 'reactstrap'


import './style.scss';


class Home extends Component {

    state = {
        loading: "Loading...",
        users: [],
        cityToSearch: undefined,
        genderToSearch: undefined,
        raceToSearch: undefined,
    }

    handleKeepGender = ({target:{value:genderToSearch}}) => {
       
        if (genderToSearch === "All") genderToSearch = undefined
        this.handleSearch(this.state.raceToSearch, genderToSearch, this.state.cityToSearch)
    }


    handleKeepRace = ({target:{value:raceToSearch}}) => {

        if (raceToSearch === "All") raceToSearch = undefined
        this.handleSearch(raceToSearch, this.state.genderToSearch, this.state.cityToSearch)
    }

    getRaces = () => {
        return logic.races.map((race, i) => <option key={"r-" + i} value={race}>{race}</option>)
    }


    handleKeepCity = ({target:{value:cityToSearch}})  => {

        if (cityToSearch === "All") cityToSearch = undefined
        this.handleSearch(this.state.raceToSearch, this.state.genderToSearch, cityToSearch)

    }

    getCities = () => {
        return logic.cities.map((city, i) => <option key={"c-" + i} value={city}>{city}</option>)
    }


    getUsersByCity = () => {

        logic.retrieveUser(this.props.dataUser.idUser).then(({ city,name, photoProfile }) => {

            logic.search(undefined, undefined, undefined, city)
                .then(({ status, users }) => {

                    this.setState({
                        loading: "",
                        users,
                        cityToSearch: city
                    })
                })
        })
    }

    handleSearch = (raceToSearch, genderToSearch, cityToSearch) => {

        logic.search(undefined, raceToSearch, genderToSearch, cityToSearch)
            .then(({ status, users }) => {

                this.setState({
                    loading: "",
                    users,
                    cityToSearch,
                    genderToSearch,
                    raceToSearch,
                })
            })

    }


    componentDidMount(){
       console.log( this.props.getNotifications())
        this.getUsersByCity()
    }
  


    render() {


        return (


            <Container className="container-home">
               <form > 
                <Row>
                    <Col sm="4" >
                        <select className="form-control mb-3" value={this.state.cityToSearch} onChange={this.handleKeepCity} type="text" placeholder="City">
                            <option key={"c-first"} value={undefined}>All</option>
                            {this.getCities()}</select>
                    </Col>
                    <Col sm="4" >
                        <select className="form-control mb-3" value={this.state.raceToSearch} onChange={this.handleKeepRace} type="text" placeholder="Race">
                            <option key={"r-first"} value={undefined}>All</option>
                            {this.getRaces()}
                        </select>
                    </Col> 
                    <Col sm="4" >
                        <select className="form-control mb-3" value={this.state.genderToSearch} onChange={this.handleKeepGender} type="text" placeholder="Gender">
                            <option key={"g-0"} value={undefined}>All</option>
                            <option key={"g-1"} value="male">Male</option>
                            <option key={"g-2"} value="female">Female</option>
                        </select>
                    </Col>          
                </Row>

                </form>

                <h3>Near you...</h3>
                <Row>
                    {this.state.users.map((user, i) => {
                        if (user._id !== this.props.dataUser.idUser)
                            return <CardUser key={i + "-" + user.id} user={user} />
                        else return undefined
                    })}
                </Row>
            </Container>
        )
    }
}
export default withRouter(Home);