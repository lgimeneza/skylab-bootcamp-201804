import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import Navbar from './../Navbar'
import LandingMain from './LandingMain'
import LandingProducts from './LandingProducts'
import LandingChat from '../LandingChat'
import Footer from './../Footer'

class Landing extends Component {

    render() {
        return (
            <main>
                <Navbar />
                <section>
                    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light first-main">
                        <div className="col-md-5 p-lg-5 mx-auto my-5">
                            <h1 className="display-4 font-weight-normal">Singing-Lab</h1>
                            <p className="lead font-weight-normal">A place to increase your singing skills from home</p>
                            <Link to="/categories" className="btn btn-outline-secondary">Click here to enter</Link>
                        </div>
                    </div>
                </section>
                <LandingMain />
                <LandingProducts />
                <LandingChat />
                <Footer />
            </main>
        )
    }

}

export default Landing