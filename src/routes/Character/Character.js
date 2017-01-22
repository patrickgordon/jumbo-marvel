import { connect } from 'react-redux';
import CharacterDetails from './components/CharacterDetails';

const mapStateToProps = (state, ownProps) => ({
  isFetching: state.characters.isFetching,
  character: state.characters.items.filter(item => item.id === parseInt(ownProps.params.id, 10))[0],
  id: ownProps.params.id,
});

export default connect(mapStateToProps)(CharacterDetails);

