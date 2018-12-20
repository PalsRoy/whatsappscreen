import {combineReducers} from 'redux';
import UsersReducer from './usersReducer';

const rootReducer = combineReducers({
  usersContext: UsersReducer
});

export default rootReducer;
