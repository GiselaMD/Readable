import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux'
import { fetchAllPosts } from '../actions';
import PostsList from './PostsList';
import Categories from './Categories';
import Post from './Post';
import {Breadcrumb} from 'react-bootstrap'
class App extends Component {
  // componentDidMount() {
  //   this.props.getPosts()
  // }
  
  render() {
    console.log('Props', this.props)
    const {posts} = this.props
    return (
      <div className="app">
      <div className="home_container">
        <h1>Readable - Udacity</h1>
      </div>
      
      <Switch>
        <Route exact path='/' render={(props) => (
          <div>
            <div className="col-md-2 categories_container"><Categories/></div>
            <div className="col-md"><PostsList/></div>
            </div>
          )}/>
          <Route
          path="/post/:id"
          component={Post} />
      </Switch>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   posts: state.posts
// });

// const mapDispatchToProps = dispatch => ({
//     getPosts: () => dispatch(fetchAllPosts())
// });

export default App;