import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { Row, Col, Button} from 'react-bootstrap'
import PostsList from './PostsList';
import CategoryList from './CategoryList';
import Category from './Category';
import PostDetail from './PostDetail';
import PostForm from './PostForm';
class App extends Component {
  render() {
    console.log('Props', this.props)
    return (
      <div className="app">
        <div className="home_container">
          <h1>Readable - Udacity</h1>
          <p>Gisela Miranda Difini</p>
        </div>
        
        <Switch>
          <Route exact path='/' render={(props) => (
              <Row className="row_container">
                <Col md={2} ></Col>
                <Col lg={8} md={12} sm={12} className="posts_container"><PostsList/></Col>
                <Col lg={2} md={2} className="categories_container">
                  <Link to={`/addPost`} >
                        <Button bsStyle='primary' className='btn_addpost' block>
                            <strong>Add new post</strong>
                        </Button>
                    </Link>
                  <CategoryList/>
                </Col>
              </Row>
              
            )}/>
            <Route
            path="/:category/:id"
            component={PostDetail} />
            <Route
            path="/:category"
            component={Category} />
            <Route
            path="/addPost"
            component={PostForm} />
        </Switch>
      </div>
    );
  }
}

export default App;