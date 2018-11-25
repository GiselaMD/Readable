import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchAllCategories } from '../actions/categoryActions'

class CategoryList extends Component {
  
    componentDidMount() {  
      this.props.getCategories()
    }
  
    render() {    
      const { categories } = this.props
      console.log(categories)
      const listOfCategories = categories.map((category) => {
        return (
          <div key={category.name}>
            <Link to={`/${category.path}`}>
              {category.name}
            </Link>
          </div>
        )
      })
      
      return(
        <div className="Categories">
        <h4>Categories: </h4>
          
            {categories ? listOfCategories : null}
          
        </div>
      )
    }
  }
  
  const mapStateToProps = ({ categories }) => {
    return {
      categories: categories
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getCategories: () => dispatch(fetchAllCategories())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)