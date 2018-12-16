import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utility';

// actions
const toggleLayoutScroll = (state, action) => {
console.log(action.layoutScrollToggler)
  return updateObject(state, {
    layoutScrollToggler: !state.layoutScrollToggler
  })
};

const initialState = {
  layoutScrollToggler: false
};

// actions switcher
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_LAYOUT_SCROLL:
      return toggleLayoutScroll(state, action)

    default:
      return state;
  }
};

export default reducer;