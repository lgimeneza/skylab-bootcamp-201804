import React, { Component } from 'react'
import logic from '../logic'
import '../design/profile.css'

class Profile extends Component {
  state = {
    userBookings: <div />,
    result: [],
  }

  componentWillMount() {
    this.listBookingUser().then(bookings => {
      this.setState({ userBookings: bookings })
    })
  }

  listBookingUser = () => {
    let token = localStorage.getItem("token")
    logic.setToken(token)
    if (token) {

      let userId = localStorage.getItem("id")
      return logic.listBookingUser(userId)
        .then(result => {
          if (result.length > 0) {
            this.setState({ result })
          } else {
            return <div>No bookings!</div>
          }
        })
    }
  }
  aler(){
    alert('funciona!!')
  }

  listBookingBox = () => {
    return this.state.result.map(result => {
      return (
        < div className="booking">
          <article className="media">
            <div className="media-left">
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong className="tag is-primary">{result.services.map(service => service.serviceName)}</strong>
                  <br />
                  <ul>
                    {<li>Date:{result.date}</li>}
                    {<li>EndDate:{result.endDate}</li>}
                    {<li>Duration:{result.services.map(service => service.duration)}</li>}
                    {<li>Price:{result.services.map(service => service.price)}</li>}
                  </ul>
                </p>
              </div>
              <nav className="level is-mobile">
                <div className="level-left">
                  <a className="level-item" aria-label="like">
                    <span className="icon is-small">
                      <i className="fa fa-heart" aria-hidden="true"></i>
                    </span>
                    <span className="icon is-small">
                      <i onClick={this.aler} className=" delete  delete-booking is-danger" aria-hidden="true"></i>
                    </span>
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </div>
      )
    })
  }

  render() {
    return (
      <di>
        <h1 className="subtitle">Mys Bookings</h1>
        <div className="box bookingBox">
          {this.listBookingBox()}
        </div>
      </di>
    )
  }

}
export default Profile