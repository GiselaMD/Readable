import {
  getCategories
} from '../utils/api'

export const GET_CATEGORIES = 'GET_CATEGORIES'

export const fetchAllCategories = () => dispatch => (
  getCategories()
    .then(categories => {
        dispatch({
          type: GET_CATEGORIES,
          categories
        })
      })
)
