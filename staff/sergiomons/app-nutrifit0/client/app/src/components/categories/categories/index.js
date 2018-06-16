import React, { Component } from 'react'
import logic from '../../../logic'
import {Link} from 'react-router-dom'
import './index.css'
import ItemsList from '../../items-list'
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

            <ItemsList categories={this.state.categories}/>                       
        </Animated>   
        </div>  
        )
   }       
}

export default Categories