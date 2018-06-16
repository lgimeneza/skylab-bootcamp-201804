import React from "react";
import { Landing, Home } from "../"
import {Row } from 'reactstrap'

function Gallery(props) {
                return <div>

                        <Row>
                                {props.images}
                        </Row>


                </div>      
}
export default (Gallery);

    
    