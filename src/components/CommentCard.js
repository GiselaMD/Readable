import React from 'react'
import './App.css';
import './CommentCard.css';
import {Jumbotron, Button} from 'react-bootstrap'
import {FaThumbsUp, FaThumbsDown} from 'react-icons/fa'
import formatTimeStamp from '../utils/helpers'

const CommentCard = ({comment}) => {
    
    return(
      <div>
      <li key={comment.id} className="listStyleNone">
        <Jumbotron className="card">
                    <div className='row'>
                        <div className='comment_author col-md-6'>{comment.author}: </div>
                        <div className='comment_body col-md-6'>{comment.body}</div>
                    </div><br/>
                    <div className='row'>
                        <div className='comment_score col-md-6'>Pontuação: {comment.voteScore}</div>
                        <div className='comment_time'>Created at: {formatTimeStamp(comment.timestamp)}</div>
                    </div><br/>
                    {/* <p>
                        <Button bsStyle="primary" className='btn_thumbsup' onClick={() => this.handleVotar(comment.id, 'upVote')}><FaThumbsUp></FaThumbsUp></Button> 
                        <Button bsStyle="danger" onClick={() => this.handleVotar(comment.id, 'downVote')}><FaThumbsDown></FaThumbsDown></Button>
                    </p> */}
                    
            </Jumbotron>
      </li>
      </div>
    )
  }

export default CommentCard