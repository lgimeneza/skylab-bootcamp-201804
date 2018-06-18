import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Home extends Component {
    static fetchData({ store }) {
        return new Promise(resolve => resolve());//default
    }
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Home</title>
                </Helmet>
                <strong>Home</strong>

                <div className="aside">
                    <h3 className="aside-title">Categories</h3>
                    <div className="checkbox-filter">

                        <div className="input-checkbox">
                            <input type="checkbox" id="category-1"/>
                            <label htmlFor="category-1">
                                <span></span>
                                laptops
                                {/* TODO: <small>(120)</small> */}
                            </label>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}
export default Home;