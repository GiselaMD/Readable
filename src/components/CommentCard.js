import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import './App.css';
import './CommentCard.css';
import {Jumbotron, Button, Col, Row} from 'react-bootstrap'
import {FaThumbsUp, FaThumbsDown} from 'react-icons/fa'
import formatTimeStamp from '../utils/helpers'
import { voteComment } from '../actions';
import { deleteCurrentComment } from '../actions'

class CommentCard extends Component {
    onCommentDelete = () => {
        this.props.deleteCurrentComment(this.props.comment.id)
      }

    render(){
        const {comment} = this.props
        return(
            <div>
            <li key={comment.id} className="cardlist">
              <Jumbotron className="card">
                          <Row>
                              <Col className='comment_author' md={6}>{comment.author}: </Col>
                              <Col className='comment_body' md={6}>{comment.body}</Col>
                          </Row>
                          <br/>
                          <Row>
                              <Col className='comment_score' md={6}>Pontuação: {comment.voteScore}</Col>
                              <Col className='comment_time' md={6}>Created at: {formatTimeStamp(comment.timestamp)}</Col>
                          </Row>
                          <br/>
                          <Row>
                            <Col md={6}>
                                <Button bsStyle="primary" className='btn_thumbsup' onClick={() => this.props.voteComment(comment.id, 'upVote')}><FaThumbsUp></FaThumbsUp></Button> 
                                <Button bsStyle="danger" onClick={() => this.props.voteComment(comment.id, 'downVote')}><FaThumbsDown></FaThumbsDown></Button>
                            </Col>
                            <Col md={6}>
                                <Link to={'/addPost'}>
                                    <Button className="" bsStyle="link">Editar</Button>
                                </Link>
                                <Button className="" bsStyle="link" onClick={() => this.onCommentDelete()}>Excluir</Button>
                            </Col>
                          </Row>
                  </Jumbotron>
            </li>
            </div>
        )
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        voteComment: (id, data) => dispatch(voteComment(id, data)),
        deleteCurrentComment: (id) => dispatch(deleteCurrentComment(id)),
    }
  }

export default connect(null, mapDispatchToProps)(CommentCard)