import React, { Component } from 'react'
import logic from '../../logic'
import { Link } from 'react-router-dom'
import './index.css'
// import logic from '../../logic'

class Nav extends Component {
    
    state = {
        categories: []
    }

    componentDidMount(props) {

        logic.listRootCategories()
            .then(categories => {
                this.setState({
                    categories
                })
            })
    }

    logout() {
        logic.logout()
        this.props.location.push('/')
    }

    render() {

        return (
            
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                        <a className="navbar-brand mr-4" href="">Nutrifit</a>
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
                                        Categorías
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        { 
                                            this.state.categories.map(category => {
                                                return <Link to={`/category/${category.id}${category.hasChildren ? '/subcategories' : '/products'}`} className="dropdown-item" href="" key={category.id}>{category.name}</Link>
                                            })
                                        }
                                        <div className="dropdown-divider"></div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Productos</a>
                                </li>
                            </ul>
                            <form className="form-inline form-sm my-2 my-lg-0 mr-4">
                                <input className="form-control-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-sm btn-outline-warning my-2 my-sm-0 mr-2" type="submit">Search</button>
                            </form>
                            <i id="iconNav" className="fas fa-shopping-cart mr-4"><span id="numBadget" class="badge badge-pill badge-danger">1</span></i>
                            {!logic.loggedIn ? (
                                <ul className="nav navbar-nav navbar-right">
                                    <li><Link to="/register"><button className="btn btn-sm btn-secondary my-2 my-sm-0" type="submit">Sing Up</button></Link></li>
                                    <li><Link to="/auth"><button className="btn btn-sm btn-dark my-2 my-sm-0" type="submit">Login</button></Link></li>
                                </ul>) : (
                                    <ul className="nav navbar-nav navbar-right">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                {this.props.userData.username}
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" href="">Mi Cuenta</a>
                                                <div class="dropdown-divider"></div>
                                                <a className="dropdown-item" href="" onClick={this.logout}>Cerrar sesión</a>
                                                <div className="dropdown-divider"></div>
                                            </div>
                                        </li>
                                    </ul>)}
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Nav



