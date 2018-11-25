import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import uuid from 'uuid';
import './Form.css';
import { Row, Col, Button} from 'react-bootstrap'
import { fetchAllCategories } from '../actions/categoryActions';
import { createPost } from '../actions/postActions';

class NewPost extends Component {
  state = {
    title: '',
    category: '',
    author: '',
    body: '',
    notValid: false,
    success: false
  }
  componentDidMount() {
    this.props.getCategories();
  }

  addNewPost = e => {
    e.preventDefault();
    console.log("add new post button submited")
    const { title, category, author, body } = this.state

    if (title && category && author && body) {
      const newPost = {
        id: uuid(),
        timestamp: Date.now(),
        title,
        body,
        author,
        category
      } 
      this.props.addPost(newPost)
      
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
      console.log(this.props.post)
      const { categories } = this.props
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
              <h2>Create a new post</h2><br/>
              <form onSubmit={this.addNewPost}>
                <label>
                  Title:
                  <input 
                  placeholder={'What is your post about?'} 
                  name='title' 
                  onChange={(e) => this.handleTitleChange(e)}
                  value={this.state.title}/>
                </label> 
                <br/>
                <label>
                  Category:
                  <select 
                  name="category"
                  value={this.state.category} 
                  onChange={this.handleCategoryChange}>
                    {categoryOptions}
                  </select>
                </label>
                <br/>
                <label>
                  <textarea  
                  placeholder='Write something about it'
                  onChange={(e) => this.handleBodyChange(e)}
                  value={this.state.body}
                  cols="30" 
                  rows="8" />
                </label>
                  <br/>
                <input 
                  placeholder="Author"
                  onChange={(e) => this.handleAuthorChange(e)}
                  type="text" 
                  value={this.state.author} />
              
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

  const mapStateToProps = ({categories}) => ({
    categories: categories
  });
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getCategories: () => dispatch(fetchAllCategories()),
      addPost: (newPost) => dispatch(createPost(newPost))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)