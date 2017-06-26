 import { combineReducers } from 'redux';
 import starWarsReducer from './starWarsReducer';
 import {routerReducer} from 'react-router-redux';

 const rootReducer = combineReducers({
  starWarsReducer,
  routing: routerReducer
});

export default rootReducer;