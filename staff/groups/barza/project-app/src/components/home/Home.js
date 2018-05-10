import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import swal from 'sweetalert2';

import Header from '../header/Header';
import GameOver from './../gameOver/GameOver';

import MoviesService from './../../logic/movies';

class Home extends Component {
    state = {
        isLogged: true,
        isLoading: true,
        isGameStarted: false,
        answerPlayer: '',
        question: {},
        score: 0,
        rounds: 0,
        isGameOver: false
    };

    componentDidMount() {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'));
            const token = user.token;

            token.length && this.setState({ isLogged: true });
        } else {
            this.setState({
                isLogged: false
            });
        }
    }

    handleAnswerPlayer = e => {
        const value = e.target.value;

        this.setState({
            answerPlayer: value
        });
    };

    startGame = () => {
        this.getQuestion().then(res => {
            this.setState({
                question: res,
                isLoading: false,
                isGameStarted: true,
                isGameOver: false,
                score: 0,
                rounds: 0,
                answerPlayer: ''
            });
        });
    };

    getQuestion = () => {
        return MoviesService.getQuestion().then(res => res);
    };

    handleSubmitAnswer = e => {
        e.preventDefault();

        let { rounds, score } = this.state;

        if (rounds === 3) {
            this.setState({
                isGameOver: true
            });
        } else {
            let newScore = score;

            if (
                MoviesService.checkAnswer(
                    this.state.answerPlayer,
                    this.state.question.name
                )
            ) {
                swal({
                    title: 'Great!!',
                    type: 'success'
                });

                newScore++;
            } else {
                swal({
                    title: 'ooh...Fail...',
                    text: 'Correct answer: ' + this.state.question.name,
                    type: 'error'
                });
            }

            const newRounds = rounds + 1;

            this.getQuestion().then(res => {
                this.setState({
                    question: res,
                    isLoading: false,
                    rounds: newRounds,
                    score: newScore,
                    answerPlayer: ''
                });
            });
        }
    };

    renderQuestion = () => {
        if (!this.state.isGameStarted) return;
        if (this.state.isLoading) return <span>Loading question...</span>;

        if (this.state.isGameOver)
            return (
                <GameOver score={this.state.score} playAgain={this.startGame} />
            );

        const { img, id, birthday, born, movies, name } = this.state.question;
        return (
            <div className="row justify-content-center">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                    <div className="card mb-3">
                        <img
                            className="card-img-top"
                            src={img}
                            alt="Card cap"
                        />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-body bg-secondary text-white">
                            <p>Información</p>
                            <p>{birthday}</p>
                            <p>{born}</p>
                            <ul className="list-group text-dark">
                                {movies.map(movie => {
                                    return (
                                        <li
                                            key={movie.id}
                                            className="list-group-item"
                                        >
                                            {movie.title}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="card-footer">
                            <form onSubmit={this.handleSubmitAnswer}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={this.handleAnswerPlayer}
                                        placeholder="Enter the name of the actor/actress"
                                        value={this.state.answerPlayer}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-info btn-block"
                                >
                                    Try
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    render() {
        return this.state.isLogged === false ? (
            <Redirect to="/" />
        ) : (
            <div>
                <Header isLogged={this.state.isLogged} />

                <div className="container mt-5">
                    {!this.state.isGameStarted && (
                        <div className="row justify-content-center">
                            <div className="col-xs-10 col-sm-10 col-md-6 col-lg-6">
                                <button
                                    onClick={this.startGame}
                                    className="btn btn-info btn-lg btn-block mb-3"
                                >
                                    PLAY!
                                </button>
                            </div>
                        </div>
                    )}

                    {this.renderQuestion()}
                </div>
            </div>
        );
    }
}

export default Home;
