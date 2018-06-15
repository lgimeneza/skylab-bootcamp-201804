import React, { Component } from 'react'
import logic from '../../../logic'
import {Link} from 'react-router-dom'
import './index.css'
import ItemsList from '../../items-list'
import Menu from '../../menu'
import Carousel from '../../carousel'


class Categories extends Component {

    state = {
       categories: [],
    }

    componentDidMount() {

        const categoryId = this.props.match.params.categoryId
        
        logic.listSubcategories(categoryId)
        .then(categories => {
            this.setState({
                categories
            })
        })         
    }

   render() {

    return (       
        <div>
        <ItemsList 
            categories={this.state.categories}
        />                       
        </div>  
        )
   }       
}

export default Categories