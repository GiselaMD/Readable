import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllPostsCategoryAction } from '../actions'

class Category extends Component {
  
    componentDidMount() {  
        this.props.getPostsCategory(this.props.match.params.category)
    }
  
    render() {    
        console.log('Posts in category: ', this.props.posts)

      return(
        <div className="Categories">
        <h4>Categoria: {this.props.match.params.category}</h4>
        {(this.props.posts.length !== null) ? this.props.posts.map(post => 
                    <div>
                         {post.title}
                    </div>
                  ): ""}
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