import { connect } from 'react-redux';
import CharactersList from './components/CharactersList';
import { getCharacters as getCharactersFromAPI } from '../../redux/modules/characters';
import { getCharacters, getPaginationParams } from '../../redux/selectors/characters';

const mapStateToProps = state => ({
  isFetching: state.characters.isFetching,
  characters: getCharacters(state),
  paginationParams: getPaginationParams(state),
});

const mapDispatchToProps = {
  getCharactersFromAPI: offset => getCharactersFromAPI(offset),
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);

