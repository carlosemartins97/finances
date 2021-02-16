import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import {useAuth} from '../core/hooks/auth'

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';




const Routes: React.FC = () => {
    const {logged} = useAuth();

    return (
        <BrowserRouter>
            {!logged ? <AuthRoutes /> : <AppRoutes />}
        </BrowserRouter>
    );
}

export default Routes;