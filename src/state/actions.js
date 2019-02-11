import axios from "axios";
import types from "./action-types";

export default {
  handleInputChange: e => ({
    type: types.SEARCH_CHANGE,
    value: e.target.value
  }),
  handleSubmit: (e, query) => {
    e.preventDefault();
    return function apiCall(dispatch, getState) {
      axios
        .get(`https://api.github.com/search/repositories?q=${query}`)
        .then(res => {
          dispatch({ type: types.SEARCH_SUBMIT, data: res.data.items });
        });
    };
  }
};
