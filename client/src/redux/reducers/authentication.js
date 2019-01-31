const initState = {
  auth_token:''
}

const authentication = (state = initState, action) => {
  if(!action.auth_token) return state;

  return {
    ...state,
    auth_token: action.auth_token
  }
}

export default authentication;