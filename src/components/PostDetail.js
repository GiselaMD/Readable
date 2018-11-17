import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import { fetchPost } from '../actions'
import PostCard from './PostCard';


class Post extends Component {
  
  componentDidMount() {
    this.props.getPost(this.props.match.params.id)
  }

  render() {
    const { post } = this.props.post
    // const listOfComments = (post.comments) ? post.comments.map((comment) => {
    //     return (
    //     <li className='listStyleNone'>
    //         <div className='post_body'>{comment.body}</div><br/>
    //     </li>
    //     )
    //   }) : ''
    
    return(
      <div className="PostDetail" className='container'>
      <br/>
      Aqui eu chamo o 'post.id' e tento pegar os comentários: <br/>
      <PostCard postId={post.id} post={post}/>
        { console.log(this.props) }
            {this.props.match.params.id}

        {post.comments ? post.comments.map((comment) => {
        return (
          <li className='listStyleNone'>
            <div className='post_body'>{comment.body}</div><br/>
           </li>
        )
        }) : '' }
      </div>
    )
  }
}

const mapStateToProps = ({ post }) => {
  return {
    post: post
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => dispatch(fetchPost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)