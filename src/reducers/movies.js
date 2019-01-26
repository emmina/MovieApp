import { movieDbConstants } from '../constants';

const initialState = {};

export function getMovies(state = initialState, action) {
  switch (action.type) {
    case movieDbConstants.GETMOVIES_REQUEST:
      return {
        shows: action.shows
      };
    case movieDbConstants.GETMOVIES_SUCCESS:
      return {
        shows: action.shows
      };
    case movieDbConstants.GETMOVIES_FAILURE:
      return {};
    default:
      return state
  }
}