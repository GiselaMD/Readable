import {
    getCategories,
    getPostsInCategory,
    getPosts,
    addPost,
    getPost,
    voteOnPost,
    editPost,
    deletePost,
    getCommentsForPost,
    addComment,
    getComment,
    voteOnComment,
    editComment,
    deleteComment
} from '../utils/api'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_POST_IN_CATEGORY = 'GET_POST_IN_CATEGORY'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const ADD_POST = 'ADD_POST'
export const GET_POST = 'GET_POST'
export const VOTE_ON_POST = 'VOTE_ON_POST'
export const SORT_POST = 'SORT_POST'
export const VOTE_ON_POST_FROMPOST = 'VOTE_ON_POST_FROMPOST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const GET_COMMENTS_FOR_POST = 'GET_COMMENTS_FOR_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const GET_COMMENT = 'GET_COMMENT'
export const VOTE_ON_COMMENT = 'VOTE_ON_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const UPDATE_COMMENT_COUNT = 'UPDATE_COMMENT_COUNT'

export const fetchAllPosts = () => dispatch => (
  getPosts()
    .then(posts => {
            dispatch({
              type: GET_ALL_POSTS,
              posts
            })
      })
)
export const fetchPost = (id) => dispatch => (
  getPost(id)
    .then(post => {
          dispatch({
            type: GET_POST,
            post
          }) 
    })
)

export const createPost = (post) => {
  console.log(post)
  return (dispatch) => {
    addPost(post).then(
      () => dispatch({ type: ADD_POST, post })
    )}
}

export const updatePost = (postId, title, body) => {
  console.log("action update post:", postId, title, body)
  return (dispatch) => {
    editPost(postId, title, body).then(
      () => dispatch({ type: EDIT_POST, postId, title, body })
    )}
}

export const getAllPostsCategoryAction = (category) => dispatch => (
  getPostsInCategory(category)
    .then((posts) => {
      dispatch({
        type: GET_POST_IN_CATEGORY,
        posts
      })
    })
)

export const votePost = (postId, option) => {
  console.log(option)
  return (dispatch) => {
    voteOnPost(postId, option).then(
      () => dispatch({ type: VOTE_ON_POST, postId, option })
    )
  }
}

export const sortPost = (sortType) => {
  return dispatch => {
    dispatch({ type: SORT_POST, sortType })
  }
}

export const deleteCurrentPost = (postId) => {
  return (dispatch) => {
    deletePost(postId).then(
    () => dispatch({ type: DELETE_POST, postId })
    )
  }
}

export const voteComment = (commentId, option) => {
  console.log(option)
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
  console.log("action update COMMENT:", commentId, body)
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

export const updateCommentCount = (postId) => dispatch => dispatch({ type: UPDATE_COMMENT_COUNT, postId })

  export const fetchAllCategories = () => dispatch => (
    getCategories()
      .then(categories => {
          dispatch({
            type: GET_CATEGORIES,
            categories
          })
        })
  )

  export const fetchAllCommentsForPost = (parentId) => {
    return (dispatch) => {
      getCommentsForPost(parentId).then(comments => {
        dispatch({ 
          type: GET_COMMENTS_FOR_POST, parentId, comments 
        })
      })
    }
  }