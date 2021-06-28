import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';
import AppBar from '../TodoApp/appBar/ApplicationBar';

export default class Authentication extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <Switch>
                    <Route path='/sign-up' component={SignUp} />
                    <Route path='/' component={SignIn} />
                </Switch>
            </div>
        )
    }
}
