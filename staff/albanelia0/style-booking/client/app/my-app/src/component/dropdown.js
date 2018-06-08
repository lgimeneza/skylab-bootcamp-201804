
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../desing/dropdown.css'

let day = new Date()
const year = day.getFullYear()

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let month = monthNames[day.getMonth()];
const monthNumber = day.getMonth() + 1
export class Dropdown extends Component {

  state = {
    _month: ''
  }

  componentDidMount(){
    this.setState({
      _month: month,
      _monthNumber:6,
      _year:2018
    })
  }

  changeMonth = (e) => {
    const name = e.target.getAttribute('name')
    if (name == 1) {
      this.setState({
        _month: monthNames[day.getMonth() + 1],
        _monthNumber: day.getMonth() + 2
      })
    } else if (name == 2) {
      this.setState({
        _month:monthNames[day.getMonth() + 2],
        _monthNumber: day.getMonth() + 3
      })
    }else if (name == 3) {
      this.setState({
        _month:monthNames[day.getMonth() + 3],
        _monthNumber: day.getMonth() + 3
      })
    }else {
      this.setState({
        _month: month,
        _monthNumber: day.getMonth() + 1
      })
    }
  }

  changeYear = (e) => {
    const name = e.target.getAttribute('name')
    if (name == 1) {
      this.setState({
        _year: year
      })
    } else if (name == 2) {
      this.setState({
        _year: year+1
      })
    }


  }


  render() {
    return (
      <div>
        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <button class="button is-large" aria-haspopup="true" aria-controls="dropdown-menu3">
              <span>{this.state._year}</span>
              <span class="icon is-small">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu3" role="menu">
            <div class="dropdown-content">
              <a onClick={this.changeYear} name='1' class="dropdown-item">
                {2018}
              </a>
              <a  onClick={this.changeYear} name='2' class="dropdown-item">
                {2019}
            </a>
            </div>
          </div>
        </div>
        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <button class="button is-large" aria-haspopup="true" aria-controls="dropdown-menu4">
              <span>{this.state._month}</span>
              <span class="icon is-small">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu4" role="menu">
            <div class="dropdown-content">
              <a onClick={this.changeMonth} name="1" class="dropdown-item">
                {"July"}
              </a>
              <a onClick={this.changeMonth} name="2" class="dropdown-item">
                {"August"}
              </a>
              <a onClick={this.changeMonth} name="3" class="dropdown-item">
                {"September"}
              </a>
            </div>
          </div>
        </div>
        <div>
          <Link to={`/calendar/${this.state._year}/${this.state._monthNumber}`} className="button is-info is-medium">check days</Link>
        </div>
      </div>
    )
  }
}

