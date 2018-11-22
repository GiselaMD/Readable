import {GET_ALL_POSTS, GET_CATEGORIES, GET_POST, ADD_COMMENT, VOTE_ON_POST, VOTE_ON_POST_FROMPOST, GET_POST_IN_CATEGORY, GET_COMMENT, VOTE_ON_COMMENT, GET_COMMENTS_FOR_POST} from '../actions'
import { combineReducers } from "redux";

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

    default:
      return state
  }
}

  export default combineReducers({posts: posts, categories: categories, comments: comments})