import React, { Component } from 'react'
import './App.css';
import './PostCard.css';
import { connect } from 'react-redux'
import { fetchPost } from '../actions'
import {Jumbotron, Button} from 'react-bootstrap'
import {FaThumbsUp, FaThumbsDown} from 'react-icons/fa'
import formatTimeStamp from '../utils/helpers'
import { Link } from 'react-router-dom';

const PostCard = ({post}) => {
  
//   componentDidMount() {
//     this.props.getPost(this.props.postId)
//     console.log('PostDetail: ', this.props.postId)
//   }

    // const { post } = this.props
    
    return(
      <div>
      <li key={post.id} className="listStyleNone">
        <Jumbotron>
                    <h2 className='post_title'>[POST] {post.title} </h2>
                    <div className='post_author'>Author: {post.author}</div>
                    <div className='post_body'>{post.body}</div><br/>
                    <div className='row'>
                        <div className='post_score col-md-6'>Pontuação: {post.voteScore}</div>
                        <div className='post_comments col-md-6'>Comentários: {post.commentCount}</div>
                    </div><br/>
                    <div className='post_author'>Created at: {formatTimeStamp(post.timestamp)}</div>
                    <p>
                        <Button bsStyle="primary" className='btn_thumbsup' onClick={() => this.handleVotar(post.id, 'upVote')}><FaThumbsUp></FaThumbsUp></Button> 
                        <Button bsStyle="danger" onClick={() => this.handleVotar(post.id, 'downVote')}><FaThumbsDown></FaThumbsDown></Button>
                    </p>
                    
            </Jumbotron>
      </li>
      </div>
    )
  }

// const mapStateToProps = ({ post }) => {
//   return {
//     post: post
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getPost: (id) => dispatch(fetchPost(id))
//   }
// }

export default PostCard