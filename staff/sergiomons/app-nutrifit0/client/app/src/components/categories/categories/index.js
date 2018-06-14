import React, { Component } from 'react'
import logic from '../../../logic'
import {Link} from 'react-router-dom'
import './index.css'
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
        <main>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Carousel/>          
                        <div className="row">
                            <Menu />
                            <div className="col-10 col-lg-10 col-md-8 col-sm-8 col-xs-12">
                                <ul>
                                    <div className="row ml-3">
                                        {this.state.categories.map(category => {
                                        return ( 
                                            <div className="col-xl-4 col-lg-6 col-md-11 col-sm-12 col-xs-12" >
                                                <div className="card mb-5">
                                                    <Link to={`category/${category.id}${category.hasChildren ? 'subcategories' : 'products'}`}><img className="card-img-top" alt={category.name} src={category.image} /> </Link>
                                                    <div className="card-block">
                                                        <h5 className="card-title" onClick={() => this.selectCategory(category.id)}>{category.name}</h5>
                                                    </div>
                                                </div>
                                        </div>
                                        )})}
                                    </div>      
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        )
   }       
}

export default Categories