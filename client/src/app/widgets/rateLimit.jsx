import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRateLimit } from '../../shared/action';
import Loading from './loading';

const RateLimit = ({ client, dispatch, rateLimit }) => {
  dispatch(getRateLimit(client));
  return (
    <div>
      The rate limit is: { rateLimit || <Loading /> }
    </div>
  )
};

RateLimit.defaultProps = {
  rateLimit: undefined
};

RateLimit.propTypes = {
  client: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  rateLimit: PropTypes.number
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(RateLimit);
