import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './core/styles/GlobalStyles';

import { useTheme } from './core/hooks/theme'

import Routes from './routes';

const App: React.FC = () => {
    const {theme} = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
    )
}

export default App;