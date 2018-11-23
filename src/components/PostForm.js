import React, {Component} from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid';
import './App.css';
import { Row, Col, Button} from 'react-bootstrap'
import { fetchAllCategories } from '../actions';

class PostForm extends Component {
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

  onPostClick() {
    const { title, category, author, body } = this.state
    
    if (title && category && author && body) {
      const newPost = {
        id: uuid(),
        timestamp: Date.now(),
        title,
        category,
        author,
        body
      } 
      this.props.addPost(newPost)
        .then(() => this.setState({
          success: true,
          title: '',
          category: '',
          author: '',
          body: '',
          notValid: false 
        }))
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
      const { categories } = this.props
      const categoryOptions = categories.map(category => ( 
          <option 
            key={category.name} 
            value={category.name}>{category.name}</option>
        ))


      return(
        <div>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
            <div>
                {this.state.success && (
                  <h3>Your new post was added!</h3> 
                )}
              </div>
              <div>
                {this.state.notValid && (
                  <h3>Please enter all values...</h3> 
                )}
            </div>

            <h2>Create a new post</h2><br/>
            <form>
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
                Choose a category:
                <select 
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
             
              <input type="submit" value="Submit" onClick={this.onPostClick.bind(this)}/>
            </form>
            </Col>
            <Col md={2}></Col>
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
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)