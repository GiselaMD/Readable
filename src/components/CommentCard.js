import React, {Component} from 'react'
import { connect } from 'react-redux'
import './App.css';
import './CommentCard.css';
import {Jumbotron, Button} from 'react-bootstrap'
import {FaThumbsUp, FaThumbsDown} from 'react-icons/fa'
import formatTimeStamp from '../utils/helpers'
import { voteComment } from '../actions';

class CommentCard extends Component {

    render(){
        const {comment} = this.props
        return(
            <div>
            <li key={comment.id} className="cardlist">
              <Jumbotron className="card">
                          <div className='row'>
                              <div className='comment_author col-md-6'>{comment.author}: </div>
                              <div className='comment_body col-md-6'>{comment.body}</div>
                          </div><br/>
                          <div className='row'>
                              <div className='comment_score col-md-6'>Pontuação: {comment.voteScore}</div>
                              <div className='comment_time'>Created at: {formatTimeStamp(comment.timestamp)}</div>
                          </div><br/>
                          <p>
                              <Button bsStyle="primary" className='btn_thumbsup' onClick={() => this.props.voteComment(comment.id, 'upVote')}><FaThumbsUp></FaThumbsUp></Button> 
                              <Button bsStyle="danger" onClick={() => this.props.voteComment(comment.id, 'downVote')}><FaThumbsDown></FaThumbsDown></Button>
                          </p>
                          
                  </Jumbotron>
            </li>
            </div>
        )
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        voteComment: (id, data) => dispatch(voteComment(id, data))
    }
  }

export default connect(null, mapDispatchToProps)(CommentCard)