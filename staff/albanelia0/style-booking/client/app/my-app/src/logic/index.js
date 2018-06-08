
import logicApi from 'api'

logicApi.url = 'http://localhost:4000/api'

const logic = {
  userId: 'No-id',

  registerUser({name, surname, email, password}){
    return logicApi.registerUser(name, surname, email, password)
  },

  login({email, password}) {
    return logicApi.authenticateUser(email,password)
      .then(data => {
        this.userId = data.id
        return data
      })
  },

  getBookingHoursForYearMonth(year, month){
    return logicApi.getBookingHoursForYearMonth(year, month)
      .then(res => res)
  }
}

export default logic