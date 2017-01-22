import React from 'react';
import Card from '../../../../components/Card';
import Spinner from '../../../../components/Spinner';
import './CharactersList.css';

const CharactersList = (props) => {
  const { isFetching, items } = props;

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
        {
          items.map((item) => {
            return (
              <div key={item.id} className="col-xs-12 col-sm-6 col-md-2">
                <Card
                  title={item.name} linkTo={`/characters/${item.id}`}
                  image={`${item.thumbnail.path}/standard_fantastic.${item.thumbnail.extension}`}
                />
              </div>
            );
          })
        }
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
  items: React.PropTypes.arrayOf(React.PropTypes.object),
};

CharactersList.defaultProps = {
  isFetching: false,
  items: [],
};

export default CharactersList;

