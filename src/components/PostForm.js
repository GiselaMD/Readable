import React, {Component} from 'react'
import { connect } from 'react-redux'
import './App.css';

class PostForm extends Component {
  
    render() {
     
      return(
        <div>
        <p>Hello</p>
        </div>
      )
    }
    
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      
    }
  }

export default connect(null, mapDispatchToProps)(PostForm)