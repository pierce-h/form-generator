import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, browserHistory } from 'react-router';

import configureStore from '../configureStore';
import App from './App';
import EditFormContainer from '../containers/EditFormContainer';
import PreviewFormContainer from '../containers/PreviewFormContainer';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Redirect from="/" to="/custom-form" />
                <Route path="/" component={App}>
                    <Redirect from="/custom-form" to="/custom-form/edit" />
                    <Route path="/custom-form">
                        <Route path='/custom-form/edit' component={EditFormContainer} />
                        <Route path='/custom-form/preview' component={PreviewFormContainer} />
                    </Route>
                </Route>
            </Router>
        </Provider>
    );
  }
}
