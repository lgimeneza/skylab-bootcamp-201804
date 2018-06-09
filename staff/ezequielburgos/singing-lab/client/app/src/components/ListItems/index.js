import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logic from '../../logic'
import './index.css'

export default ({items, btnShow = false}) => (
    <ul className="thumbnail">
        {
            items.map(item => (
                <li key={item._id}>
                    <div className="col-sm-6 col-md-4 products">
                        <img src={item.image} alt="..." width="240px" height="200px"/>
                        <div className="caption">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            {
                                btnShow && (<p><Link to={`/categories/${item._id}`} className="btn btn-primary" role="button">Button</Link></p>)
                            }
                        </div>
                    </div>
                </li>
            ))
        }
    </ul>
);