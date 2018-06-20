import React, { Component } from 'react'
import logic from '../../logic'
import './index.css'
import ItemsCategories from '../../components/items-list/items-categories'

class Categories extends Component {

    state = {
       categories: [],
    }

    componentDidMount() {

        const categoryId = this.props.categoryId
        
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
            <ItemsCategories categories={this.state.categories}/>                          
        </div>  
        )
   }       
}

export default Categories