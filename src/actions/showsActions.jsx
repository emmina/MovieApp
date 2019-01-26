import { movieDbConstants } from '../constants';
import { movieDbService } from '../services';

export function getShows() {
  return dispatch => {
      dispatch(request());

      movieDbService.getTopShows()
          .then(
            shows => dispatch(success(shows)),
              error => dispatch(failure(error.toString()))
          );
  };

  function request() { return { type: movieDbConstants.GETSHOWS_REQUEST } }
  function success(shows) { return { type: movieDbConstants.GETSHOWS_SUCCESS, shows } }
  function failure(error) { return { type: movieDbConstants.GETSHOWS_FAILURE, error } }
}