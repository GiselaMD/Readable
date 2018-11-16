import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import { fetchPost } from '../actions'


class Post extends Component {
  
  componentDidMount() {
    const { id } = this.props
    console.log('id: ',id)
    this.props.getPost(id)
  }

  render() {
    const { post } = this.props.post
    const listOfComments = post.comments ? post.comments.map((comment) => {
        return (
        <li className='listStyleNone'>
            <div className='post_body'>{comment.body}</div><br/>
        </li>
        )
      }) : ''
    
    return(
      <div className="PostDetail">
      <br/>
      Aqui eu chamo o 'post.id' e tento pegar os comentários: <br/>
        {this.props.id}
        {listOfComments}
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