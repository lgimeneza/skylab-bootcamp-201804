import React, { Component } from 'react';
import { render } from "react-dom";
import './HomePage.css';
import { Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap'

import logic from '../logic'
import InfiniteScroll from 'react-infinite-scroll-component';

class HomePage extends Component {

  state = {
    movies: {},
    value: '',
    page: 1,
    username: '',
    key: 'c9e81d7384a0e7aa9d0deecb8c80c2cc'
  }

  fetchMoreData = () => {
    logic.movie.getMoviesPopular(this.state.key, this.state.page)
      .then(data => {
        this.setState({
          page: this.state.page + 1,
          movies: {
            ...this.state.movies,
            results: [
              ...this.state.movies.results,
              ...data.results
            ]
          }
        })
      })
  };

  componentDidMount(props) {
    //console.log('didmount')
    this.retrieve()
  }

  componentWillReceiveProps(props) {
    //console.log(props)
    this.retrieve(props)
  }

  retrieve(props){
    
    if (props) {
      if(props.query !== '' && typeof props.query !== 'undefined'){
        console.log(props.query)
        logic.movie.searchMulti(this.state.key, props.query)
        .then(data => {
          console.log(data)
          // this.setState({
          //   movies: data
          // })
        })
      }

      


    } else {
      logic.movie.getMoviesPopular(this.state.key)
        .then(data => {
          this.setState({
            movies: data
          })
        })
    }

    if (localStorage.getItem('userName')) {
      this.setState({
        username: localStorage.getItem('userName')
      })
    }

    logic.movie.getMoviesPopular(this.state.key)
      .then(data => {
        this.setState({
          movies: data
        })
      })
  }


  handleLogoutUser() {
    localStorage.setItem('token', '')
    localStorage.setItem('id', '')
    localStorage.setItem('userName', '')
    this.setState({
      username: ''
    })
  }

  render() {
    return (

      <div className="content-home">

        <div>
          <InfiniteScroll
            dataLength={this.state.movies.results ? this.state.movies.results.length : 0}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            <Grid>
              <Row>
                {this.state.movies.results && (
                  this.state.movies.results.map(movie => {
                    console.log(movie)
                    return (
                      <div></div>
                      // <Col xs={12} sm={6} md={3} key={movie.id}>
                      //   <Thumbnail src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}>
                      //     <h3>Thumbnail label</h3>
                      //     <p>Description</p>
                      //     <p>
                      //       <Button bsStyle="primary">Button</Button>&nbsp;
                      //   <Button bsStyle="default">Button</Button>
                      //     </p>
                      //   </Thumbnail>

                      // </Col>

                    )
                  })
                )}
              </Row>
            </Grid>
          </InfiniteScroll>
        </div>


      </div>
    );
  }

}

export default HomePage;
