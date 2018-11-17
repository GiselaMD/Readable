import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux'
import { fetchAllPosts } from '../actions';
import PostsList from './PostsList';
import {Breadcrumb} from 'react-bootstrap'
import CategoryList from './CategoryList';
import Category from './Category';
import PostDetail from './PostDetail';
class App extends Component {
  // componentDidMount() {
  //   this.props.getPosts()
  // }
  
  render() {
    console.log('Props', this.props)
    const {posts} = this.props
    return (
      <div className="app">
        <div className="home_container">
          <h1>Readable - Udacity</h1>
        </div>
        
        <Switch>
          <Route exact path='/' render={(props) => (
            <div>
              <div className="row row_container">
              <div className="col-md-2"></div>
                <div className="col-md posts_container"><PostsList/></div>
                <div className="col-md-2 categories_container"><CategoryList/></div>
              </div>
              
              </div>
            )}/>
            <Route
            path="/:category/:id"
            component={PostDetail} />
            <Route
            path="/:category"
            component={Category} />
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   posts: state.posts
// });

// const mapDispatchToProps = dispatch => ({
//     getPosts: () => dispatch(fetchAllPosts())
// });

export default App;