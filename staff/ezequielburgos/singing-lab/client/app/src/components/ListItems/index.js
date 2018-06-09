import React, { Component } from 'react'
import logic from '../../logic'
import './index.css'

export default ({items, btnShow = false}) => (
    <ul className="thumbnail">
        {
            items.map(category => (
                <li key={category._id}>
                    <div className="col-sm-6 col-md-4 products">
                        <img src={category.image} alt="..." width="240px" height="200px"/>
                        <div className="caption">
                            <h3>{category.name}</h3>
                            <p>{category.description}</p>
                            {
                                btnShow && (<p><a className="btn btn-primary" role="button">Button</a></p>)
                            }
                        </div>
                    </div>
                </li>
            ))
        }
    </ul>
);