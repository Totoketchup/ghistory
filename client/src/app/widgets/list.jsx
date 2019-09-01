import React from 'react';
import PropTypes from 'prop-types';

const List = ({ client }) => {
  const listRepos = client.getListOfRepos();
  return (
    <div>
      Empty
    </div>
  )
  // console.log(listRepos);
  // return (
  //   <div>
  //     { listRepos.map((repos) => <span key={ repos }> { repos } </span> ) }
  //   </div>
  // )
};

List.propTypes = {
  client: PropTypes.object.isRequired
};

export default List;
