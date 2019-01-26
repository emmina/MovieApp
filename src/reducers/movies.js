import { movieDbConstants } from '../constants';

const initialState = {};

export function getMovies(state = initialState, action) {
  switch (action.type) {
    case movieDbConstants.GETMOVIES_REQUEST:
      return {
        movies: action.movies
      };
    case movieDbConstants.GETMOVIES_SUCCESS:
      return {
        movies: action.movies
      };
    case movieDbConstants.GETMOVIES_FAILURE:
      return {};
    default:
      return state
  }
}