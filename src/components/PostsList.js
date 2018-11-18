import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './PostsList.css';
import { connect } from 'react-redux'
import { fetchAllPosts, votePost } from '../actions';
import {Button, ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap'
import PostCard from './PostCard';
import {FaAngleDoubleRight} from 'react-icons/fa'

class PostsList extends Component {
    //TODO: Botão para criar post
  componentDidMount() {
    this.props.getPosts()
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
      
    const listOfPosts = () => (
        posts ? 
            posts.map((post) => {
                return (
                    <div key={post.id}>
                        <PostCard key={post.id} postId={post.id} post={post}/>
                        <p className='text_btn_openpost'>
                            <Link to={`/${post.category}/${post.id}`} >
                                <Button className='btn_openpost' block>
                                    <strong>Open Post</strong> <FaAngleDoubleRight></FaAngleDoubleRight>
                                </Button>
                            </Link>
                        </p>
                    </div>
                    
                )
            })
            :
            null
    ) 
    return (
    <div className='container'>
        <div className="Post">
            <h1>Posts: </h1>
            {buttonsInstance}
            {listOfPosts()}
        </div>
    </div>
     
    );
  }
}

const mapStateToProps = state => ({
    posts: state.posts.posts
});

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(fetchAllPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);