import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import './Form.css';
import { Row, Col, Button} from 'react-bootstrap'
import { updatePost, fetchPost } from '../actions/postActions';

class EditPost extends Component {
  state = {
    notValid: false,
    success: false
  }
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  editCurrentPost = e => {
    e.preventDefault();

    const title = e.target.title.value
    const body = e.target.body.value
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

  handleCategoryChange = (e) => {
    this.setState({
      category: e.target.value
    })
    
  }
    render() {
      const { post } = this.props

        return post ? (
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
                  defaultValue={post.title}/>
                </label> 
                <br/>
                <label>
                  <textarea  
                  placeholder={post.body}
                  name='body'
                  defaultValue={post.body}
                  cols="30" 
                  rows="8" />
                </label>
              
                <Button block type="submit">Submit</Button>
              </form>
              </div>
            )}
            
            </Col>
            <Col md={3}></Col>
          </Row>
       
        </div>
      ) : (
        <div className="container">
            <h2 className="text_center">Error 404</h2> 
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
      getPost: (id) => dispatch(fetchPost(id)),
      updatePost: (postId, title, body) => dispatch(updatePost(postId, title, body))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)