import React from 'react'
import logic from '../logic'
import moment from 'moment'

function createBooking() {
  let checkedList = localStorage.getItem("checkedList")
  checkedList = JSON.parse(checkedList)
  let userId = localStorage.getItem("id")
  let date = localStorage.getItem("date")
  let hour = localStorage.getItem("hour")
  
  const _date = moment(date + " " + hour).format()
  console.log(_date)

  const serviceIds = []
  if (checkedList) {

    checkedList.map(service => {
      console.log(service)
      serviceIds.push(service.serviceId)
    })
  }
  console.log({userId, serviceIds, _date})
  return logic.placeBooking(userId, serviceIds, _date)//falta la hora
    .then(booking => {
      if (booking == "unavailable") {
        // alerta de prueba
        alert("los servicios superan el limite de horas disponibles!lo siento! pero deberias elegir otra hora dispobible")
        return false
      } else {
        return true
      }

      //return booking
    })

}


export default createBooking