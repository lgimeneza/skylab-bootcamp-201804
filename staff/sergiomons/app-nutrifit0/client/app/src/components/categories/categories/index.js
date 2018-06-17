import React, { Component } from 'react'
import logic from '../../../logic'
import './index.css'
import ItemsCategories from '../../items-list/items-categories'
import {Animated} from 'react-animated-css'



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
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>

            <ItemsCategories categories={this.state.categories}/>                       
        </Animated>   
        </div>  
        )
   }       
}

export default Categories