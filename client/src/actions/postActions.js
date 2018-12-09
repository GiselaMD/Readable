import {
    getPostsInCategory,
    getPosts,
    addPost,
    getPost,
    voteOnPost,
    editPost,
    deletePost
} from '../utils/api'

export const GET_POST_IN_CATEGORY = 'GET_POST_IN_CATEGORY'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const ADD_POST = 'ADD_POST'
export const GET_POST = 'GET_POST'
export const VOTE_ON_POST = 'VOTE_ON_POST'
export const SORT_POST = 'SORT_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
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
    return (dispatch) => {
      addPost(post).then(
        () => dispatch({ type: ADD_POST, post })
      )}
  }
  
  export const updatePost = (postId, title, body) => {
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

  export const updateCommentCount = (postId) => dispatch => dispatch({ type: UPDATE_COMMENT_COUNT, postId })
