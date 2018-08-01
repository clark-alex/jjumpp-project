import axios from "axios";
const initialState = {
  user: {}
}

const GET_USER = 'GET_USER'
const _FULFILLED = '_FULFILLED'

export function getUser() {
  const user = axios.get('/api/loggedIn').then((res)=>res.data)
  // console.log(user)
  return {
    type: GET_USER,
    payload: user
  }
}
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER + _FULFILLED:
      return Object.assign({}, state, { user: action.payload })

    default:
      return state
  }
};
