import actions from 'redux/Authenticate/actions';

const initialState = {
  isAuthenticated: false,
  loader: false,
}

function Reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN:
      return {...state, loader: true}
    case actions.LOGIN_SUCCESS:
      return {...state, isAuthenticated: !!action.response.data.token, loader: false}
    case actions.LOGIN_FAILURE:
      return {...state, isAuthenticated: false, loader: false}
    default:
      return state
  }
}

export default Reducer;
