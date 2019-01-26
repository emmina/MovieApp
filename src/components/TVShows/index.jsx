import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../../helpers/Navbar';
import { getShows } from '../../actions';
import TableList from '../../helpers/TableList';

class TVShows extends Component {

    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(getShows());
    }

    render() {
        const { shows } = this.props;

        console.log('render', shows)
        return (
            <div className="tv-shows">
                <Navbar active='shows' />
                <TableList list={shows !== undefined ? shows.results : []}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { getShows } = state;

    return {
        shows: getShows.shows
    };
};

TVShows = connect(mapStateToProps)(TVShows);
export default TVShows;