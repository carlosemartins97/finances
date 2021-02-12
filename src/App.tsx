import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './core/styles/GlobalStyles';

import {dark} from './core/styles/themes/dark'
import Routes from './routes';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
    )
}

export default App;