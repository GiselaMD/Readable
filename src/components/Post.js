import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import { fetchPost } from '../actions'


class Post extends Component {
  
  componentDidMount() {
    const { id } = this.props.id
    this.props.getPost(id)
  }

  render() {
    const { post } = this.props.post
    const { comments } = this.props
    return(
      <div className="PostDetail">
      <br/>
      Aqui eu chamo o 'post.id' e tento pegar os comentários: <br/>
        {this.props.id}
      </div>
    )
  }
}

const mapStateToProps = ({ post }) => {
  return {
    post: post.post
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => dispatch(fetchPost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)