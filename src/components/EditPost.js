import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import './Form.css';
import { Row, Col, Button} from 'react-bootstrap'
import { fetchAllCategories, updatePost, fetchPost } from '../actions';

class EditPost extends Component {
  state = {
    title: '',
    category: '',
    body: '',
    notValid: false,
    success: false
  }
  componentDidMount() {
    this.props.getCategories();
    this.props.getPost(this.props.match.params.id);
  }

  editCurrentPost = e => {
    e.preventDefault();
    console.log("add new post button submited")
    const { title, body } = this.state
    const postId = this.props.match.params.id

    if (title && body) {
      this.props.updatePost(postId, title, body)
      
      this.setState({success: true})
    
    } else {
      this.setState({
        notValid: true,
        success: false
      })
    }
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value })
  }

  handleAuthorChange(e) {
    this.setState({ author: e.target.value })
  }

  handleBodyChange(e) {
    this.setState({ body: e.target.value })
    console.log(this.state.body)
  }

  handleCategoryChange = (e) => {
    this.setState({
      category: e.target.value
    })
    
  }
    render() {
      const { categories, post } = this.props
      const categoryOptions = categories && categories.map(category => ( 
          <option 
            key={category.name} 
            value={category.name}>{category.name}</option>
        ))

      return(
        <div>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
            {this.state.success ? (
                  <Redirect to="/" />
            ) : 
            (
              <div className="form_container">
                <div>
                  {this.state.notValid && (
                    <h3>Please enter all values...</h3> 
                  )}
                </div>
              <h2>Edit post</h2><br/>
              <form onSubmit={this.editCurrentPost}>
                <label>
                  Title:
                  <input 
                  placeholder={post.title}
                  name='title' 
                  onChange={(e) => this.handleTitleChange(e)}
                  value={this.state.title}/>
                </label> 
                <br/>
                {/* <label>
                  Category:
                  <select 
                  name="category"
                  value={this.state.category} 
                  onChange={this.handleCategoryChange}>
                    {categoryOptions}
                  </select>
                </label> */}
                <br/>
                <label>
                  <textarea  
                  placeholder={post.body}
                  onChange={(e) => this.handleBodyChange(e)}
                  value={this.state.body}
                  cols="30" 
                  rows="8" />
                </label>
                  <br/>
                {/* <input 
                  placeholder="Author"
                  onChange={(e) => this.handleAuthorChange(e)}
                  type="text" 
                  value={this.state.author} /> */}
              
                <Button block type="submit">Submit</Button>
              </form>
              </div>
            )}
            
            </Col>
            <Col md={3}></Col>
          </Row>
       
        </div>
      )
    }
    
  }

  const mapStateToProps = ({posts, categories}, ownProps) => ({
    post: posts.find(p => p.id === ownProps.match.params.id),
    categories: categories
  });
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getCategories: () => dispatch(fetchAllCategories()),
      getPost: (id) => dispatch(fetchPost(id)),
      updatePost: (postId, title, body) => dispatch(updatePost(postId, title, body))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)