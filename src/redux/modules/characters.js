// ======================================================
// Constants
// ======================================================

const FETCH_ALL = 'Characters.FETCH_ALL';


const initialState = {
  isFetching: false,
  items: {},
};

export default function charactersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL:
      return Object.assign({}, state, {
        isFetching: true,
      });
    default:
      return state;
  }
}