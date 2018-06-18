import React, { Component } from 'react'
import logic from '../../../logic'


 


export default ({products}) => (

    <div className="container-fluid">
        <div className="row mt-5">
            <div className="col-md-3">
                Producto
            </div>
            <div className="col-md-2">
                Precio
            </div>
            <div className="col-md-2">
                Cantidad
            </div>
            <div className="col-md-2">
                Total
            </div>
            <div className="col-md-1">
                X
            </div>
            <div className="col-md-2">
            </div>
        
                <div className="col-12 col-lg-12 col-md-10 col-sm-10 col-xs-12 text-left" >   
                    {products.map(product => (
                        <ul >                                  
                            <div className="row mt-4 text-left" id="items">
                                <div className="col-md-3 text-left">
                                {product.name}
                                </div>
                                <div className="col-md-2">
                                </div>
                                <div className="col-md-2">
                                </div>
                                <div className="col-md-2">
                                </div>
                                <div className="col-md-1">
                                </div>
                                <div className="col-md-2">
                                </div>        
                            </div>                               
                        </ul>  
                                    ))}                                 
                    </div>
                </div>
            </div>
            
)      
    


