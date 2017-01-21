import React from 'react';
import Card from '../Card';
import './CharactersList.css';

const CharactersList = (props) => {
  return (
    <div className="row center-sm">
      <div className="col-xs-12 col-sm-6 col-md-3">
        <Card title="Deadpool" />
      </div>
      <div className="col-xs-12 col-sm-6 col-md-3">
        <Card title="Punisher" />
      </div>
      <div className="col-xs-12 col-sm-6 col-md-3">
        <Card title="Wolverine" />
      </div>
    </div>
  );
};

CharactersList.propTypes = {};

export default CharactersList;

