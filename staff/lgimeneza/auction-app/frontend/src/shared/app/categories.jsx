import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as categoryActions from './redux/actions/categories'
import * as productsActions from './redux/actions/products'

class Categories extends Component {
    static fetchData({ store }) {
        return store.dispatch(categoriesActions.getCategory())
    }

    componentDidMount() {
        this.props.getCategories()
    }

    // componentDidUpdate() {

    //     if (checked) {
    //         const { query, categories } = this.props
    //         const categoriesFilter = categories.filter(category => category.checked).map(category => category._id).join()
    //         this.props.history.push(`/?q=${query}&c=${categoriesFilter}`)
    //     }

    // }

    handleCheck = e => {
        localStorage.setItem(e.target.id, e.target.checked)
        this.props.getCategories()
    }

    render() {
        const { categories } = this.props
        return (

            <div className="aside">
                <h3 className="aside-title">Categories</h3>
                <div className="checkbox-filter">
                    
                    {categories.length && categories.map((category) => {
                        return (

                        <div key={category._id} className="input-checkbox">
                            <input type="checkbox" id={category._id} checked={category.checked} onChange={this.handleCheck}/>
                            <label htmlFor={category._id}>
                                <span></span>
                                {category.name}
                                {/* TODO: <small>(120)</small> */}
                            </label>
                        </div>
                        
                        )
                    })}

                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    const { categories, query } = state
    return { categories, query  }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...categoryActions, ...productsActions }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Categories))