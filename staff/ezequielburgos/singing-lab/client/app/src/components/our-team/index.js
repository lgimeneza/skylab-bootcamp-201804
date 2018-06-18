import React, { Component } from 'react'
import './index.css'
import Footer from '../footer'

class OurTeam extends Component {


    render() {
        return (
            <main>
                <div className="container">
                    <h1 className="my-4 flying-title">About Us
                    </h1>
                    <h2 className="flying-subtitle">...It's Nice to Meet You!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, explicabo dolores ipsam aliquam inventore corrupti eveniet quisquam quod totam laudantium repudiandae obcaecati ea consectetur debitis velit facere nisi expedita vel?</p>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="my-4">Our Team</h2>
                            <i className="fas fa-rocket flying-rocket"></i>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center mb-4 our-team-image-div our-team-first-image">
                            <img className="our-team-image rounded-circle img-fluid d-block mx-auto" width="200px" height="200px" src="https://res.cloudinary.com/duuegw4uf/image/upload/v1529264804/our-team/Screen_Shot_2018-06-17_at_21.44.53.png" alt="" />
                            <h3 className="our-team-image-title">David Monreal</h3>
                             <span>Counter-Tenor</span>
                            <p>A classical trained singer known for his colorful high voice. Expert in interpreting XVII century operetas.</p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center mb-4 our-team-image-div">
                            <img className="our-team-image rounded-circle img-fluid d-block mx-auto" width="200px" height="200px" src="https://firebasestorage.googleapis.com/v0/b/ninja-firebase-tut-72a5c.appspot.com/o/bruno-mars.png?alt=media&token=9b5bcb33-af87-4f84-a92f-78ab1bc8a13b" alt="" />
                            <h3 className="our-team-image-title">John Smith
                                <small> Tenor</small>
                            </h3>
                            <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center mb-4 our-team-image-div">
                            <img className="our-team-image rounded-circle img-fluid d-block mx-auto" width="200px" height="200px" src="https://firebasestorage.googleapis.com/v0/b/ninja-firebase-tut-72a5c.appspot.com/o/bruno-mars.png?alt=media&token=9b5bcb33-af87-4f84-a92f-78ab1bc8a13b" alt="" />
                            <h3 className="our-team-image-title">John Smith
                            <small> Tenor</small>
                            </h3>
                            <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center mb-4 our-team-image-div">
                            <img className="our-team-image rounded-circle img-fluid d-block mx-auto" width="200px" height="200px" src="https://firebasestorage.googleapis.com/v0/b/ninja-firebase-tut-72a5c.appspot.com/o/bruno-mars.png?alt=media&token=9b5bcb33-af87-4f84-a92f-78ab1bc8a13b" alt="" />
                            <h3 className="our-team-image-title">John Smith
                             <small> Tenor</small>
                            </h3>
                            <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center mb-4 our-team-image-div">
                            <img className="our-team-image rounded-circle img-fluid d-block mx-auto" width="200px" height="200px" src="https://firebasestorage.googleapis.com/v0/b/ninja-firebase-tut-72a5c.appspot.com/o/bruno-mars.png?alt=media&token=9b5bcb33-af87-4f84-a92f-78ab1bc8a13b" alt="" />
                            <h3 className="our-team-image-title">John Smith
                            <small> Tenor</small>
                            </h3>
                            <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center mb-4 our-team-image-div">
                            <img className="our-team-image rounded-circle img-fluid d-block mx-auto" width="200px" height="200px" src="https://firebasestorage.googleapis.com/v0/b/ninja-firebase-tut-72a5c.appspot.com/o/bruno-mars.png?alt=media&token=9b5bcb33-af87-4f84-a92f-78ab1bc8a13b" alt="" />
                            <h3 className="our-team-image-title">John Smith
                            <small> Tenor</small>
                            </h3>
                            <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
                        </div>
                    </div>
                </div>
<Footer/>
            </main>
        )
    }

}

export default OurTeam