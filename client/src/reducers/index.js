import {GET_ALL_POSTS, GET_CATEGORIES, GET_POST, ADD_COMMENT, VOTE_ON_POST, GET_POST_IN_CATEGORY, GET_COMMENT, VOTE_ON_COMMENT, GET_COMMENTS_FOR_POST, SORT_POST, DELETE_POST, ADD_POST, DELETE_COMMENT, EDIT_POST, EDIT_COMMENT} from '../actions'
import { combineReducers } from "redux";
import sortBy from 'sort-by'

// ALL POSTS
const posts = (state = [], action) => {
  switch(action.type) {
    case GET_ALL_POSTS:
    console.log('GET_all_posts: ',action)
      return action.posts

    case GET_POST:
      return [action.post]

    case VOTE_ON_POST:
      return state.map(post => {
          if (post.id === action.postId) {
            post = {...post} //forcando renderizacao
            if (action.option === "upVote") {
              post.voteScore += 1
            }
            if (action.option === "downVote") {
              post.voteScore -= 1
            }
          }
          return post
      })

    case GET_POST_IN_CATEGORY:
      return action.posts
    
    case SORT_POST:
    console.log('SORT: ',action)
      return [].concat(state.sort(sortBy("-"+action.sortType))) // "-voteScore" or "-timestamp" 

    case DELETE_POST:
      return state.filter(post => post.id !== action.postId)

    case ADD_POST:
    console.log('ADD_POST: ',action)
      return state.concat([action.post])

    case EDIT_POST:
    console.log('EDIT_POST: ',action)
      return state.map(post => {
          if(post.id === action.postId) {
            post.title = action.title
            post.body = action.body
          }
          return post
        })

    default:
      return state
  }
}

  // ALL CATEGORIES
const categories = (state = [], action) => {
  switch(action.type) {
    case GET_CATEGORIES:
      return action.categories //passa o array inteiro
    default:
      return state
  }
}

function comments (state = [], action) {
  switch(action.type) {
    case GET_COMMENTS_FOR_POST:
      return action.comments

    case GET_COMMENT:
      return [action.comment]

    case VOTE_ON_COMMENT:
      return state.map(comment => {
        if (comment.id === action.commentId) {
          comment = {...comment} //forcando renderizacao
          if (action.option === "upVote") {
            comment.voteScore += 1
          }
          if (action.option === "downVote") {
            comment.voteScore -= 1
          }
        }
        return comment
    })

    case ADD_COMMENT:
      return state.concat([action.comment])

    case EDIT_COMMENT:
      console.log('EDIT_COMMENT: ',action)
        return state.map(comment => {
            if(comment.id === action.commentId) {
              comment.body = action.body
            }
            return comment
          })

    case DELETE_COMMENT:
      return state.filter(comment => comment.id !== action.commentId)

    default:
      return state
  }
}

  export default combineReducers({posts: posts, categories: categories, comments: comments})