import React from 'react';

const GameOver = ({ score, playAgain }) => {
    return (
        <div className="row justify-content-center">
            <div className="col-8">
                <div className="card">
                    <div className="card-header bg-dark text-white">
                        <h5 className="card-title no-margin">☠ GAME OVER! ☠</h5>
                    </div>
                    <div className="card-body">
                        <h2 className="text-center">
                            🏆 <span className="font-weight-bold">Score:</span>{' '}
                            {score}
                        </h2>
                    </div>
                    <div className="card-footer">
                        <button
                            className="btn btn-info btn-lg btn-block"
                            onClick={() => playAgain()}
                        >
                            Play Again
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameOver;
