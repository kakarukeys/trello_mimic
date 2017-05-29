import initialState from './initialState';


export default function (state = initialState.epic, action) {
  switch (action.type) {
    default:
      return state;
  }
}
