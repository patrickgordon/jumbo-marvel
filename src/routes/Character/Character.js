import React from 'react';
import './Character.css';

const Character = (props) => {
  return (
    <div>I am character {props.params.id}</div>
  );
};

Character.propTypes = {};

export default Character;

