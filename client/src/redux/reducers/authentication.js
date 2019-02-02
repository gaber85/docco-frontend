const initState = {
  authToken: {}
}

const authentication = (state = initState, action) => {
  if(!action.authToken) return state;

  localStorage.setItem('token');

  return {
    ...state,
    authToken: action.authToken
  }
}

export default authentication;