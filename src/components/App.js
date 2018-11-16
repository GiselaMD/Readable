import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux'
import { fetchAllPosts } from '../actions';
import PostsList from './PostsList';
import Categories from './Categories';
import Post from './Post';
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
      <Switch>
        <Route exact path='/' render={(props) => (
          <div>
              <Categories/>
              <PostsList/>
            </div>
          )}/>
          <Route
          path="/post/:id"
          Component={Post} />
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