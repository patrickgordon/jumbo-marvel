import { createSelector } from 'reselect';

export const getCharacters = state => state.characters.items;
export const getCharacter = (state, id) => state.characters.items.filter(item => item.id.toString() === id)[0];
export const getPaginationParams = (state) => {
  return {
    totalPages: Math.ceil(state.characters.meta.totalRecords / 50),
  };
};

export const getComics = createSelector(
  [getCharacter],
  (character) => {
    if (character) {
      return {
        meta: {
          returned: character.comics.returned,
          total: character.comics.available,
        },
        items: character.comics.items,
      };
    }

    return {
      meta: {},
      items: [],
    };
  },
);

export const getStories = createSelector(
  [getCharacter],
  (character) => {
    if (character) {
      return {
        meta: {
          returned: character.stories.returned,
          total: character.stories.available,
        },
        items: character.stories.items,
      };
    }

    return {
      meta: {},
      items: [],
    };
  },
);

export const getSeries = createSelector(
  [getCharacter],
  (character) => {
    if (character) {
      return {
        meta: {
          returned: character.series.returned,
          total: character.series.available,
        },
        items: character.series.items,
      };
    }

    return {
      meta: {},
      items: [],
    };
  },
);

export const getEvents = createSelector(
  [getCharacter],
  (character) => {
    if (character) {
      return {
        meta: {
          returned: character.events.returned,
          total: character.events.available,
        },
        items: character.events.items,
      };
    }

    return {
      meta: {},
      items: [],
    };
  },
);
