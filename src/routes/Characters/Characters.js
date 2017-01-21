import { connect } from 'react-redux';
import CharactersList from '../../components/CharactersList';

const mapStateToProps = state => ({
  isFetching: state.characters.isFetching,
  items: state.characters.items,
});
// const mapDispatchToProps = () => {
// };

export default connect(mapStateToProps)(CharactersList);

