import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Layout from '../core/components/Layout';
import Dashboard from '../pages/Dashboard';
import List from '../pages/List';

const AppRoutes: React.FC = () => (
    <Layout>
        <BrowserRouter>
            <Switch>
                <Route path='/dashboard' exact component={Dashboard}/>
                <Route path='/list/:type' exact component={List}/>
            </Switch>
        </BrowserRouter>
    </Layout>
);

export default AppRoutes;