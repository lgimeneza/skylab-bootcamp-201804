import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ButtonBackToHome } from './buttonBackToHome'
import {Login} from './login'
import moment from 'moment'
import logic from '../logic'
import '../desing/calendar.css'
import {Register} from './register';

class Calendar extends Component {
  state = {
    data: [],
    monthDays: 0,
    isChecked: false
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
          isChecked: true
        })
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

    return cards.map(day => {
      let bookingClass = 'has-text-primary'

      data.forEach(({ day: bookingDay, bookingHours }) => {
        if (bookingDay === day) {
          if (bookingHours >= 9) {
            bookingClass = 'has-text-danger'
          } else if (bookingHours >= 5) {
            bookingClass = 'has-text-warning'
          }
        }
      })

      return (
        <div key={day} className='card'>
          <div className="card-content card-days">
            <h1 className={`title ${bookingClass}`}>{day}</h1>
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
      </div>
    )
  }
}

export default Calendar