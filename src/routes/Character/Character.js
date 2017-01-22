import { connect } from 'react-redux';
import CharacterDetails from './components/CharacterDetails';
import {
  getCharacter,
  getComics,
  getStories,
  getSeries,
  getEvents,
} from '../../redux/selectors/characters';

const mapStateToProps = (state, ownProps) => ({
  isFetching: state.characters.isFetching,
  character: getCharacter(state, ownProps.params.id),
  comics: getComics(state, ownProps.params.id),
  stories: getStories(state, ownProps.params.id),
  series: getSeries(state, ownProps.params.id),
  events: getEvents(state, ownProps.params.id),
  id: ownProps.params.id,
});

export default connect(mapStateToProps)(CharacterDetails);

