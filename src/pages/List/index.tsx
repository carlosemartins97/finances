import React from 'react';
import ContentHeader from '../../core/components/ContentHeader';
import MovimentHistoryCard from '../../core/components/MovimentHistoryCard';
import SelectInput from '../../core/components/SelectInput';
import {Container, Content} from './styles';

const List: React.FC = () => {
    const options = [
        {value: 'Carlos', label: 'Carlos'},
        {value: 'Jon', label: 'Jon'},
        {value: 'trab', label: 'trab'},
    ]
    return (
        <Container>
            <ContentHeader title="Saídas" lineColor='#E44C4E'>
                <SelectInput options={options}/>
            </ContentHeader>
            <Content>
                <MovimentHistoryCard 
                    cardColor="#313862"
                    tagColor="#E44c4E"
                    title="Conta de Luz"
                    subtitle="01/09/2021"
                    amount="R$ 130,00"
                />
                <MovimentHistoryCard 
                    cardColor="#313862"
                    tagColor="#E44c4E"
                    title="Conta de Luz"
                    subtitle="01/09/2021"
                    amount="R$ 130,00"
                />
                <MovimentHistoryCard 
                    cardColor="#313862"
                    tagColor="#E44c4E"
                    title="Conta de Luz"
                    subtitle="01/09/2021"
                    amount="R$ 130,00"
                />
                <MovimentHistoryCard 
                    cardColor="#313862"
                    tagColor="#E44c4E"
                    title="Conta de Luz"
                    subtitle="01/09/2021"
                    amount="R$ 130,00"
                />
                <MovimentHistoryCard 
                    cardColor="#313862"
                    tagColor="#E44c4E"
                    title="Conta de Luz"
                    subtitle="01/09/2021"
                    amount="R$ 130,00"
                />
                <MovimentHistoryCard 
                    cardColor="#313862"
                    tagColor="#E44c4E"
                    title="Conta de Luz"
                    subtitle="01/09/2021"
                    amount="R$ 130,00"
                />
                <MovimentHistoryCard 
                    cardColor="#313862"
                    tagColor="#E44c4E"
                    title="Conta de Luz"
                    subtitle="01/09/2021"
                    amount="R$ 130,00"
                />
                <MovimentHistoryCard 
                    cardColor="#313862"
                    tagColor="#E44c4E"
                    title="Conta de Luz"
                    subtitle="01/09/2021"
                    amount="R$ 130,00"
                />
                <MovimentHistoryCard 
                    cardColor="#313862"
                    tagColor="#E44c4E"
                    title="Conta de Luz"
                    subtitle="01/09/2021"
                    amount="R$ 130,00"
                />
                <MovimentHistoryCard 
                    cardColor="#313862"
                    tagColor="#E44c4E"
                    title="Conta de Luz"
                    subtitle="01/09/2021"
                    amount="R$ 130,00"
                />
                <MovimentHistoryCard 
                    cardColor="#313862"
                    tagColor="#E44c4E"
                    title="Conta de Luz"
                    subtitle="01/09/2021"
                    amount="R$ 130,00"
                />
                <MovimentHistoryCard 
                    cardColor="#313862"
                    tagColor="#E44c4E"
                    title="Conta de Luz"
                    subtitle="01/09/2021"
                    amount="R$ 130,00"
                />
                <MovimentHistoryCard 
                    cardColor="#313862"
                    tagColor="#E44c4E"
                    title="Conta de Luz"
                    subtitle="01/09/2021"
                    amount="R$ 130,00"
                />
                <MovimentHistoryCard 
                    cardColor="#313862"
                    tagColor="#E44c4E"
                    title="Conta de Luz"
                    subtitle="01/09/2021"
                    amount="R$ 130,00"
                />
                <MovimentHistoryCard 
                    cardColor="#313862"
                    tagColor="#E44c4E"
                    title="Conta de Luz"
                    subtitle="01/09/2021"
                    amount="R$ 130,00"
                />
                <MovimentHistoryCard 
                    cardColor="#313862"
                    tagColor="#E44c4E"
                    title="Conta de Luz"
                    subtitle="01/09/2021"
                    amount="R$ 130,00"
                />
                <MovimentHistoryCard 
                    cardColor="#313862"
                    tagColor="#E44c4E"
                    title="Conta de Luz"
                    subtitle="01/09/2021"
                    amount="R$ 130,00"
                />
            </Content>
        </Container>
    )
}

export default List;