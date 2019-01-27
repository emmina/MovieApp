import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../../helpers/Navbar';
import { showsActions } from '../../actions';
import { TableList } from '../../helpers';

class TVShows extends Component {

    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(showsActions.getShows());
    }

    render() {
        const { shows } = this.props;

        console.log('render', shows)
        return (
            <div className="tv-shows">
                <Navbar active='shows' />
                <TableList category='shows' list={shows !== undefined ? shows.results : []}/>
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