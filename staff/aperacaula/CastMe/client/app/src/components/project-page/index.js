import React, { Component } from "react";
import Header from "../header";
import logic from "../../logic";

class ProjectPage extends Component {
  state = {
    name: "",
    surname: "",
    profilePicture: "",
    title: "",
    publishedDate: "",
    endDate: "",
    province: "",
    description: "",
    castings: "",
    paid: "",
    professional: "",
    situation: ""
  };

  componentDidMount() {
    if (logic.userId) {
      logic.retrieveUserLite(logic.userId)
        .then(({ name, surname, profilePicture }) => {
          this.setState({
            name,
            surname,
            profilePicture
          });
          return true
        })
        .then(()=>{
            logic.retrieveProject(this.props.projectId)
              .then(
                ({
                  title,
                  publishedDate,
                  endDate,
                  province,
                  description,
                  castings,
                  paid,
                  professional,
                  situation
                }) => {
                  this.setState({
                    title,
                    publishedDate,
                    endDate,
                    province,
                    description,
                    castings,
                    paid,
                    professional,
                    situation
                  });
                }
              );

        })
        
    }
  }

  printDate(date) {
    const day = Number(date.substring(8, 10));
    const month = Number(date.substring(5, 7));
    const year = Number(date.substring(0, 4));
    return `${day}/${month}/${year}`;
  }

  render() {
    return (
      <div>
        <div id="wrapper-login">
          <Header
            profilePicture={this.state.profilePicture}
            name={this.state.name}
            surname={this.state.surname}
          />

          <div id="page">
            <div id="page-bgtop">
              <div id="page-bgbtm">
                <div className="post-home">
                  <div className="entry">
                    <h3>Title</h3>
                    <p>{this.state.title}</p>
                    <h3>Description</h3>
                    <p>{this.state.description}</p>
                    <h3>Opened from:</h3>
                    <p>{this.printDate(this.state.publishedDate)}</p>
                    <h3>Closes on:</h3>
                    <p>{this.printDate(this.state.endDate)}</p>
                    <h3>Professional</h3>
                    <p>{this.state.professional && 'Yes' || 'No'}</p>
                    <h3>Castings:</h3>
                    {/* <p>{this.state.castings.map(casting=>{
                        return (<span>casting.title</span>)
                    })}</p> */}
                  </div>
                </div>

                <div style={{ clear: "both" }}>&nbsp;</div>
              </div>
            </div>
          </div>

          <div id="three-columns" />
        </div>
        <div id="footer">
          <p>&copy; CastMe. All rights reserved.</p>
        </div>
      </div>
    );
  }
}

export default ProjectPage;
