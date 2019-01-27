import { movieDbConstants } from '../constants';
import { showDbService } from '../services';

function getShows() {
  return dispatch => {
      dispatch(request());

      showDbService.getTopShows()
          .then(
            shows => dispatch(success(shows)),
              error => dispatch(failure(error.toString()))
          );
  };

  function request() { return { type: movieDbConstants.GETSHOWS_REQUEST } }
  function success(shows) { return { type: movieDbConstants.GETSHOWS_SUCCESS, shows } }
  function failure(error) { return { type: movieDbConstants.GETSHOWS_FAILURE, error } }
}

function getShowById(id) {
  return dispatch => {
      dispatch(request());

      showDbService.getShowById(id)
          .then(
            show => dispatch(success(show)),
              error => dispatch(failure(error.toString()))
          );
  };

  function request() { return { type: movieDbConstants.GETSHOW_REQUEST } }
  function success(show) { return { type: movieDbConstants.GETSHOW_SUCCESS, show } }
  function failure(error) { return { type: movieDbConstants.GETSHOW_FAILURE, error } }
}

export const showsActions = {
  getShows,
  getShowById
};