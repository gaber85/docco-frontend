const initState = {
  negotiations: {}
}

const entities = (state = initState, action) => {
  if (!action.data || !action.data.entities ) return state;

  return {
    ...state,
    negotiations: {...state.negotiations, ...action.data.entities.negotiations}
  }


}

export default entities;