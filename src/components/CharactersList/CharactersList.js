import React from 'react';
import Card from '../Card';
import Spinner from '../Spinner';
import './CharactersList.css';

const CharactersList = (props) => {
  const { isFetching } = props;

  const spinner = (
    <div className="row center-xs">
      <div className="col-xs-12 col-sm-6">
        <Spinner />
      </div>
    </div>
  );

  const characterList = (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <h4 className="CharacterList__background-text">Characters</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <Card title="Deadpool" />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <Card title="Punisher" />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <Card title="Wolverine" />
        </div>
      </div>
    </div>
  );

  return (

    isFetching ?
      spinner
      :
      characterList
  );
};

CharactersList.propTypes = {
  isFetching: React.PropTypes.bool,
};

CharactersList.defaultProps = {
  isFetching: false,
};

export default CharactersList;

