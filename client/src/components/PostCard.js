import React, {Component} from 'react'
import { connect } from 'react-redux'
import './App.css';
import './PostCard.css';
import {Jumbotron, Button} from 'react-bootstrap'
import {FaThumbsUp, FaThumbsDown} from 'react-icons/fa'
import formatTimeStamp from '../utils/helpers'
import { votePost } from '../actions/postActions';

class PostCard extends Component {
  
    render() {
      const {post, score} = this.props
      return(
        <div>
        <li key={post.id} className="cardlist">
          <Jumbotron>
                      <h2 className='post_title'>[POST] {post.title} </h2>
                      <div className='post_author'>Author: {post.author}</div>
                      <div className='post_body'>{post.body}</div><br/>
                      <div className='row'>
                          <div className='post_score col-md-6'>Pontuação: {score}</div>
                          <div className='post_comments col-md-6'>Comentários: {post.commentCount}</div>
                      </div><br/>
                      <div className='post_author'>Created at: {formatTimeStamp(post.timestamp)}</div>
                      <p>
                          <Button bsStyle="primary" className='btn_thumbsup' onClick={() => this.props.votePost(post.id, 'upVote')}><FaThumbsUp></FaThumbsUp></Button> 
                          <Button bsStyle="danger" onClick={() => this.props.votePost(post.id, 'downVote')}><FaThumbsDown></FaThumbsDown></Button>
                      </p>
                      
              </Jumbotron>
        </li>
        </div>
      )
    }
    
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      votePost: (id, data) => dispatch(votePost(id, data))
    }
  }

export default connect(null, mapDispatchToProps)(PostCard)