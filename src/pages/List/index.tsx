import React from 'react';
import ContentHeader from '../../core/components/ContentHeader';
import MovimentHistoryCard from '../../core/components/MovimentHistoryCard';
import SelectInput from '../../core/components/SelectInput';
import {Container, Content, Filters} from './styles';

const List: React.FC = () => {
    const months = [
        {value: 2, label: 'Fevereiro'},
        {value: 3, label: 'Março'},
        {value: 4, label: 'Abril'},
    ]
    const years = [
        {value: 2021, label: 2021},
        {value: 2022, label: 2022},
        {value: 2023, label: 2023},
    ]
    return (
        <Container>
            <ContentHeader title="Saídas" lineColor='#E44C4E'>
                <SelectInput options={months}/>
                <SelectInput options={years}/>
            </ContentHeader>

            <Filters>
                <button 
                    type="button"
                    className="tag-filter tag-filter-recurrent"
                >
                    Recorrentes
                </button>
                <button 
                    type="button"
                    className="tag-filter tag-filter-eventual"
                >
                    Eventuais
                </button>
            </Filters>

            <Content>
                <MovimentHistoryCard 
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