import React, { Component } from 'react'
import './index.css'


class LandingMain extends Component {

    render() {
        return (
            <main>
                <div className="row">
                    <div className="col-lg-4">
                        <img className="rounded-circle" src="/images/hayley.png" alt="Generic placeholder" width={140} height={140} />
                        <br />
                        <br />
                        <br />
                        <h2>Lorem</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula
            ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p>
                            <a className="btn btn-secondary" role="button">View details »</a>
                        </p>
                    </div>
                    {/* /.col-lg-4 */}
                    <div className="col-lg-4">
                        <img className="rounded-circle" src="/images/corey.png" alt="Generic placeholder" width={140} height={140} />
                        <br />
                        <br />
                        <br />
                        <h2>Ipsum</h2>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis
                          consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh.</p>
                        <p>
                            <a className="btn btn-secondary" role="button">View details »</a>
                        </p>
                    </div>
                    {/* /.col-lg-4 */}
                    <div className="col-lg-4">
                        <img className="rounded-circle" src="/images/bruno-mars.png" alt="Generic placeholder" width={140} height={140} />
                        <br />
                        <br />
                        <br />
                        <h2>Amet</h2>
                        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta
                          felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
            massa justo sit amet risus.</p>
                        <p>
                            <a className="btn btn-secondary" role="button">View details »</a>
                        </p>
                    </div>
                    {/* /.col-lg-4 */}
                </div>
            </main>
        )
    }

}

export default LandingMain