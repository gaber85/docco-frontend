const initState = {};

const authentication = (state = initState, action) => {
  if ((!action.data || !action.data.token) && action.type !== "LOG_OUT") return state;

  // if (action.data) {
  //   localStorage.setItem('token', action.data.token);
  // }

  if (action.type === 'LOG_OUT') return initState;

  return {
    ...state,
    ...action.data
  };
};

export default authentication;
