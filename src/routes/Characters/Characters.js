import React from 'react';
import Link from 'react-router/lib/Link';
import './Characters.css';

const Characters = (props) => {
  return (
    <div className="row center-sm">
      <div className="col-xs-12 col-sm-12 col-md-6">
        I am characters route
        <br/>
        <Link to="/characters/1">Character 1</Link>
      </div>
    </div>
  );
};

Characters.propTypes = {};

export default Characters;

