import axios from 'axios/lib/axios';

// ======================================================
// Constants
// ======================================================

const FETCH_ALL_REQUEST = 'Characters.FETCH_ALL_REQUEST';
const FETCH_ALL_SUCCESS = 'Characters.FETCH_ALL_SUCCESS';
const FETCH_ALL_FAILURE = 'Characters.FETCH_ALL_FAILURE';

// ======================================================
// Actions
// ======================================================

export function getCharacters() {
  return (dispatch) => {
    dispatch({
      type: FETCH_ALL_REQUEST,
    });

    axios.get('https://gateway.marvel.com:443/v1/public/characters?apikey=37c21e2f4f5552df9929fbac286b8a39')
      .then((response) => {
        dispatch({
          type: FETCH_ALL_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ALL_FAILURE,
          payload: error,
        });
      });
  };
}

// ======================================================
// Reducer
// ======================================================

const initialState = {
  isFetching: false,
  meta: {
    totalRecords: 0,
    offset: 0,
  },
  items: {},
};

export default function charactersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case FETCH_ALL_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        meta: {
          totalRecords: action.payload.data.total,
          offSet: action.payload.data.offset,
        },
        items: action.payload.data.results,
      });
    default:
      return state;
  }
}
