import React, { Component } from 'react'
import logic from '../../logic'
import {Link} from 'react-router-dom'

class Home extends Component {

    state = {
       email:'',
       password: '',
       products: [],
       isLogged: false
    }

    componentDidMount() {
        logic.listProducts()
          .then(products => {
                this.setState({
                    products
                })
          })
    }

   render() {

    return (
        <div>        
           <Link to="/register"><input className="buttons" type="submit" value="Register"/></Link>
           <Link to="/auth"><input className="buttons" type="submit" value="Login"/></Link>
           
           <ul>
               {this.state.products.map(product => {
                   return (<li key={product.id} className="list-group-item">{product.name} - {product.price}€</li>)})}
           </ul>
        </div>
        )
   }       
}

export default Home