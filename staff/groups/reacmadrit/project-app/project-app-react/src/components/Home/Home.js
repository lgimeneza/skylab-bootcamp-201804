import React from "react";


function Home (){

    return <div>Hello from Home {localStorage.getItem('token-app')}</div>

}

export default Home;