import sortBy from 'sort-by'
import {GET_ALL_POSTS, GET_POST, VOTE_ON_POST, GET_POST_IN_CATEGORY, SORT_POST, DELETE_POST, ADD_POST, EDIT_POST, UPDATE_COMMENT_COUNT} from '../actions/postActions'

const posts = (state = [], action) => {
    switch(action.type) {
      case GET_ALL_POSTS:
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
        return [].concat(state.sort(sortBy("-"+action.sortType))) // "-voteScore" or "-timestamp" 
  
      case DELETE_POST:
        return state.filter(post => post.id !== action.postId)
  
      case ADD_POST:
        return state.concat([action.post])
  
      case EDIT_POST:
        return state.map(post => {
            if(post.id === action.postId) {
              return {
                ...post,
                title: action.title,
                body: action.body
              }
            }
            return post
          })
        
      case UPDATE_COMMENT_COUNT:
          return state.map(post => {
            if (post.id === action.postId) {
              return{
                ...post,
                commentCount: post.commentCount -= 1
              }
            }
            return post
          })
      default:
        return state
    }
  }

  export default posts