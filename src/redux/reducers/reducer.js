import {combineReducers} from 'redux';
import entities from './entities';
import authentication from './authentication';
import pages from './pages';

const reducer = combineReducers({
  entities,
  authentication,
  pages
});

export default reducer;
