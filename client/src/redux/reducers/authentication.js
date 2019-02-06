const initState = {

}

const authentication = (state = initState, action) => {
  if(!action.data || !action.data.token) return state;

  localStorage.setItem('token', action.data.token);

  return {
    ...state,
    ...action.data
  }
}

export default authentication;