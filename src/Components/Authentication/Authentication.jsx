import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

export default class Authentication extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/sign-up' component={SignUp} />
                    <Route path='/' component={SignIn} />
                </Switch>
            </div>
        )
    }
}
