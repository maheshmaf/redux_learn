import React from "react";
import { connect } from "react-redux";
import actions from "../state/actions";
import { bindActionCreators } from "redux";
// import { withRouter } from "react-router-dom";

const RepoSearch = props => {
  return (
    <div>
      <h1>Repo Search</h1>
      <form onSubmit={e => props.handleSubmit(e, props.inputValue)}>
        <input value={props.inputValue} onChange={props.handleInputChange} />
      </form>

      <ul>
        {/* {props.repos.map(repo => {
          return (
            <li key={repo.id}>
              {" "}
              <a href={repo.html_url}>{repo.name}</a>{" "}
            </li>
          );
        })} */}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    inputValue: state.handleChange,
    repos: state.repos
  };
}

function mapDispatchToProps(dispatch, getState) {
  return {
    dispatchers: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoSearch);
