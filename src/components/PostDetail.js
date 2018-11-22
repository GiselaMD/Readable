import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import { fetchPost, fetchAllCommentsForPost } from '../actions'
import PostCard from './PostCard';
import CommentCard from './CommentCard';


class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id)
    this.props.getComment(this.props.match.params.id)
  }
  // handleVotar = (id, option) => {
  //   this.props.votePostFromPost(id, option)
  // }

  render() {
    const { post, comments } = this.props
   
    //TODO: Botão para editar ou excluir post
    //TODO: Botão para adicionar comentário
    
    return post ? (
      <div className="PostDetail" className='container'>
      <br/>
      <PostCard postId={post.id} post={post} score={post.voteScore}/>
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
    getComment: (id) => dispatch(fetchAllCommentsForPost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)