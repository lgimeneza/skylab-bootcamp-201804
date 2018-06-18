import React, { Component } from 'react'
import logic from '../../../logic'
import {Link} from 'react-router-dom'
import Menu from '../../menu'
import Carousel from '../../carousel'


export default ({products, categories}) => (
        <main>    
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-xs-12">
                        <Carousel/>          
                        <div className="row">
                            <Menu />
                                <div className="col-10 col-lg-10 col-md-8 col-sm-8 col-xs-12">   
                                    <ul>
                                        <div className="row ml-1">
                                            {products && products.map(product => (
                                                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12" key={product.id}>
                                                    <div className="card mb-5">
                                                        <img className="card-img-top" alt={product.name} src={product.image} />
                                                        <div className="card-block">
                                                            <h5 className="card-title">{product.name}</h5>
                                                            <p className="card-text">Precio: {product.price} €/und</p>
                                                            <p className="card-bottom">
                                                                <button className="btn btn-md btn-outline-secondary my-2 my-sm-0 ml-1" type="submit">Detalles</button> 
                                                                <button className="btn btn-md btn-outline-dark my-2 my-sm-0 ml-4" type="submit"><i id='icon' className="fas fa-shopping-cart mr-2"></i>Añadir</button>                                                  
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>))}                                       
                                            {categories && categories.map(category => (
                                            <div className="col-xl-4 col-lg-6 col-md-11 col-sm-12 col-xs-12" >
                                                <div className="card mb-5">
                                                    <Link to={`/category/${category.id}${category.hasChildren ? '/subcategories' : '/products'}`}  ><img className="card-img-top" alt={category.name} src={category.image}/>
                                                    <div className="card-block">
                                                        <h5 className="card-title mt-3">{category.name}</h5>
                                                        {/* <button className="btn btn-md btn-secondary my-2 my-sm-0 w-100 ">{category.name}</button> */}
                                                    </div>
                                                    </Link>
                                                </div>
                                            </div>))}
                                        </div>      
                                    </ul>  
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>          
         
        )

