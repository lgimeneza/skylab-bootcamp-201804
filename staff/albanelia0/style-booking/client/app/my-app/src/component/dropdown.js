
import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import '../desing/dropdown.css'

let day = new Date()
const year = day.getFullYear()

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const month = monthNames[day.getMonth()];
const monthNumber = day.getMonth()+1

export class Dropdown extends Component {

 
render(){
  return (
    <div>
      <div class="dropdown is-hoverable">
        <div class="dropdown-trigger">
          <button class="button is-large" aria-haspopup="true" aria-controls="dropdown-menu3">
            <span>{year}</span>
            <span class="icon is-small">
              <i class="fa fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu3" role="menu">
          <div class="dropdown-content">
            <a class="dropdown-item">
              Overview
            </a>
            <a class="dropdown-item">
              Overvie
            </a>
          </div>
        </div>
      </div>
      <div class="dropdown is-hoverable">
        <div class="dropdown-trigger">
          <button class="button is-large" aria-haspopup="true" aria-controls="dropdown-menu4">
            <span>{month}</span>
            <span class="icon is-small">
              <i class="fa fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu4" role="menu">
          <div class="dropdown-content">
            <a onClick={this.changeMonth} class="dropdown-item">
              {"July"}
            </a>
            <a onClick={this.changeMonth} class="dropdown-item">
              {"August"}
            </a>
            <a onClick={this.changeMonth} class="dropdown-item">
              {"September"}
            </a>
          </div>
        </div>
      </div>
      <div>
        <Link to={`/calendar/${year}/${monthNumber}`} className="button is-info is-medium">check days</Link>
      </div>
    </div>
  )
}
}

