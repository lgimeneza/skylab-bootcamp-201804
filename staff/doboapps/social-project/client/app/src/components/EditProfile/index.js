import React, { Component } from "react";
import { withRouter,Link} from 'react-router-dom'
import logic from "../../logic"
import {Text} from "../"
import {Container,CardImg,Col,NavLink,Button} from 'reactstrap'
import DatePicker from 'react-datepicker';
import moment from 'moment'; 
import 'react-datepicker/dist/react-datepicker.css';


class EditProfile extends Component {

    state = {
        firstEmail:undefined,
        user: undefined,
        email: undefined,
        password:"",
        race: undefined,
        gender: undefined,
        description:undefined,
        photoProfile:undefined,
        birthdate:undefined,
        city: undefined,
        zip:undefined,
    }

    handleKeepName = (e) => {
        let name = e.target.value;
        this.setState({ name })
    }

    getUser = () => {
        const userId=localStorage.getItem("id-app")
        
        logic.retrieveUser(userId).then(({name,email,race,gender,city,photoProfile,zip,description,birthdate})=>{
            if(photoProfile==="")photoProfile="https://placeholdit.imgix.net/~text?txtsize=33&txt=180%C3%97180&w=180&h=180"
            if(typeof birthdate ==="object") birthdate =moment()
            birthdate= moment(birthdate)
            this.setState({firstEmail:email,name,email,race,gender,city,photoProfile,description,zip,birthdate})

        })
    }

    handleKeepEmail = (e) => {
        let email = e.target.value;
        this.setState({ email })
    }

    handleKeepPassword = (e) => {
        let password = e.target.value;
        this.setState({ password })
    }

    handleKeepRace = (e) => {
        let race = e.target.value;
        this.setState({ race })
    }   
    
    getRaces = races => {
        return logic.races.map((race,index) => <option key={"select_race"+index} value={race}>{race}</option>)
    }

    handleKeepGender = (e) => {
        let gender = e.target.value;
        this.setState({ gender })
    }

    handleKeepDescription = (e) => {
        let description = e.target.value;
        this.setState({ description })
    }

    handleKeepBirthdate = (e) => {
        let birthdate = e.target.value;
        this.setState({ birthdate })
    }

    handleChange =(date) =>{
        this.setState({birthdate: date});
      }
    
    handleKeepCity = (e) => {
        let city = e.target.value;
        this.setState({ city })
    }

    handleKeepZip = (e) => {
        let zip = e.target.value;
        this.setState({ zip })
    }

    getCities = cities => {
        return logic.cities.map((city,index) => <option key={"select_city"+index} value={city}>{city}</option>)
    }

   

   


    handleSaveDB = () =>{
        logic.updateUser(this.state.name, this.state.firstEmail,this.state.email, this.state.password, this.state.race, this.state.gender, this.state.description, this.state.photoProfile, this.state.birthdate,this.state.city,this.state.zip)
        .then((res)=>{
            alert(res)
        })
        .catch((res)=>{
            alert(res)
        })
    }


    componentDidMount(){
         this.getUser()
    }

    render() {


        return (

            <Container>
                <h1>Profile</h1>
                <Col xs={{ size: 8, offset: 2 }} sm={{ size: 6, offset: 3 }} md={{ size: 2, offset: 5 }}>
                <CardImg className="rounded-circle" top width="100%" src={this.state.photoProfile} alt="Card image cap" />
                </Col>
                <Col>

                <NavLink tag={Link} to="/upload-picture-profile">Change picture</NavLink >
                </Col>
                <Text data={this.state.name}  handleKeep={this.handleKeepName}/>
                <Text data={this.state.email}  handleKeep={this.handleKeepEmail}/>
                <Text data={this.state.description}  handleKeep={this.handleKeepDescription}/>

                <select value={this.state.city}  onChange={this.handleKeepCity} type="text" placeholder="City">{this.getCities()}</select>
                <Text data={this.state.zip}   handleKeep={this.handleKeepZip}/>
                <select value={this.state.gender} onChange={this.handleKeepGender} type="text" placeholder="Gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>

                </select>    
                <select value={this.state.race} defaultValue={"Common dog"}  onChange={this.handleKeepRace} type="text" placeholder="race">{this.getRaces()}</select>
                <DatePicker   selected={this.state.birthdate} onChange={this.handleChange}
    />
                <input onChange={this.handleKeepPassword} value={this.state.password} type="password" placeholder="Password"/>
                <Button onClick={this.handleSaveDB} color="primary">Save</Button>{' '}

            </Container>
        )
    }
}
export default withRouter(EditProfile);