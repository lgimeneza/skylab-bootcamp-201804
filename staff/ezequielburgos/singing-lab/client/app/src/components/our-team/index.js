import React, { Component } from 'react'
import './index.css'
import Footer from '../footer'
import $ from 'jquery'

class OurTeam extends Component {


    handleImage = () => {
        // const el = findDOMNode(this.refs.button);
        $("button").on("click", function () {
            // var cart = $(".quod")
            var cart = $(".fa-shopping-cart")
            var imgtodrag = $(this).closest("div").find("img")

            var imgclone = imgtodrag.clone()
                .offset({
                    top: imgtodrag.offset().top,
                    left: imgtodrag.offset().left
                })
                .css({
                    'opacity': '0.5',
                        'position': 'absolute',
                        'height': '150px',
                        'width': '150px',
                        'z-index': '100'
                })
                .appendTo("body")
                .animate({
                    'top': cart.offset().top + 10,
                        'left': cart.offset().left + 10,
                        'width': 75,
                        'height': 75
                }, 1000, "linear");
            
                setTimeout(function(){
                    $(imgclone).remove()
                }, 3000)
                // setTimeout(function () {
                //     cart.effect("shake", {
                //         times: 2
                //     }, 200);
                // }, 1500);
    
                // imgclone.animate({
                //     'width': 0,
                //         'height': 0
                // }, function () {
                //     $(this).detach()
                // });
        })
    };

    render() {
        return (
            <main>
                <section className="container">
                    <h1 className="my-4 flying-title">About Us
                    </h1>
                    <h2 className="flying-subtitle">...It's Nice to Meet You!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, explicabo dolores ipsam aliquam inventore corrupti eveniet quisquam <strong className="quod">quod</strong> totam laudantium repudiandae obcaecati ea consectetur debitis velit facere nisi expedita vel?</p>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="my-4">Our Team</h2>
                            <i className="fas fa-rocket flying-rocket"></i>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center mb-4 our-team-image-div our-team-first-image">
                            <img className="our-team-image rounded-circle img-fluid d-block mx-auto" width="200px" height="200px" src="https://res.cloudinary.com/duuegw4uf/image/upload/v1529264804/our-team/Screen_Shot_2018-06-17_at_21.44.53.png" alt="" />
                            <button ref="button" onClick={this.handleImage}>click here</button>
                            <h3 className="our-team-image-title">David Monreal</h3>
                            <span>Counter-Tenor</span>
                            <p>A classical trained singer known for his colorful high voice. Expert in interpreting XVII century operetas.</p>

                        </div>
                        <div className="col-lg-4 col-sm-6 text-center mb-4 our-team-image-div">
                            <img className="our-team-image rounded-circle img-fluid d-block mx-auto" width="200px" height="200px" src="https://firebasestorage.googleapis.com/v0/b/ninja-firebase-tut-72a5c.appspot.com/o/bruno-mars.png?alt=media&token=9b5bcb33-af87-4f84-a92f-78ab1bc8a13b" alt="" />
                            <button ref="button" onClick={this.handleImage}>click here</button>
                            <h3 className="our-team-image-title">John Smith
                                <small> Tenor</small>
                            </h3>
                            <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center mb-4 our-team-image-div">
                            <img className="our-team-image rounded-circle img-fluid d-block mx-auto" width="200px" height="200px" src="https://firebasestorage.googleapis.com/v0/b/ninja-firebase-tut-72a5c.appspot.com/o/bruno-mars.png?alt=media&token=9b5bcb33-af87-4f84-a92f-78ab1bc8a13b" alt="" />
                            <button ref="button" onClick={this.handleImage}>click here</button>
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
                </section>
                <Footer />
            </main>
        )
    }

}

export default OurTeam