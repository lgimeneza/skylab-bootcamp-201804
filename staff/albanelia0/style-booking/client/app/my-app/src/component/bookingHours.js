import React, { Component } from 'react'
import logic from '../logic'
import Calendar from './calendar'

const START_DAY = 8
const END_DAY = 17

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


  componentDidMount(props) {
    const { day } = this.props
    logic.getBookingHoursForYearMonthDay(2018, 6, 12)
      .then(apiResponse => {
        daysHours.map((hour) => {
          apiResponse.forEach((busyRange) => {
            if (hour.value >= busyRange.start && hour.value < busyRange.end) {
              hour.available = false
            }
          })
        })

        console.log(daysHours)
      })
  }

  render() {
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    )
  }
}

export default BookingHours