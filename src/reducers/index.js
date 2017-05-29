import { combineReducers } from 'redux-immutable';

import epic from './epicReducer';
import routing from './routerReducer';


const rootReducer = combineReducers({
  epic,
  routing,
});

export default rootReducer;
