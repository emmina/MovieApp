import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../../helpers/Navbar';
import { moviesActions } from '../../actions';
import { TableList } from '../../helpers';

class Movies extends Component {

    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(moviesActions.getMovies());
    }

    render() {
        const { movies } = this.props;

        return (
            <div className="tv-shows">
                <Navbar active='movies'/>
                <TableList category='movies' list={movies !== undefined ? movies.results : []}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { getMovies } = state;

    return {
        movies: getMovies.movies
    };
};

Movies = connect(mapStateToProps)(Movies);
export default Movies;