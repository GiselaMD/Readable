import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { fetchAllPosts } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.getPosts()
  }
  
  render() {
    console.log('Props', this.props)
    const {posts} = this.props
    return (
      <div className="App">
       {posts.map((post)=> (
         <li>
           {post.title}
         </li>
       ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(fetchAllPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);