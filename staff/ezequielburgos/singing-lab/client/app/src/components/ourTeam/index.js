import React, { Component } from 'react'
import './index.css'
import Navbar from './../Navbar'
import Footer from './../Footer'

class OurTeam extends Component {


    render() {
        return (
            <main>
                <Navbar />
                <div className="container">
                    {/* Introduction Row */}
                    <h1 className="my-4">About Us
          <small>It's Nice to Meet You!</small>
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, explicabo dolores ipsam aliquam inventore corrupti eveniet quisquam quod totam laudantium repudiandae obcaecati ea consectetur debitis velit facere nisi expedita vel?</p>
                    {/* Team Members Row */}
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="my-4">Our Team</h2>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center mb-4">
                            <img className="rounded-circle img-fluid d-block mx-auto" width="200px" height="200px" src="https://firebasestorage.googleapis.com/v0/b/ninja-firebase-tut-72a5c.appspot.com/o/bruno-mars.png?alt=media&token=9b5bcb33-af87-4f84-a92f-78ab1bc8a13b" alt="" />
                            <h3>John Smith
              <small> Tenor</small>
                            </h3>
                            <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center mb-4">
                            <img className="rounded-circle img-fluid d-block mx-auto" width="200px" height="200px" src="https://firebasestorage.googleapis.com/v0/b/ninja-firebase-tut-72a5c.appspot.com/o/bruno-mars.png?alt=media&token=9b5bcb33-af87-4f84-a92f-78ab1bc8a13b" alt="" />
                            <h3>John Smith
              <small> Tenor</small>
                            </h3>
                            <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center mb-4">
                            <img className="rounded-circle img-fluid d-block mx-auto" width="200px" height="200px" src="https://firebasestorage.googleapis.com/v0/b/ninja-firebase-tut-72a5c.appspot.com/o/bruno-mars.png?alt=media&token=9b5bcb33-af87-4f84-a92f-78ab1bc8a13b" alt="" />
                            <h3>John Smith
              <small> Tenor</small>
                            </h3>
                            <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center mb-4">
                            <img className="rounded-circle img-fluid d-block mx-auto" width="200px" height="200px" src="https://firebasestorage.googleapis.com/v0/b/ninja-firebase-tut-72a5c.appspot.com/o/bruno-mars.png?alt=media&token=9b5bcb33-af87-4f84-a92f-78ab1bc8a13b" alt="" />
                            <h3>John Smith
              <small> Tenor</small>
                            </h3>
                            <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center mb-4">
                            <img className="rounded-circle img-fluid d-block mx-auto" width="200px" height="200px" src="https://firebasestorage.googleapis.com/v0/b/ninja-firebase-tut-72a5c.appspot.com/o/bruno-mars.png?alt=media&token=9b5bcb33-af87-4f84-a92f-78ab1bc8a13b" alt="" />
                            <h3>John Smith
              <small> Tenor</small>
                            </h3>
                            <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center mb-4">
                            <img className="rounded-circle img-fluid d-block mx-auto" width="200px" height="200px" src="https://firebasestorage.googleapis.com/v0/b/ninja-firebase-tut-72a5c.appspot.com/o/bruno-mars.png?alt=media&token=9b5bcb33-af87-4f84-a92f-78ab1bc8a13b" alt="" />
                            <h3>John Smith
              <small> Tenor</small>
                            </h3>
                            <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        )
    }

}

export default OurTeam