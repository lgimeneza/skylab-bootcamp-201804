import React, { Component } from 'react'
import logic from '../../logic'
import { Link } from 'react-router-dom'
import './index.css'

class Footer extends Component {
    state = {

    }


        //const parentsCategoryId = this.state.categories._id

        // console.log(parentsCategoryId)
        //  logic.listSubcategories(parentsCategoryId)
        //     .then(categories => {
        //         if (categories) this.setState({
        //              categories
        //             })
        // })
    

    render() {

        return (

            <div className="footer">
                <footer>
                <div className="row">
                            <div className="col-md-4">
                                <ul>
                                    <li className="list-item">
                                        Lorem ipsum dolor sit amet
                                    </li>
                                    <li className="list-item">
                                        Consectetur adipiscing elit
                                    </li>
                                    <li className="list-item">
                                        Integer molestie lorem at massa
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul>
                                    <li className="list-item">
                                        Lorem ipsum dolor sit amet
                                    </li>
                                    <li className="list-item">
                                        Consectetur adipiscing elit
                                    </li>
                                    <li className="list-item">
                                        Integer molestie lorem at massa
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul>
                                    <li className="list-item">
                                        Lorem ipsum dolor sit amet
                                    </li>
                                    <li className="list-item">
                                        Consectetur adipiscing elit
                                    </li>
                                    <li className="list-item">
                                        Integer molestie lorem at massa
                                    </li>
                                </ul>
                            </div>
                        </div>
                </footer>
            </div>
        )
    }
}

export default Footer



