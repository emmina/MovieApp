import { movieDbConstants } from '../constants';

const initialState = {};

export function getShows(state = initialState, action) {
  switch (action.type) {
    case movieDbConstants.GETSHOWS_REQUEST:
      return {
        shows: action.shows
      };
    case movieDbConstants.GETSHOWS_SUCCESS:
      return {
        shows: action.shows
      };
    case movieDbConstants.GETSHOWS_FAILURE:
      return {};
    default:
      return state
  }
}