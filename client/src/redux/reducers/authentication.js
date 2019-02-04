const initState = {
  authToken: null,
  user: {},
}

const authentication = (state = initState, action) => {
  if(!action.authToken || !action.user) return state;

  localStorage.setItem('token');

  return {
    ...state,
    authToken: action.authToken,
    user: action.user
  }
}

export default authentication;