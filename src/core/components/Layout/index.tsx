import React from 'react';
import Aside from '../Aside';
import Content from '../Content';
import MainHeader from '../MainHeader';
import { Grid } from './styles';

const Layout: React.FC = () => {
    return (
        <Grid>
            <MainHeader />
            <Aside />
            <Content />
        </Grid>
    )
}

export default Layout;