import React, {Component} from 'react'
import { connect } from 'react-redux'
import './App.css';
import { sortPost } from '../actions';
import {Button, Row, Col, Grid} from 'react-bootstrap'

class OrderBy extends Component {
  
    render() {
      return(
        <Grid>
                <Row>
                    <Col md={4}>Order By:</Col> 
                    <Col md={3}> 
                        <Button bsStyle="primary" onClick={() => this.props.sortPost("voteScore")}>
                            Score
                        </Button>
                    </Col>
                    <Col md={3}> 
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