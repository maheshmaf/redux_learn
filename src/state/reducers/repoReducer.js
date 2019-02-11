import types from "../action-types";

const initialState = { inputValue: "", repos: [] };

export default function repoReducer(state = initialState, action) {
  switch (action.type) {
    case types.SEARCH_CHANGE:
      return Object.assign({}, state, { inputValue: action.value });
    case types.SEARCH_SUBMIT:
      console.log("reached here");
      return Object.assign({}, state, { repos: action.data });
    default:
      return state;
  }
}
