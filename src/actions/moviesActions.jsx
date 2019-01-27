import { movieDbConstants } from '../constants';
import { movieDbService } from '../services';

function getMovies() {
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

function getMovieById(id) {
  return dispatch => {
    dispatch(request());

    movieDbService.getMovieById(id)
        .then(
          movie => dispatch(success(movie)),
            error => dispatch(failure(error.toString()))
        );
};

function request() { return { type: movieDbConstants.GETMOVIE_REQUEST } }
function success(movie) { return { type: movieDbConstants.GETMOVIE_SUCCESS, movie } }
function failure(error) { return { type: movieDbConstants.GETMOVIE_FAILURE, error } }
}

export const moviesActions = {
  getMovies,
  getMovieById
};