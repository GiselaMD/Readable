import {GET_ALL_POSTS, GET_COMMENTS_FOR_POST, GET_CATEGORIES} from '../actions'
import { combineReducers } from "redux";

// ALL POSTS
const posts = (state = { posts: [] }, action) => {
  switch(action.type) {
    case GET_ALL_POSTS:
      //action.post.comments = action.comments
      return {
        posts: [...state.posts, action.post]
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
        categories: action.categories
      }
    default:
      return state
  }
}

  export default combineReducers({posts, categories,})