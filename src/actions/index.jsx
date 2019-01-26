import { createAction } from 'redux-act';

import { getMovies } from './moviesActions';
import { getShows } from './showsActions';

export { getMovies, getShows };

export const setLocale = createAction('SET_LOCALE');