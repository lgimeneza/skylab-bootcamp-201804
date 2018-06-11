import React, { Component } from 'react'
import './index.css'
import Navbar from './../navbar'
import Footer from './../footer'
import LandingMain from '../landing-main'
import LandingChat from '../landing-chat'

class Landing extends Component {

    componentDidMount(){
        document.body.style.background = "lightgrey"
    }

    render() {
        return (
            <main>
                <Navbar />
                <section>
                    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light first-main">
                        <div class="col-md-5 p-lg-5 mx-auto my-5 main-title">
                            <h1 class="display-4 font-weight-normal">Singing-Lab</h1>
                            <p class="lead font-weight-normal">A place to increase your singing skills from home</p>
                            <a class="btn btn-outline-secondary" href="categories.html">Click here to enter</a>
                        </div>
                    </div>
                </section>
                <LandingMain/>
                <LandingChat/>
                <Footer/>
            </main>
        )
    }

}

export default Landing