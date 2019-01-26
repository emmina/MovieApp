import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../../helpers/Navbar';
import { getShows } from '../../actions';

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