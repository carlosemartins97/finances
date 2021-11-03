import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout from '../core/components/Layout';
import Dashboard from '../pages/Dashboard';
import Dependents from '../pages/Dependents';
import List from '../pages/List';
import Metas from '../pages/Metas';
import Transactions from '../pages/Transactions';

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/list/:type' exact component={List}/>
            <Route path='/newTransaction' exact component={Transactions}/>
            <Route path='/dependents' exact component={Dependents}/>
            <Route path='/dependents/list' exact component={List}/>
            <Route path='/metas' exact component={Metas}/>
            <Route path='/metas/list' exact component={List}/>
        </Switch>
    </Layout>
);

export default AppRoutes;