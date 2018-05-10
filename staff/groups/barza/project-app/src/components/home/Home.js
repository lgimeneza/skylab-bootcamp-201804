import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Header from '../header/Header';

class Home extends Component {
    state = {
        isLogged: true,
        question: {}
    };

    componentDidMount() {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'));
            const token = user.token;

            token.length
                ? this.setState({ isLogged: true })
                : this.setState({ isLogged: false });
        }
    }

    getQuestion = () => {};

    startGame = () => {};

    render() {
        return !this.state.isLogged ? (
            <Redirect to="/" />
        ) : (
            <div>
                <Header isLogged={this.state.isLogged} />

                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-xs-10 col-sm-10 col-md-6 col-lg-6">
                            <button
                                onClick={this.startGame}
                                className="btn btn-primary btn-lg btn-block"
                            >
                                PLAY!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

// <div className="card">
//                                 <img
//                                     className="card-img-top"
//                                     src="..."
//                                     alt="Card cap"
//                                 />
//                                 <div className="card-body">
//                                     <p>Informacion</p>
//                                 </div>
//                             </div>
