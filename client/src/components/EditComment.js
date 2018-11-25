import React, {Component} from 'react'
import { connect } from 'react-redux'
import './Form.css';
import { Row, Col, Button} from 'react-bootstrap'
import { fetchComment, updateComment } from '../actions/commentActions';

class EditComment extends Component {
  state = {
    notValid: false,
    success: false
  }
  componentDidMount() {
    this.props.getComment(this.props.match.params.commentId);
  }

  editCurrentComment = e => {
    e.preventDefault();

    const body = e.target.body.value
    const commentId = this.props.match.params.commentId

    if (body) {
      this.props.updateComment(commentId, body)
      
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
        console.log(this.props.match.params.commentId)
      const { comment } = this.props

        return comment ? (
        <div>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
            {this.state.success ? (
                  <h3>Your comment was edited!</h3> 
            ) : 
            (
              <div className="form_container">
                <div>
                  {this.state.notValid && (
                    <h3>Please enter all values...</h3> 
                  )}
                </div>
              <h2>Edit Comment</h2><br/>
              <form onSubmit={this.editCurrentComment}>
                <label>
                  <textarea  
                  placeholder={comment.body}
                  name='body'
                  defaultValue={comment.body}
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

  const mapStateToProps = ({comments, categories}, ownProps) => ({
    comment: comments.find(c => c.id === ownProps.match.params.commentId),
    categories: categories
  });
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getComment: (id) => dispatch(fetchComment(id)),
      updateComment: (commentId, body) => dispatch(updateComment(commentId, body))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(EditComment)