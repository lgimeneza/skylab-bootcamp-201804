import React from "react";
import logic from '../../logic/index'


function Landing() {

    return <div>
        <h1>Arduino Controller</h1>
        <h2>Complete control over your arduino. Please register and start exploring.</h2>
        <p>Arduino Controller is a web app that allows you to retrieve and graph data from the sensors in your arduinos.</p>
        <button onClick={() => logic.controlArduino('5b26ac477a589d3b4c9e8c22','5b26ac5f7a589d3b4c9e8c23','on')}>ON</button><button onClick={() => logic.controlArduino('5b26ac477a589d3b4c9e8c22','5b26ac5f7a589d3b4c9e8c23','off')}>OFF</button> 
    </div>
}
export default Landing;