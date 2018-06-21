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
                </div>
            </div>  
        )  
    }
}

export default Menu
