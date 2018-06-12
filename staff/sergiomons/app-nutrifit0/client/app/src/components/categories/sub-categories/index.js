import React, { Component } from 'react'
import logic from '../../../logic'
import {Link} from 'react-router-dom'
import './index.css'
import Menu from '../../menu'
import Carousel from '../../carousel'

class Subcategories extends Component {

    state = {
        subcategories: [],
        categories: ''
    }

    
    componentDidMount() {

        logic.listSubcategories()
          .then(subcategories => {
                this.setState({
                    subcategories
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
                                            {this.state.subcategories.map(subcategory => {
                                            return ( 
                                                <div className="col-xl-4 col-lg-6 col-md-11 col-sm-12 col-xs-12" >
                                                    <div className="card mb-5">
                                                        <img className="card-img-top" alt={subcategory.name} src={subcategory.image} />
                                                        <div className="card-block">
                                                            <h5 className="card-title">{subcategory.name}</h5>
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

export default Subcategories

