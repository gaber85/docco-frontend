import {combineReducers} from 'redux';
import entities from './entities';
import authentication from './authentication';

// const initState = {
//   contracts: []
// }


// const reducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'ADD':
//       return {...state, contracts: [...state.contracts, action.contract]}
//     default:
//       return state;
//   }
// }

const reducer = combineReducers({
  entities,
  authentication
});

export default reducer;