import React, { Component } from 'react';
import {Dropdown} from './dropdown'
import '../design/home.css'
// import 'bulma/js/bulma.js';

const images = [
  '/images/0.jpg',
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/6.jpg',
  '/images/7.jpg',
]

class Home extends Component {

  state = {
    image: '/images/0.jpg'
  }

  componentDidMount() {
    this._handleImages()
  }

  _handleImages = () => {
    setInterval(() => {
      let i = images.indexOf(this.state.image)
      i = (i + 1) % images.length;
      this.setState({
        image: images[i]
      })
    }, 3000)
  }

  render() {
    return (
      <section className="hero is-fullheight is-default is-bold">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <p className="title">Victoria Style</p>
                <span className="navbar-burger burger" data-target="navbarMenu">
                <span></span>
                <span></span>
                <span></span>
                </span>
              </div>
              <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                  <div className="tabs is-right">
                    <ul>
                      <li className="is-active"><a>Home</a></li>
                      <li><a href="">Examples</a></li>
                      <li><a href="">Features</a></li>
                      <li><a href="">Team</a></li>
                      <li><a href="">Help</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="subtitle">ask for an appointment!
                  We will do our best to satisfy your wishes!</p>
            <div className="columns is-vcentered">
              <div className="column is-5">
                <figure className="image is-4by3">
                  <img src={this.state.image} alt="Description" />
                </figure>
              </div>
              <div className="column is-6 is-offset-1">
                <p className="subtitle is-1 is-spaced">Available days</p>
                <Dropdown/>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-foot">
          <div className="container">
            <div className="tabs is-centered">
              <ul>
                <li><a>And this is the bottom</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* <script src="../js/bulma.js"></script> */}
      </section>
    )
  }
}

export default Home;
