import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from '../pages/Register';

import SignIn from '../pages/SignIn';

const AuthRoutes: React.FC = () => (
    <Switch>
        <Route path='/register' exact component={Register} />
        <Route path='/' component={SignIn} />
    </Switch>
);

export default AuthRoutes;