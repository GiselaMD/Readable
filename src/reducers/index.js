import {GET_ALL_POSTS, GET_CATEGORIES, GET_POST, ADD_COMMENT, VOTE_ON_POST, GET_POST_IN_CATEGORY} from '../actions'
import { combineReducers } from "redux";

// ALL POSTS
const posts = (state = { posts: [] }, action) => {
  switch(action.type) {
    case GET_ALL_POSTS:
    console.log('GET_all_posts: ',action)
      action.post.comments = action.comments
      return {
        posts: [...state.posts, action.post] //adicionando mais um post no estado Posts
      }
    case VOTE_ON_POST:
      return{
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.postId) {
            if (action.option === "upVote") {
              post.voteScore += 1
            }
            if (action.option === "downVote") {
              post.voteScore -= 1
            }
          }
          return post
        })
      } 
      case GET_POST_IN_CATEGORY:
        return {
          ...state,
          posts: action.posts
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
    console.log('GET_POST: ',action)
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