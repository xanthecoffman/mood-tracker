import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const SET_RESULT = 'SET_RESULT'

/**
 * INITIAL STATE
 */
const defaultResult = {}

/**
 * ACTION CREATORS
 */
const setResult = result => ({type: SET_RESULT, result})

/**
 * THUNK CREATORS
 */
export const getResult = id => async dispatch => {
  try {
    console.log('this is the id i got', id)
    const res = await axios.get(`api/results/${id}`)
    console.log('res.data is', res.data)
    dispatch(setResult(res.data))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = defaultResult, action) {
  switch (action.type) {
    case SET_RESULT:
      return action.result
    default:
      return state
  }
}
