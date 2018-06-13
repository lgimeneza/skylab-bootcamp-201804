import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'react-router-dom'
import { ButtonBackToHome } from './buttonBackToHome'
import { Login } from './login'
import moment from 'moment'
import logic from '../logic'
import '../design/calendar.css'
import { Register } from './register';
import BookingHours from './bookingHours';

class Calendar extends Component {
  state = {
    data: [],
    monthDays: 0,
    isChecked: false,
    year: 2018,
    month: 6,
    day: 1,
    clickDay: false
  }

  componentDidMount() {
    this._checkDaysAvailability()
  }

  _checkDaysAvailability = () => {
    const { match: { params: { year, month } } } = this.props

    const monthDays = moment(`${year}-${month}`).daysInMonth()

    logic.getBookingHoursForYearMonth(year, month)
      .then(data => {
        this.setState({
          data,
          monthDays,
          isChecked: true,
          year,
          month
        })
      })
  }
  bookinghoursForDays = (day) => {
    
    this.setState({
      day: day,
      clickDay: true
    }, ()=>{
      const { year, month, day } = this.state
      this.props.history.push(`/calendar/${year}/${month}/${day}`)
    })
  }

  renderBookingData = () => {
    if (!this.state.isChecked) {
      return <i className="fa fa-spinner fa-pulse fa-3x has-text-primary"></i>
    }

    const { monthDays, data } = this.state;

    const cards = [];
    for (let i = 1; i < monthDays + 1; i++) {
      cards.push(i)
    }
    let _dayOfMonth = 0
    return cards.map(day => {
      let bookingClass = 'has-text-primary'

      data.forEach(({ day: bookingDay, bookingHours }) => {
        if (bookingDay === day) {
          if (bookingHours >= 9) {
            bookingClass = 'has-text-danger'
          } else if (bookingHours >= 5) {
            bookingClass = 'has-text-warning'
          } else if (this.state.clicDay) {
            _dayOfMonth = day
          }
        }
      })

      return (
        <div key={day} className='card'>
          <div className="card-content card-days">
            <h1 onClick={()=>this.bookinghoursForDays(day)} className={`title ${bookingClass}`}>{day}</h1>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="container">
        <section>
          <h1 className="calendar-title subtitle">Calendar</h1>
          <hr />
        </section>
        <section className="container-booking-data">
          {this.renderBookingData()}
        </section>
        <div className="footerCalendar">
          <ButtonBackToHome />
          <Link
            className='button is-info'
            to='/login' component={Login}>
            Login
          </Link>
          <Link
            className='button is-info'
            to='/register' component={Register}>
            Register
            </Link>
        </div>
        {this.state.clickDay ? <BookingHours day={this.state.day} /> : <div></div>}
      </div>
    )
  }
}

export default Calendar