import React, { Component } from "react";
import { Col, CardImg, Button } from 'reactstrap'
import DropNCrop from '@synapsestudios/react-drop-n-crop';
import '@synapsestudios/react-drop-n-crop/lib/react-drop-n-crop.min.css';
import logic from "../../logic"

class UploadPictureProfile extends Component {

  urlImageDefault = "https://placeholdit.imgix.net/~text?txtsize=33&txt=180%C3%97180&w=180&h=180"

  state = {
    result: this.urlImageDefault,
    image: null,
    filename: null,
    filetype: null,
    src: null,
    error: null
  }

  onChange = value => {
    console.log(value)
    this.setState(value);
  }

  clearImage = () => {
    this.setState({ result: this.urlImageDefault, image: "", filename: "", filetype: "", src: "", error: "" });
  }


  uploadHandler = (event) => {

    logic.uploadImageProfile(this.state.result)
      .then((data) => {

        console.log(data)
      })
  }


  render() {
    return (<div>
      <h2>Picture Profile</h2>
      <Col xs={{ size: 8, offset: 2 }} sm={{ size: 6, offset: 3 }} md={{ size: 4, offset: 4 }}>

        <DropNCrop maxFileSize={3145728} cropperOptions={{ aspectRatio: 1, guides: true, viewMode: 0, autoCropArea: 0 }} canvasHeight={"35vw"} canvasWidth={"35vw"} onChange={this.onChange} value={this.state} />
        <div style={{ borderRadius: "50%", width: "18vw", height: "18vw", overflow: "hidden", display: "inline-block", position: "relative" }}>
          <img width="100%" style={{ margin: "0", position: "absolute", left: "0", width: "100%" }} src={this.state.result} alt="image user" />
        </div>
        <Button onClick={this.clearImage} color="secondary">clear</Button>{' '}
      </Col>

      <button onClick={this.uploadHandler}>Upload!</button>

    </div>
    )
  }
} 

export default UploadPictureProfile