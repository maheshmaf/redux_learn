import { createStore, combineReducers, applyMiddleware } from "redux";
import repoReducer from "./state/reducers/repoReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

let combinedStore = () => {
  const rootReducer = combineReducers({
    repo: repoReducer
  });

  const store = createStore(rootReducer, applyMiddleware(logger, thunk));
  return store;
};

export default combinedStore;
