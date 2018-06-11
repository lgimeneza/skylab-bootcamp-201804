import React from "react";
import {Link } from "react-router-dom";
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col} from 'reactstrap';

function CardUser({user:{_id,name,race,gender,description} }) {

    return <Col xs="12" sm="6" md="4" >
                <Link to={`/user?id=${_id}`}>

        <Card className="mb-4">
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>{race}/{gender}</CardSubtitle>
                <CardText>{description}</CardText>
                <Button >Button</Button>
            </CardBody>
        </Card>
        </Link>
    </Col>
}
export default CardUser;


