import { combineReducers } from 'redux';
import { getShows } from './tvshows';
import { getMovies } from './movies';

const rootReducer = combineReducers({
    getShows,
    getMovies
  });
  
  export default rootReducer;