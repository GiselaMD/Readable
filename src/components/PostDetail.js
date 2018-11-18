import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import { fetchPost, fetchAllComments } from '../actions'
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
    const { post } = this.props.post
   
    //TODO: Botão para editar ou excluir post
    //TODO: Botão para votar no comentário
    //TODO: Botão para adicionar comentário
    
    return(
      <div className="PostDetail" className='container'>
      <br/>
      <PostCard postId={post.id} post={post} score={post.voteScore}/>
        {post.comments ? post.comments.map((comment) => {
        return (
            <CommentCard comment={comment}/>
        )
        }) : '' }
      </div>
    )
  }
}

const mapStateToProps = ({ post, comments }) => {
  return {
    post: post,
    comments: comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => dispatch(fetchPost(id)),
    getComment: (id) => dispatch(fetchAllComments(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)