import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../../helpers/Navbar';
import { getMovies } from '../../actions';
import TableList from '../../helpers/TableList';

class Movies extends Component {

    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(getMovies());
    }

    render() {
        const { movies } = this.props;

        return (
            <div className="tv-shows">
                <Navbar active='movies'/>
                <TableList list={movies !== undefined ? movies.results : []}/>
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