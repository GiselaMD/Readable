import React, { Component } from 'react';
import './App.css';
import './PostsList.css';
import formatTimeStamp from '../utils/helpers'
import { connect } from 'react-redux'
import { fetchAllPosts, fetchCommentForPost } from '../actions';
import Post from './Post';


class PostsList extends Component {
  componentDidMount() {
    this.props.getPosts()
  }
  
  render() {
    const {posts} = this.props
    console.log('Posts', posts)
    const listOfPosts = posts.map((post) => {
            return (
            <li className='listStyleNone'>
                <div className="post_category"><b>Category: </b> {post.category}</div>
                <div className='post_title'>{post.title}</div> <br/>
                <div className='post_author'>Author: {post.author}</div>
                <div className='post_body'>{post.body}</div><br/>
                <div className='post_body'>Pontuação: {post.voteScore}</div><br/>
                <div className='post_author'>Created at: {formatTimeStamp(post.timestamp)}</div>
                <Post id={post.id}/>
            </li>
            )
        })
    return (
    <div className='container'>
        <div className="Post">
            <h1>Posts: </h1>
            {listOfPosts}
            
        </div>
    </div>
     
    );
  }
}

const mapStateToProps = state => ({
    posts: state.posts.posts
});

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(fetchAllPosts())
    // getCommentsByPost(postId) {dispatch(fetchCommentForPost(postId))}
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);