import { LOCATION_CHANGE } from 'react-router-redux';

import initialState from './initialState';


export default function (state = initialState.routing, action) {
  if (action.type === LOCATION_CHANGE) {
    return state.set('locationBeforeTransitions', action.payload);
  }
  return state;
}
