import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './PostsList.css';
import formatTimeStamp from '../utils/helpers'
import { connect } from 'react-redux'
import { fetchAllPosts, votePost } from '../actions';
import Post from './Post';
import {Jumbotron, Button, ButtonToolbar, Dropdown, DropdownButton, MenuItem} from 'react-bootstrap'
import {FaThumbsUp, FaThumbsDown, FaAngleDoubleRight} from 'react-icons/fa'

class PostsList extends Component {
  componentDidMount() {
    this.props.getPosts()
  }

  handleVotar = (id, option) => {
    let data = {
      option: option
    }

    this.props.votePost(id, data)
  }
  
  render() {
    const {posts} = this.props
    console.log('Posts', posts)

    const buttonsInstance = (
        <div>
            <ButtonToolbar>
                <DropdownButton bsStyle='primary' title='OrderBy' id='dropdown-orderby'>
                    <MenuItem eventKey="1">Date</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="2">Score</MenuItem>
                </DropdownButton>
            </ButtonToolbar>
        </div>
    );
      
    const listOfPosts = posts.map((post) => {
            return (
            <li className='listStyleNone'>
                {/* <Post id={post.id}/> */}
                <Jumbotron>
                    <h2 className='post_title'>[POST] {post.title} </h2>
                    <div className='post_author'>Author: {post.author}</div>
                    <div className='post_body'>{post.body}</div><br/>
                    <div className='row'>
                        <div className='post_score col-md-6'>Pontuação: {post.voteScore}</div>
                        <div className='post_comments col-md-6'>Comentários: {post.commentCount}</div>
                    </div><br/>
                    <div className='post_author'>Created at: {formatTimeStamp(post.timestamp)}</div>
                    <p>
                        <Button bsStyle="primary" className='btn_thumbsup' onClick={() => this.handleVotar(post.id, 'upVote')}><FaThumbsUp></FaThumbsUp></Button> 
                        <Button bsStyle="danger" onClick={() => this.handleVotar(post.id, 'downVote')}><FaThumbsDown></FaThumbsDown></Button>
                    </p>
                    <p className='text_btn_openpost'>
                        <Link to={`/post/${post.id}`}>
                            <Button className='btn_openpost' block>
                                <strong>Open Post</strong> <FaAngleDoubleRight></FaAngleDoubleRight>
                            </Button>
                        </Link>
                    </p>
                </Jumbotron>
            </li>
            )
        })
    return (
    <div className='container'>
        <div className="Post">
            <h1>Posts: </h1>
            {buttonsInstance}
            {listOfPosts}
        </div>
    </div>
     
    );
  }
}

const mapStateToProps = state => ({
    posts: state.posts.posts
});

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(fetchAllPosts()),
    votePost: (id, data) => dispatch(votePost(id, data))
    // getCommentsByPost(postId) {dispatch(fetchCommentForPost(postId))}
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);