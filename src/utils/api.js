import uuid from 'uuid';
const api = "http://localhost:3001"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

//Get all of the categories available for the app
export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

//Get all of the posts for a particular category.
export const getPostsInCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

//Get all of the posts. No category selected.
export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

//Add a new post.
export const addPost = (title, body, author, category) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body, author, category, id: uuid(), timestamp:Date.now()})
  }).then(res => res.json())

//Get specific post
export const getPost = (postId) =>
  fetch(`${api}/posts/${postId}`, { headers })
      .then(res => res.json())

//Vote on a post
export const voteOnPost = (postId, thumbsUp) =>
    fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({'option': thumbsUp? 'upVote' : 'downVote'}) //or just option
    }).then(res => res.json())

//Edit the details of an existing post
export const editPost = (postId, title, body) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'PUT',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body})
  }).then(res => res.json())

//Sets the deleted flag for a post to 'true'. Sets the parentDeleted flag for all child comments to 'true'
export const deletePost = (postId) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers: headers
  }).then(res => res.json())
  .then(data => data)

//Get all the comments for a single post
export const getCommentsForPost = (postId) =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)

//Add a comment to a post
export const addComment = (body, author, parentId) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ parentId, body, author, id: uuid(), timestamp:Date.now()})
  }).then(res => res.json())

//Get specific comment
export const getComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, { headers })
      .then(res => res.json())

//Vote on a comment
export const voteOnComment = (commentId, thumbsUp) =>
    fetch(`${api}/comments/${commentId}`, {
    method: 'POST',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: thumbsUp? 'upVote' : 'downVote'}) //or option
    }).then(res => res.json())

//Edit the details of an existing comment
export const editComment = (commentId, body) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'PUT',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({timestamp:Date.now(), body})
  }).then(res => res.json())

//Sets a comment's deleted flag to true
export const deleteComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers: headers
  }).then(res => res.json())

