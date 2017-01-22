import React from 'react';
import Panel from '../../../../components/Panel';
import './CharacterDetails.css';

const CharacterDetails = (props) => {
  const { character } = props;
  const imgSrc = character.thumbnail ?
    `${character.thumbnail.path}/standard_xlarge.${character.thumbnail.extension}`
    :
    '';
  const detailsLink = character.urls ? character.urls[0].url : '';
  const wikiLink = character.urls ? character.urls[1].url : '';

  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <Panel>
            <div className="CharacterDetails__top-details">
              <div className="TopDetails__avatar-container">
                <img
                  src={imgSrc}
                  alt={character.name}
                />
              </div>
              <div className="TopDetails__text-container">
                <h1>{character.name}</h1>
                <ul className="TopDetails__links">
                  <li><a href={detailsLink}>Details</a></li>
                  <li><a href={wikiLink}>Wiki</a></li>
                </ul>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
};

CharacterDetails.propTypes = {
  character: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
};

CharacterDetails.defaultProps = {
  character: {},
};

export default CharacterDetails;

