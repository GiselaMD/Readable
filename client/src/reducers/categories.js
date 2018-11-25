import {GET_CATEGORIES} from '../actions/categoryActions'

const categories = (state = [], action) => {
    switch(action.type) {
      case GET_CATEGORIES:
        return action.categories //passa o array inteiro
      default:
        return state
    }
  }

  export default categories