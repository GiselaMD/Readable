import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { Row, Col, Grid} from 'react-bootstrap'
import PostsList from './PostsList';
import CategoryList from './CategoryList';
import Category from './Category';
import PostDetail from './PostDetail';
class App extends Component {
  render() {
    console.log('Props', this.props)
    return (
      <div className="app">
        <div className="home_container">
          <h1>Readable - Udacity</h1>
        </div>
        
        <Switch>
          <Route exact path='/' render={(props) => (
              <Row className="row_container">
                <Col md={2}></Col>
                <Col md={8} className="posts_container"><PostsList/></Col>
                <Col md={2} className="categories_container"><CategoryList/></Col>
              </Row>
              
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

export default App;