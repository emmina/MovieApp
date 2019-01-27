import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { showsActions } from '../../actions';
import { history } from '../../helpers';

class ShowDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id
        }
    }

    componentDidMount() {
        const { dispatch } = this.props;
        const { id } = this.state;

        dispatch(showsActions.getShowById(id));
    }

    onBack() {
        history.goBack();
    }

    render() {
        const { show } = this.props;

        console.log('render', show)
        return (
            <div className="show">
                <Button bsStyle="primary" onClick={this.onBack} className='back-button'>Back</Button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { getShow } = state;
    console.log(state)

    return {
        show: getShow.show
    };
};

ShowDetails = connect(mapStateToProps)(ShowDetails);
export default ShowDetails;