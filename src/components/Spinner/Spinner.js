import React from 'react';

const Spinner = () => {
  return (
    <div>
      <i className="fa fa-cog fa-spin fa-3x fa-fw" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

Spinner.propTypes = {};

export default Spinner;

