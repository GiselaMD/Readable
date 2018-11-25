import React, {Component} from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid';
import './Form.css';
import { Row, Col, Button} from 'react-bootstrap'
import { createComment } from '../actions/commentActions';

class NewComment extends Component {
  state = {
    author: '',
    body: '',
    notValid: false,
    success: false
  }
  componentDidMount() {
  }

  addNewComment = e => {
    e.preventDefault();
    const { author, body } = this.state

    if (author && body) {
      const newComment = {
        id: uuid(),
        parentId: this.props.match.params.id,
        timestamp: Date.now(),
        body,
        author,
      }
      this.props.addComment(newComment)
      
      this.setState({success: true})
    
    } else {
      this.setState({
        notValid: true,
        success: false
      })
    }
  }


  handleAuthorChange(e) {
    this.setState({ author: e.target.value })
  }

  handleBodyChange(e) {
    this.setState({ body: e.target.value })
    console.log(this.state.body)
  }


    render() {

      return(
        <div>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
            
            {this.state.success ? (
              <h3>Your comment was added!</h3> 
            ) : (
              <div className="form_container">
              <div>
                {this.state.notValid && (
                  <h3>Please enter all values...</h3> 
                )}
              </div>
              <h2>Create a new comment</h2><br/>
              <form onSubmit={this.addNewComment}>
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
                
                <Button type="submit">Submit</Button>
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
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addComment: (newComment) => dispatch(createComment(newComment))
    }
  }

export default connect(null, mapDispatchToProps)(NewComment)