import React from 'react'
import { withRouter } from 'react-router-dom'

function InputUser(props) {
  return (
    <div>
      <label>Name</label>
      <input type="text" value=""/>
    </div>
  )
}

export default withRouter(InputUser)