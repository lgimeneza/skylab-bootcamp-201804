import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Menu from '../../menu'
import Carousel from '../../carousel'

export default ({categories}) => (
    <main>    
        <Carousel/>          
        <div className="row">
            <Menu />
                <div className="col-10 col-lg-10 col-md-8 col-sm-8 col-xs-12">   
                    <ul>                                  
                        <div className="row ml-1">                                
                            {categories.map(category => (
                            <div className="col-xl-4 col-lg-6 col-md-11 col-sm-12 col-xs-12" >
                                <div className="card mb-5">
                                    <Link to={`/category/${category.id}${category.hasChildren ? '/subcategories' : '/products'}`}  ><img className="card-img-top" alt={category.name} src={category.image}/>
                                    <div className="card-block">
                                        <h5 className="card-title mt-3">{category.name}</h5>                            
                                    </div>
                                    </Link>
                                </div>
                            </div>))}
                        </div> 
                            
                    </ul>  
                </div>
        </div>
    </main>      
    )

