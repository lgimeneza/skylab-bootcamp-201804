import React, { Component } from 'react'
import logic from '../../logic'
import {Link} from 'react-router-dom'
import './index.css'

class Nav extends Component {

    state = {

    }

   render() {

    return (
        <div>        
           <header>
             
                <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                        <a className="navbar-brand" href="">Nutrifit</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categories
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="">Packs</a>
                                <a className="dropdown-item" href="">Individuals</a>
                                <div className="dropdown-divider"></div>
                                
                                </div>
                            </li>
        
                            <li className="nav-item">
                                <a className="nav-link" href="">Products</a>
                            </li>
                        </ul>
                        <form className="form-inline form-sm my-2 my-lg-0">
                            <input className="form-control-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-sm btn-outline-warning my-2 my-sm-0 mr-2" type="submit">Search</button>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/register"><button className="btn btn-sm btn-success my-2 my-sm-0 ml-5" type="submit">Sing Up</button></Link></li>
                            <li><Link to="/auth"><button className="btn btn-sm btn-primary my-2 my-sm-0 ml-3" type="submit">Login</button></Link></li>
                        </ul>
                    </div>
                    </nav>
                </header>
        </div>
        )
    }
}       


export default Nav