import {
    getCommentsForPost,
    addComment,
    getComment,
    voteOnComment,
    editComment,
    deleteComment
} from '../utils/api'


export const GET_COMMENTS_FOR_POST = 'GET_COMMENTS_FOR_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const GET_COMMENT = 'GET_COMMENT'
export const VOTE_ON_COMMENT = 'VOTE_ON_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'


export const voteComment = (commentId, option) => {
    return (dispatch) => {
      voteOnComment(commentId, option).then(
        () => dispatch({ type: VOTE_ON_COMMENT, commentId, option })
      )
    }
  }
  
  export const createComment = (comment) => {
    return (dispatch) => {
      addComment(comment).then(
        () => dispatch({ type: ADD_COMMENT, comment })
      )}
  }
  
  export const fetchComment = (id) => dispatch => (
    getComment(id)
      .then(comment => {
            dispatch({
              type: GET_COMMENT,
              comment
            }) 
      })
  )
  
  export const updateComment = (commentId, body) => {
    return (dispatch) => {
      editComment(commentId, body).then(
        () => dispatch({ type: EDIT_COMMENT, commentId, body })
      )}
  }
  
  export const deleteCurrentComment = (commentId) => {
    return (dispatch) => {
      deleteComment(commentId).then(
      () => dispatch({ type: DELETE_COMMENT, commentId })
      )
    }
  }

  export const fetchAllCommentsForPost = (parentId) => {
    return (dispatch) => {
      getCommentsForPost(parentId).then(comments => {
        dispatch({ 
          type: GET_COMMENTS_FOR_POST, parentId, comments 
        })
      })
    }
  }