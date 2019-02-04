const initState = {
  negotiations: {},
  parties: {},
  proposals: {}
}

const entities = (state = initState, action) => {
  if (!action.data || !action.data.entities ) return state;

  return {
    ...state,
    negotiations: {...state.negotiations, ...action.data.entities.negotiations},
    parties: {...state.parties, ...action.data.entities.parties},
    proposals: {...state.propsals, ...action.data.entities.proposals}
  }


}

export default entities;