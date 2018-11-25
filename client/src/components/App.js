import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { Row, Col, Button} from 'react-bootstrap'
import PostsList from './PostsList';
import CategoryList from './CategoryList';
import Category from './Category';
import PostDetail from './PostDetail';
import NewPost from './NewPost';
import EditPost from './EditPost';
import NewComment from './NewComment';
import EditComment from './EditComment';
class App extends Component {
  render() {
    console.log('Props', this.props)
    return (
      <div className="app">
      <Link to={'/'} className="noDecoration" >
      <div className="home_container">
          <h1>Readable - Udacity</h1>
          <p>Gisela Miranda Difini</p>
        </div>
      </Link>
       
        
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
            exact
            path="/addPost"
            render={() => (
              <NewPost/>
            )} />
            
            <Route
            exact path="/:commentId/editComment"
            component={EditComment} />

            <Route
            exact path="/:category/:id"
            component={PostDetail} />

            <Route
            exact path="/:category/:id/editPost"
            component={EditPost} />
            
            <Route
            exact path="/:category/:id/addComment"
            component={NewComment} />

            <Route
            path="/:category"
            component={Category} />
            
        </Switch>
      </div>
    );
  }
}

export default App;