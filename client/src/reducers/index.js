import { combineReducers } from "redux";

import posts from './posts'
import categories from './categories'
import comments from './comments'

export default combineReducers({posts: posts, categories: categories, comments: comments})