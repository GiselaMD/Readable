import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllPostsCategoryAction } from '../actions'
import PostCard from './PostCard';
import './Category.css';
class Category extends Component {
  
    componentDidMount() {  
        this.props.getPostsCategory(this.props.match.params.category)
    }
  
    render() {    
        console.log('Posts in category: ', this.props.posts)

      return(
        <div className="Categories">
        <h4>Categoria: {this.props.match.params.category}</h4>
        {
           (this.props.posts && this.props.posts.length > 0) 
           ? (  this.props.posts.map(post => 
                    <div className="container">
                        <PostCard postId={post.id} post={post}/>
                    </div>
                )
            ): 
          (
            <div className="container">
               <h2 className="text_center">No Posts yet :(</h2> 
            </div>
          )
          }
        </div>
      )
    }
  }
  
  const mapStateToProps = ({ posts }) => {
    return {
      posts: posts.posts
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getPostsCategory: (category) => dispatch(getAllPostsCategoryAction(category))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Category)