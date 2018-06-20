import React, { Component } from 'react'
import logic from '../../logic'
import {Link} from 'react-router-dom'
import './index.css'

class Menu extends Component {

    state = {
       categories: [],
    }

    componentDidMount() {

        logic.listAllCategories()
        .then(categories => {
            this.setState({
                categories
            })
        })       
        
    }

   render() {

    return ( 
        <div className="col-lg-2 col-md-4 col-sm-12 col-xs-12 mb-5">
                <div className="list-group" id="list-tab" role="tablist">
                    {/* <Link to='/' className="list-group-item list-group-item-action" >Productos</Link> */}
                    {/* <Link to={`/category/${category.id}${category.hasChildren ? '/subcategories' : '/products'}`}  ><a className="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="" role="tab" aria-controls="home">Packs</a></Link> */}              
                    {this.state.categories.map(category => {
                        // if (category.name !== 'Individual')
                        return <Link to={`/category/${category.id}${category.hasChildren ? '/subcategories' : '/products'}`} key={category.id} className="list-group-item list-group-item-action">{category.name}</Link>
                    }                         
                    )}
                    {/* <Link to=<p className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="" role="tab" aria-controls="profile">Carnes</p>
                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="" role="tab" aria-controls="profile">Pastas</a>
                    <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="" role="tab" aria-controls="messages">Pescados</a>
                    <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="" role="tab" aria-controls="settings">Proteínas</a>
                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="" role="tab" aria-controls="profile">Sopas</a>
                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="" role="tab" aria-controls="profile">Vegetarian</a>
                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="" role="tab" aria-controls="profile">Vegan</a> */}
                </div>
            </div>  
        )  
    }
}

export default Menu
