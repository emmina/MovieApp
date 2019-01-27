import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { moviesActions } from '../../actions';
import { history } from '../../helpers';

class MovieDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id
        }
    }

    componentDidMount() {
        const { dispatch } = this.props;
        const { id } = this.state;

        dispatch(moviesActions.getMovieById(id));
    }

    onBack() {
        history.goBack();
    }

    render() {
        const { movie } = this.props;

        console.log('render', movie)
        return (
            <div className="movie">
            <Button bsStyle="primary" onClick={this.onBack} className='back-button'>Back</Button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { getMovie } = state;

    return {
        movie: getMovie.movie
    };
};

MovieDetails = connect(mapStateToProps)(MovieDetails);
export default MovieDetails;