import React, {useMemo, useState, useEffect} from 'react';

import ContentHeader from '../../core/components/ContentHeader';
import MovimentHistoryCard from '../../core/components/MovimentHistoryCard';
import SelectInput from '../../core/components/SelectInput';

import {Container, Content, Filters} from './styles';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

interface IRouteParams {
    match: {
        params: {
            type: string; //type => nome do parametro atribuido na rota.
        }
    }
}

interface IData {
    id: string;
    decription: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string; 
}

const List: React.FC<IRouteParams> = ({ match }) => {
    const [data, setData] = useState<IData[]>([]);

    const { type } = match.params;

    const listData = useMemo(() => {
        return type === 'inputs' ? gains : expenses;
    },[type])

    const props = useMemo(() => {
        return type === 'inputs' ? {
            title: 'Entradas',
            lineColor: '#4E41F0'
        } : {
            title: 'Saídas',
            lineColor: '#E44c4E'
        }
    },[type]);

    useEffect(() => {
        const response = listData.map(item => {
            return {
                id: String(Math.random() * 100000),
                decription: item.description,
                amountFormatted: item.amount,
                frequency: item.frequency,
                dateFormatted: item.date,
                tagColor: item.frequency === 'recorrente' ? '#4e41f0' : "#e44c4e",
            }
        })
        setData(response);
    },[]);

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
            <ContentHeader title={props.title} lineColor={props.lineColor}>
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
               { data.map(item => (
               <MovimentHistoryCard 
                    key={item.id}
                    tagColor={item.tagColor}
                    title={item.decription}
                    subtitle={item.dateFormatted}
                    amount={item.amountFormatted}
                />
                ))}
            </Content>
        </Container>
    )
}

export default List;