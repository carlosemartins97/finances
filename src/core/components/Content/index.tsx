import React from 'react';
import ContentHeader from '../ContentHeader';
import { Container } from './styles';

const Content: React.FC = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Content;