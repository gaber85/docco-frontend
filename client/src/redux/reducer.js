const initState = {
  contracts: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD':
      return state;
    default:
      return state;
  }
}

export default reducer;