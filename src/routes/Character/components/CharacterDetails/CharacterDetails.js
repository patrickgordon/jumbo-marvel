import React from 'react';
import Panel from '../../../../components/Panel';
import ListGroup from '../../../../components/ListGroup';
import ListGroupItem from '../../../../components/ListGroupItem';
import Spinner from '../../../../components/Spinner';
import BackgroundText from '../../../../components/BackgroundText';
import './CharacterDetails.css';

const CharacterDetails = (props) => {
  const { isFetching, character, comics, stories, series, events } = props;

  const imgSrc = character.thumbnail ?
    `${character.thumbnail.path}/standard_xlarge.${character.thumbnail.extension}`
    :
    '';

  const LINK_TEXT = {
    detail: 'Details',
    comiclink: 'Comics',
    wiki: 'Wiki Page',
  };

  let links;
  if (character.urls) {
    links = (
      <ul className="TopDetails__links">
        {
          character.urls.map((url) => {
            return (
              <li key={url.type}>
                <a href={url.url}>{LINK_TEXT[url.type]}</a>
              </li>
            );
          })
        }
      </ul>
    );
  }


  const description = character.description ? character.description : '';
  const comicCount = character.comics ? character.comics.available : 0;
  const storiesCount = character.stories ? character.stories.available : 0;
  const seriesCount = character.series ? character.series.available : 0;
  const eventsCount = character.events ? character.events.available : 0;

  const comicList = comicCount > 0 ?
    (
      <div>
        {
          comics.items.map((comic) => {
            return (
              <ListGroupItem
                key={comic.resourceURI}
                text={comic.name}
              />
            );
          })
        }
      </div>
    )
    :
    (
      <ListGroupItem text="No comics" />
    );

  const storiesList = storiesCount > 0 ?
    (
      <div>
        {
          stories.items.map((story) => {
            return (
              <ListGroupItem
                key={story.resourceURI}
                text={story.name}
              />
            );
          })
        }
      </div>
    )
    :
    (
      <ListGroupItem text="No stories" />
    );

  const seriesList = seriesCount > 0 ?
    (
      <div>
        {
          series.items.map((item) => {
            return (
              <ListGroupItem
                key={item.resourceURI}
                text={item.name}
              />
            );
          })
        }
      </div>
    )
    :
    (
      <ListGroupItem text="No series" />
    );

  const eventsList = eventsCount > 0 ?
    (
      <div>
        {
          events.items.map((event) => {
            return (
              <ListGroupItem
                key={event.resourceURI}
                id={event.name}
                text={event.name}
              />
            );
          })
        }
      </div>
    )
    :
    (
      <ListGroupItem text="No events" />
    );


  return (
    <div>
      {isFetching &&
      <div className="row center-xs">
        <div className="col-xs-12 col-sm-6">
          <Spinner />
        </div>
      </div>
      }

      {!isFetching &&
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-8">
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
                  {links}
                  {description &&
                  <div>
                    {description}
                  </div>
                  }
                </div>
              </div>
            </Panel>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4">
            <Panel bodyStyle={{ padding: 0 }}>
              <ListGroup>
                <ListGroupItem text="Comics" subText={comicCount} />
                <ListGroupItem text="Stories" subText={storiesCount} />
                <ListGroupItem text="Series" subText={seriesCount} />
                <ListGroupItem text="Events" subText={eventsCount} />
              </ListGroup>
            </Panel>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12, col-md-3">
            <BackgroundText
              text="Comics"
              subText={`Displaying ${comics.meta.returned} of ${comics.meta.total}`}
            />
            <div className="row">
              <div className="col-xs">
                <Panel bodyStyle={{ padding: 0 }}>
                  <ListGroup>
                    {comicList}
                  </ListGroup>
                </Panel>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12, col-md-3">
            <BackgroundText
              text="Stories"
              subText={`Displaying ${stories.meta.returned} of ${stories.meta.total}`}
            />
            <div className="row">
              <div className="col-xs">
                <Panel bodyStyle={{ padding: 0 }}>
                  <ListGroup>
                    {storiesList}
                  </ListGroup>
                </Panel>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12, col-md-3">
            <BackgroundText
              text="Series"
              subText={`Displaying ${series.meta.returned} of ${series.meta.total}`}
            />
            <div className="row">
              <div className="col-xs">
                <Panel bodyStyle={{ padding: 0 }}>
                  <ListGroup>
                    {seriesList}
                  </ListGroup>
                </Panel>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12, col-md-3">
            <BackgroundText
              text="Events"
              subText={`Displaying ${events.meta.returned} of ${events.meta.total}`}
            />
            <div className="row">
              <div className="col-xs">
                <Panel bodyStyle={{ padding: 0 }}>
                  <ListGroup>
                    {eventsList}
                  </ListGroup>
                </Panel>
              </div>
            </div>
          </div>
        </div>

      </div>
      }
    </div>
  );
};

CharacterDetails.propTypes = {
  isFetching: React.PropTypes.bool,
  character: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
  comics: React.PropTypes.objectOf(React.PropTypes.any),
  series: React.PropTypes.objectOf(React.PropTypes.any),
  stories: React.PropTypes.objectOf(React.PropTypes.any),
  events: React.PropTypes.objectOf(React.PropTypes.any),
};

CharacterDetails.defaultProps = {
  isFetching: false,
  character: {},
  comics: {},
  series: {},
  stories: {},
  events: {},
};

export default CharacterDetails;

