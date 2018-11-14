import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllCategories } from '../actions'

class Categories extends Component {
  
    componentDidMount() {  
      this.props.getCategories()
    }
  
    render() {    
      const { categories } = this.props
      console.log(categories)
      const listOfCategories = categories.map((category) => {
        return (
          <li>
            {category.name}
          </li>
        )
      })
      
      return(
        <div className="Categories">
          <ul>
            {listOfCategories}
          </ul>
        </div>
      )
    }
  }
  
  const mapStateToProps = ({ categories }) => {
    return {
      categories: categories.categories
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getCategories: () => dispatch(fetchAllCategories())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Categories)