import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { retrieveListRepos } from '../../shared/action';
import Loading from './loading';

const renderRepos = (repos) => {
  repos.map((repo) => (
    <div key={repo.name}>
      repo.name <br />
    </div>
  ));
}

const List = ({ dispatch, client, repos }) => {
  dispatch(retrieveListRepos(client));
  return (
    <div>
      Repos : { repos || <Loading /> }
    </div>
  )
};

List.defaultProps = {
  repos: undefined
};

List.propTypes = {
  client: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  repos: PropTypes.object
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(List);
