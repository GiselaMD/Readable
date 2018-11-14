import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux'
import { fetchAllPosts } from '../actions';
import PostsList from './PostsList';
import Categories from './Categories';
class App extends Component {
  // componentDidMount() {
  //   this.props.getPosts()
  // }
  
  render() {
    console.log('Props', this.props)
    const {posts} = this.props
    return (
      <div className="app">
      <h1>Readable - Udacity</h1>
          <Route
              exact
              path="/"
              render={() => (
                  <PostsList  />
              )} />
              <Route
              exact
              path="/categories"
              render={() => (
                  <Categories />
              )} />
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