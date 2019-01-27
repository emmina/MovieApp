import { combineReducers } from 'redux';
import { getShows, getShow } from './tvshows';
import { getMovies, getMovie } from './movies';

const rootReducer = combineReducers({
    getShows,
    getMovies,
    getMovie,
    getShow
  });
  
  export default rootReducer;