import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import RepoSearch from "./components/RepoSearch";
import CombinedStore from "./CombinedStore";
let store = CombinedStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <RepoSearch />
        </Provider>
      </div>
    );
  }
}

export default App;
