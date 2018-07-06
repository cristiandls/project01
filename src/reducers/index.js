import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import loadingReducer from './LoadingReducer';

const rootReducer = combineReducers({
  user: userReducer,
  loading: loadingReducer
});

export default rootReducer;
