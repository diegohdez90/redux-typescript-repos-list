import { combineReducers } from 'redux';
import repositories from './repositories';

const reducers = combineReducers({
  repositories: repositories,
});

export default reducers;
