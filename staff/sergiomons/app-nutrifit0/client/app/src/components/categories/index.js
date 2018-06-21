import React, { Component } from 'react'
import logic from '../../logic'
import './index.css'
import ItemsCategories from '../../components/items-list/items-categories'

class Categories extends Component {

    state = {
       categories: [],
    }

    componentDidMount() {

        const categoryId = this.props.categoryId
        
        logic.listSubcategories(categoryId)
        .then(categories => {
            this.setState({
                categories
            })
        })         
    }

   render() {

    return (       
        <div className="row mt-4 mb-5">
                <div className="col-2 col-lg-2 col-md-10 col-sm-8 col-xs-12">   
                </div>
                <div className="col-10 col-lg-10 col-md-12 col-sm-12 col-xs-12">   
                   <h1 className="card-title" style={{backgroundColor: "#babcbe", color:"#555c63", fontSize: "1.5rem", fontWeight: "bold"}}>Platos Individuales</h1>
                </div>
                <div>
                    <div className="row">   
                        <ItemsCategories categories={this.state.categories} onAddToCart={this.props.onAddToCart}/>
                    </div> 
                </div>  
            </div>  
        )
   }       
}

export default Categories