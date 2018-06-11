import React, {Component} from 'react'
import logic from '../../logic'
import swal from 'sweetalert'
import './upload-picture.css';

class UploadPic extends Component {

    state = {
        xxx: '',
    }

    capture = (e) => {
        const xxx = e.target.value
        this.setState({ xxx })
    }
    
    redirectLanding = () =>{
        this.props.history.push('/')
    }

    redirectRegister = () => {
        this.props.history.push("/users");
      };
    
    render() {
        return (
            <div>
                
                <div id="wrapper">
                    <header id="header-wrapper-login">
                        <div id="header-login">
                            <div id="menu1-login">
                                <ul>
                                    <li className="menu_link">
                                        <a>Homepage</a>
                                    </li>
                                    <li className="menu_link">
                                        <a>Castings</a>
                                    </li>
                                </ul>
                            </div>
                            <div id="logo-login">
                                <h1>
                                    <a onClick={this.redirectLanding}>CastMe </a>
                                </h1>
                            </div>
                            <div id="menu2-login">
                                <ul>
                                    <li className="menu_link">
                                        <a>About</a>
                                    </li>
                                    <li className="menu_link">
                                        <a>Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </header>

                    <div id="page-login">


                        <div className="post-login">
                            
                        </div>



                    </div>
                    
                </div>

            <div id="footer-login">
                <p>&copy; CastMe. All rights reserved.</p>
            </div>  

            </div>
        )
    }


}

export default UploadPic