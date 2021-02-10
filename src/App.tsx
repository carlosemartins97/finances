import React from 'react';
import Layout from './core/components/Layout';
import GlobalStyles from './core/styles/GlobalStyles';

const App: React.FC = () => {
    return (
        <>
            <GlobalStyles />
            <Layout />
        </>
    )
}

export default App;