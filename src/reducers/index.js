import {GET_ALL_POSTS, GET_COMMENTS_FOR_POST, GET_CATEGORIES, GET_POST, ADD_COMMENT} from '../actions'
import { combineReducers } from "redux";

// ALL POSTS
const posts = (state = { posts: [] }, action) => {
  switch(action.type) {
    case GET_ALL_POSTS:
      action.post.comments = action.comments
      return {
        posts: [...state.posts, action.post] //adicionando mais um post no estado Posts
      }
    default:
      return state
  }
}

  // ALL CATEGORIES
const categories = (state = { categories: [] }, action) => {
  switch(action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories //passa o objeto inteiro
      }
    default:
      return state
  }
}

// POST
const post = (state = { post: {} }, action) => {
  switch(action.type) {
    case GET_POST:
      action.post.comments = action.comments
      return {
        ...state, 
        post: action.post
      }
    // case REMOVE_POST: 
    //   return {
    //     ...state, 
    //     post: { }
    //   }
    case ADD_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: [...state.post.comments, action.comment]
        }
      }
    default: 
      return state
  }
}

  export default combineReducers({posts: posts, post: post, categories: categories,})