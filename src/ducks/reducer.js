import axios from 'axios';

const initialState = {
  user: {},
  locationInfo: {},
};

const _FULFILLED = '_FULFILLED';
const GET_USER = 'GET_USER';
const GET_LOCATION = 'GET_LOCATION';
const ADD_LOCATION = 'ADD_LOCATION';

export function getUser() {
  const user = axios.get('/api/loggedIn').then(res => res.data);
  return {
    type: GET_USER,
    payload: user,
  };
}
export function getLocationInfo(clientId) {
  // I am not particularly proud of this method. I know there is a better way to do this,
  // if I have more time I will go reevaluate my mongoose schema, and see if I can
  // use relations
  const locations = axios.get(`/api/locations/${clientId}`).then(res => res.data);
  const ratings = axios.get(`/api/ratings/${clientId}`).then(res => res.data);
  const notifications = axios.get(`/api/notifications/${clientId}`).then(res => res.data);
  const users = axios.get(`/api/users/${clientId}`).then(res => res.data);
  const locationInfo = axios
    .all([locations, ratings, notifications, users])
    .then(values => ({ locations: values[0], ratings: values[1], notifications: values[2], users: values[3] }));
  return {
    type: GET_LOCATION,
    payload: locationInfo,
  };
}
export function addLocation(location) {
  return {
    type: ADD_LOCATION,
    payload: location,
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER + _FULFILLED:
      return Object.assign({}, state, { user: action.payload });
    case GET_LOCATION + _FULFILLED:
      return Object.assign({}, state, { locationInfo: action.payload });
    case ADD_LOCATION:
      return Object.assign({}, state, { locationInfo: action.payload });

    default:
      return state;
  }
};
