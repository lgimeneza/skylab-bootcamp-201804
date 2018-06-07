
import React, { Component } from 'react';
import '../desing/dropdown.css'

let day = new Date()
const year = day.getFullYear()

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

 const month = monthNames[day.getMonth()];

function Dropdown(props) {

  return (
    <div>
      <div class="dropdown is-hoverable">
        <div class="dropdown-trigger">
          <button class="button is-large" aria-haspopup="true" aria-controls="dropdown-menu3">
          <span>{year}</span>
          <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu3" role="menu">
          <div class="dropdown-content">
            <a href="#" class="dropdown-item">
            Overview
            </a>
            <a href="#" class="dropdown-item">
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
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu4" role="menu">
          <div class="dropdown-content">
            <a href="#" class="dropdown-item">
              Overview
            </a>
            <a href="#" class="dropdown-item">
              Overview
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
