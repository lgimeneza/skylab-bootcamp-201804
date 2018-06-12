import React, { Component } from 'react'
import logic from '../../logic'
import {Link} from 'react-router-dom'
import './index.css'


class Menu extends Component {

   render() {

    return (
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-12 mb-5">
                <div className="list-group" id="list-tab" role="tablist">
                    <a className="list-group-item list-group-item-action active" id="list-profile-list" data-toggle="list" href="" role="tab" aria-controls="profile">Productos</a>
                    <a className="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="" role="tab" aria-controls="home">Packs</a>
                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="" role="tab" aria-controls="profile">Carnes</a>
                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="" role="tab" aria-controls="profile">Pastas</a>
                    <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="" role="tab" aria-controls="messages">Pescados</a>
                    <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="" role="tab" aria-controls="settings">Proteínas</a>
                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="" role="tab" aria-controls="profile">Sopas</a>
                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="" role="tab" aria-controls="profile">Vegetarian</a>
                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="" role="tab" aria-controls="profile">Vegan</a>
                </div>
            </div>  

        )
   }       
}

export default Menu