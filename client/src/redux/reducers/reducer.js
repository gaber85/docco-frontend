const initState = {
  contracts: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD':
      return {...state, contracts: [...state.contracts, action.contract]}
    default:
      return state;
  }
}

export default reducer;