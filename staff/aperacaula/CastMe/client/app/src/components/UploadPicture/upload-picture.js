import React, { Component } from "react";
//import logic from "../../logic";
import "./upload-picture.css";
import DropNCrop from "@synapsestudios/react-drop-n-crop";
import "@synapsestudios/react-drop-n-crop/lib/react-drop-n-crop.min.css";

class UploadPic extends Component {
    urlImageDefault = "https://placeholdit.imgix.net/~text?txtsize=33&txt=180%C3%97180&w=180&h=180"

    state = {
        result: this.urlImageDefault,
        image: null,
        filename: null,
        filetype: null,
        src: null,
        error: null
      }

  capture = e => {
    const xxx = e.target.value;
    this.setState({ xxx });
  };

  redirectLanding = () => {
    this.props.history.push("/");
  };

  redirectRegister = () => {
    this.props.history.push("/users");
  };

  clearImage = () => {
    this.setState({ result: this.urlImageDefault, image: "", filename: "", filetype: "", src: "", error: "" });
  }

  uploadHandler = (event) => {

    sessionStorage.setItem('profilePic', this.state.result)
    this.props.history.push('/users')
    // logic.uploadImageProfile(this.state.result)
    //   .then((data) => {
 
    //     console.log(data)
    //   })
  }

  onChange = value => {
    console.log(value)
    this.setState(value);
  }

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
            <section className="images-menu">
              <DropNCrop
                maxFileSize={3145728}
                cropperOptions={{
                  aspectRatio: 1,
                  guides: true,
                  viewMode: 0,
                  autoCropArea: 0
                }}
                canvasHeight={"25vw"}
                canvasWidth={"25vw"}
                onChange={this.onChange}
                value={this.state}
              />
              <div>
                <img width="100px" src={this.state.result} alt=''/>
              </div>
              
              <div>
              <button className="link-style" onClick={this.uploadHandler}>Upload!</button>
              <button className="link-style" onClick={this.clearImage}>Clear</button>
              <button className="link-style" onClick={this.redirectRegister}>Back</button>
              </div>
            </section>
            </div>

          </div>
        </div>
        <div id="three-columns" >
        </div>
        <div id="footer">
          <p>&copy; CastMe. All rights reserved.</p>
        </div>
      </div>
    );
  }
}

export default UploadPic;
