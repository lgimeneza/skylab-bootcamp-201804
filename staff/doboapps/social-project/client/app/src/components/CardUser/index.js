import React from "react";
import {Link } from "react-router-dom";
import {Card, CardImg, CardBody, Col} from 'reactstrap';
import {Animated} from "react-animated-css";
import profileDefault from '../../images/others/profile-user.jpg'
import './style.scss'


function CardUser({user:{_id,name,race,gender,city,friends,photoProfile} }) {

    if(!photoProfile)  photoProfile =profileDefault
    
    let iconGender
    
    switch (gender) {
        case "male": iconGender="mars";  break;
        case "female": iconGender="venus";  break;
        default:  gender="undefined"; iconGender= "transgender";
    }

    return <Col className="card-img" xs="12" sm="6" md="4" >
                <Link to={`/user/${_id}`}>
        <Animated animationIn="pulse" animationOut="jello" isVisible={true}>
            <Card className="mb-4 bg-light">
                <img  className="img-card-user-back"  src={photoProfile} alt="back img" />
                <CardImg  className="rounded-circle img-card-user"  src={photoProfile} alt="Card image cap" />
                <CardBody>
                    <h3 className="text-center">{name}</h3>
                    <div className="card-data" > 
                                    
                        <div><span><i className="fas fa-building"></i><br/>{city}</span><br/></div>
                        <div><span><i className="fas fa-paw"></i><br/>{race}</span></div><br/>
                        <div><span><i className={`fas fa-${iconGender}`}></i><br/>{gender}</span></div>
                        <div><span><i className="fas fa-heart"></i><br/>{friends.length}</span></div><br/>
                    </div>
                </CardBody>
            </Card>
        </Animated>
        </Link>
    </Col>
}
export default CardUser;


