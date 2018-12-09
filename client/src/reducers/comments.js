import {GET_COMMENTS_FOR_POST, GET_COMMENT, VOTE_ON_COMMENT, ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT} from '../actions/commentActions'

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
          return state.map(comment => {
              if(comment.id === action.commentId) {
                return{
                  ...comment,
                  body: action.body
                }
              }
              return comment
            })
  
      case DELETE_COMMENT:
        return state.filter(comment => comment.id !== action.commentId)
  
      default:
        return state
    }
  }

export default comments