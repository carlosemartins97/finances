import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from '../pages/Register';

import SignIn from '../pages/SignIn';

const AuthRoutes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={SignIn} />
        <Route path='/register' exact component={Register} />
    </Switch>
);

export default AuthRoutes;