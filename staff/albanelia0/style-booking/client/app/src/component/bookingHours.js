import React, { Component } from 'react'
import logic from '../logic'
import Calendar from './calendar'
import swal from 'sweetalert2'
import createBooking from '../helpers/createBooking'
import '../design/bookingHours.css'

const START_DAY = 8
const END_DAY = 17
let hourClicked = 0

let daysHours = []
for (let h = START_DAY; h <= END_DAY; h += 0.25) {
  const justTheHour = Math.floor(h)
  const justTheMinutes = (h - justTheHour) * 60

  daysHours.push({
    value: h,
    hour: `${justTheHour}:${justTheMinutes || '00'}`,
    available: true
  })
}
// GENERATES SOMETHING LIKE THIS:
// let daysHours = [
//   {
//     hour: "8:00", value: 8, available: true
//   },
//   {
//     hour: "8:15", value: 8.25, available: true
//   },
//   {
//     hour: "8:30", value: 8.5, available: true
//   }
// ]


class BookingHours extends Component {

  state = {
    date: [1],

  }

  finishBooking = (hour) => {

    localStorage.setItem("date", this.state.date)
    localStorage.setItem("hour", hour)


    // if (result) {

    // PASARLO A SWEETALERT2

    let token = localStorage.getItem("token")
    if (!token) {
      swal({
        type: 'success',
        title: 'perfect! logueate para guardar tu reserva y listo!',
      })

      this.props.history.push('/login')
    } else {
      createBooking().then(res => {
        console.log(res)
        if (res) {
          swal({
            type: 'success',
            title: 'Reserva completada! ves a tu perfil!',
          })
          this.props.history.push('/profile')
        } else {
          let date = localStorage.getItem("date")
          console.log(date)
          let _date = date.replace(/\,/g, "/")
          console.log(_date)
          this.props.history.push(`/calendar/${_date}`)
        }
      })
    }
  }


  componentDidMount = (props) => {
    const { match: { params: { year, month, day } } } = this.props
    console.log(year, month, day)

    this.setState({
      date: [year, month, day]

    })
    logic.getBookingHoursForYearMonthDay(year, month, day)
      .then(apiResponse => {
        return daysHours.map((hour) => {
          apiResponse.forEach((busyRange) => {
            if (hour.value >= busyRange.start && hour.value < busyRange.end) {
              hour.available = false
            }
          })
          return hour
        })
      })
      .then((daysHoursApplied) => console.log(daysHoursApplied))
  }

  displayHours() {

    return daysHours.map(hour => {
      let bookingClass = 'has-text-primary'

      if (!hour.available) {
        bookingClass = 'has-text-danger'
      }

      return (
        <div key={hour} className='card  card-hours'>
          <div className="card-content">

            <h1 onClick={() => this.finishBooking(hour.hour)} className={`title ${bookingClass}`}>{hour.hour}</h1>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <section>
          <h1 className="calendar-title subtitle">Hours of day</h1>
          <hr />
        </section>
        <div className="content-hours">
          {this.displayHours()}
        </div>
      </div>
    )
  }
}

export default BookingHours