import React from 'react'
import logic from '../logic'
import moment from 'moment'
import BookingHours from './bookingHours';

function createBooking(props) {

  const { date, hour, checkedList } = props
  
    let userId = "5b1errrb37t33c4b1014594d"
    let bookingCompleted = false

  
  // getUserId() {

  //   if (localStorage.getItem(id)) {

  //     this.setState({
  //       _userId: id
  //     })
  //   }

  // }
    return (
      <div>
        {() => this.placeBooking}
      </div>

    )
  placeBooking(date, hour, checkedList )

}
function placeBooking(date, hour, checkedList ) {
  const serviceIds = []
  if (checkedList) {

    checkedList.map(service => {
      serviceIds.push(service.serviceId)
    })
  }

  logic.placeBooking(this.state.userId, serviceIds, date)//falta la hora
    .then(booking => {
      if (booking == "unavailable") {
        // alerta de prueba
        alert("los servicios super el limite de horas disponibles!lo siento! pero deberias elegir otra hora dispobible")
      }
      return booking
    })
}

export default createBooking