import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import TVShows from '../components/TVShows';
import Movies from '../components/Movies';

class Router extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path="/(|shows)/"exact component={TVShows} />
                <Route path="/movies" exact component={Movies} />
            </Switch>
        )
    }
}

export default Router;