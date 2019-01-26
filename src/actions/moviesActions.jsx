import { movieDbConstants } from '../constants';
import { movieDbService } from '../services';

export function getMovies() {
  return dispatch => {
      dispatch(request());

      movieDbService.getTopMovies()
          .then(
            movies => dispatch(success(movies)),
              error => dispatch(failure(error.toString()))
          );
  };

  function request() { return { type: movieDbConstants.GETMOVIES_REQUEST } }
  function success(movies) { return { type: movieDbConstants.GETMOVIES_SUCCESS, movies } }
  function failure(error) { return { type: movieDbConstants.GETMOVIES_FAILURE, error } }
}