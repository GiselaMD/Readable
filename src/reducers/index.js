import {GET_ALL_POSTS} from '../actions'

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

  export default posts