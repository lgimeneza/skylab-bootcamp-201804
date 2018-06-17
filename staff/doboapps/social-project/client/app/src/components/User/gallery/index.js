import React from "react";
import {Row } from 'reactstrap'

function Gallery(props) {
                return <div>

                        <Row>
                                {(props.images.length>0)?props.images:<h2>No uploaded images</h2>}
                        </Row>


                </div>      
}
export default (Gallery);

    
    