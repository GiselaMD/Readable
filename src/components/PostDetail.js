import React, { Component } from 'react'
import './App.css';
import './PostDetail.css';
import {Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchPost, deleteCurrentPost, fetchAllCommentsForPost } from '../actions'
import PostCard from './PostCard';
import CommentCard from './CommentCard';


class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id)
    this.props.getComment(this.props.match.params.id)
  }
  onPostDelete = () => {
    const id = this.props.match.params.id
    this.props.deleteCurrentPost(id)
  }
  render() {
    const { post, comments } = this.props
   
    //TODO: Botão para adicionar comentário
    
    return post ? (
      <div className="PostDetail" className='container'>
      <br/>
      <PostCard postId={post.id} post={post} score={post.voteScore}/>
      <Button className="edit_post_btn" bsStyle="link">Editar</Button>
      <Button className="remove_post_btn" bsStyle="link" onClick={() => this.onPostDelete()}>Excluir</Button>
      <Button className="comment_post_btn" >Comentar</Button>
        {comments ? comments.map((comment) => {
        return (
            <CommentCard comment={comment}/>
        )
        }) : '' }
      </div>
    ) : 
    (
      <div className="container">
         <h2 className="text_center">Error 404</h2> 
      </div>
    )
  }
}

const mapStateToProps = ({ posts, comments }, ownProps) => {
  return {
    post: posts.find(p => p.id === ownProps.match.params.id),
    comments: comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => dispatch(fetchPost(id)),
    deleteCurrentPost: (id) => dispatch(deleteCurrentPost(id)),
    getComment: (id) => dispatch(fetchAllCommentsForPost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)