import React, { Component } from "react";
import axios, { post } from 'axios';
import {Col,CardImg, Button} from 'reactstrap'
import Dropzone from 'react-dropzone';
import request from 'superagent';
// import Cropper from 'react-crop';
// import 'react-crop/css';

import DropNCrop from '@synapsestudios/react-drop-n-crop';
import '@synapsestudios/react-drop-n-crop/lib/react-drop-n-crop.min.css';
import logic from "../../logic"

class UploadPicture extends Component {
 
    urlImageDefault="https://placeholdit.imgix.net/~text?txtsize=33&txt=180%C3%97180&w=180&h=180"

    state ={
      result: this.urlImageDefault,
      image: null,
      filename: null,
      filetype: null,
      src: null,
      error: null,
     
  } 

  onChange = value => {
    console.log(value)
    this.setState(value);
  }

  clearImage = ()=>{
    this.setState({result:this.urlImageDefault,image:"",filename:"",filetype:"",src:"",error:""});
  }


  // submitImage= (e)=>{
  //   e.preventDefault() 
  //   this.fileUpload(this.state.image).then((response)=>{
  //     console.log(response.data);
  //   })
  // }


// fileUpload= file=>{
//     const url = 'http://example.com/file-upload';
//     const formData = new FormData();
//     formData.append('file',file)
//     const config = {
//         headers: {
//             'content-type': 'multipart/form-data'
//         }
//     }
//     return  post(url, formData,config)
//   }


  // onImageDrop(files) {
  //    let reader = new FileReader();
  //   const file =files[0]
  //   console.log(file)

  //   reader.onloadend = () => {
  //     console.log(reader)
  //     this.setState({
  //       image:file,
  //       result: reader.result
  //     });
  // }
  // reader.readAsDataURL(file)
  // }

fileChangedHandler =(event)=>{
  console.log(event.target.files[0],"----",this.state.result)
}


uploadHandler =(event)=>{

  logic.uploadImage(this.state.result)
  .then((data) => {
    
  console.log(data)
})
}


 



  render() {
    return (<div>

                <Col xs={{ size: 8, offset: 2 }} sm={{ size: 6, offset: 3 }} md={{ size: 4, offset: 4 }}>
                  
                  <DropNCrop cropperOptions={{ aspectRatio:1, guides:true, viewMode: 0, autoCropArea: 0}} canvasHeight={"35vw"}  canvasWidth={"35vw"}  onChange={this.onChange} value={this.state} />
                  <div style= { { borderRadius: "50%",   width: "18vw", height: "18vw", overflow: "hidden" , display: "inline-block",  position: "relative"}}>
                        <img width="100%" style= { {margin: "0",  position: "absolute",  left: "0", width:"100%"}} src={this.state.result} alt="image user" />
                  </div> 
                  <Button onClick={this.clearImage} color="secondary">clear</Button>{' '}

                                {/* <Dropzone style= { { width: "100%"}}
                    multiple={false}
                    accept="image/*"
                    onDrop={this.onImageDrop.bind(this)}>
                    <p>Drop an image or click to select a file to upload.</p>
                    <div style= { { borderRadius: "50%",   width: "18vw", height: "18vw", overflow: "hidden" , display: "inline-block",  position: "relative"}}>
                    <img width="100%" style= { {margin: "0",  position: "absolute",  left: "0", width:"100%"}} src={this.state.result} alt="image user" />
                    </div>            
                  </Dropzone> */}
              </Col>    


              <button onClick={this.uploadHandler}>Upload!</button>
 
      </div>
  )
  }
}




// class UploadPicture extends Component {

//   state = {
//     result: null,
//     filename: null,
//     filetype: null,
//     src: null,
//     error: null,
//   };
 
//   onChange = value => {
//     this.setState(value);
//   };
 
//   render() {
//     return <DropNCrop onChange={this.onChange} value={this.state} />;
//   }

// }


export default UploadPicture