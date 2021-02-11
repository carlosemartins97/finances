import React from 'react';
import ContentHeader from '../../core/components/ContentHeader';
import SelectInput from '../../core/components/SelectInput';

import { Container } from './styles';

const Dashboard: React.FC = () => {
    const options = [
        {value: 'Carlos', label: 'Carlos'},
        {value: 'Jon', label: 'Jon'},
        {value: 'trab', label: 'trab'},
    ]

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor='#fff'>
                <SelectInput options={options}/>
            </ContentHeader>
        </Container>
    )
}

export default Dashboard;