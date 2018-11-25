import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getAllPostsCategoryAction } from '../actions/postActions'
import PostCard from './PostCard';
import './Category.css';
import './PostsList';
import {Button, Row, Col} from 'react-bootstrap'
import {FaAngleDoubleRight} from 'react-icons/fa'
import OrderBy from './OrderBy';
import CategoryList from './CategoryList';

const Category = (props) => {
       
  props.getPostsCategory(props.match.params.category)

  return(
    <Row>
      <Col md={2}> </Col>
      <Col md={8}> 
      <h4>Categoria: {props.match.params.category}</h4>
        <OrderBy/>
        {
        (props.posts && props.posts.length > 0) 
        ? (  props.posts.map(post => 
                <div className="container" key={post.id}>
                    <PostCard postId={post.id} post={post} score={post.voteScore}/>
                    <p className='text_btn_openpost'>
                        <Link to={`/${post.category}/${post.id}`} >
                            <Button className='btn_openpost' block>
                                <strong>Open Post</strong> <FaAngleDoubleRight></FaAngleDoubleRight>
                            </Button>
                        </Link>
                    </p>
                </div>
            )
        ): 
      (
        <div className="container">
            <h2 className="text_center">No Posts yet :(</h2> 
        </div>
      )
      }
      </Col>
      <Col md={2}><CategoryList/></Col>
    </Row>
    
  )
}

  const mapStateToProps = ({posts}) => {
    return {
      posts: posts
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getPostsCategory: (category) => dispatch(getAllPostsCategoryAction(category))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Category)