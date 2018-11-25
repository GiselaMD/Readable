import React, {Component} from 'react'
import { connect } from 'react-redux'
import './App.css';
import { sortPost } from '../actions/postActions';
import {Button, Row, Col, Grid} from 'react-bootstrap'

class OrderBy extends Component {
  
    render() {
      return(
        <Grid>
                <Row>
                    <Col lg={3} md={3} sm={12}>Order By:</Col> 
                    <Col lg={3} md={3} sm={12}> 
                        <Button bsStyle="primary" onClick={() => this.props.sortPost("voteScore")}>
                            Score
                        </Button>
                    </Col>
                    <Col lg={3} md={3} sm={12}> 
                        <Button bsStyle="primary" onClick={() => this.props.sortPost("timestamp")}>
                            Date
                        </Button>
                    </Col>
                </Row>
            </Grid>
      )
    }
    
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        sortPost: (sortType) => dispatch(sortPost(sortType))
    }
  }

export default connect(null, mapDispatchToProps)(OrderBy)