const initState = {
  entities: {},
  results: []
}

const entities = (state = initState, action) => {
  if (!action.entities) return state;

  return {
    ...state,
    user: {...state.user, ...action.entities.user},
  }


}

export default entities;