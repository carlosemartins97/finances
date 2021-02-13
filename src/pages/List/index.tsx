import React, {useMemo, useState, useEffect} from 'react';
import { v4 as uuid_v4 } from "uuid";

import ContentHeader from '../../core/components/ContentHeader';
import MovimentHistoryCard from '../../core/components/MovimentHistoryCard';
import SelectInput from '../../core/components/SelectInput';

import {Container, Content, Filters} from './styles';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../core/utils/formatCurrency';
import formatDate from '../../core/utils/formatDate';
import listOfMonths from '../../core/utils/months';


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
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    const [selectedFrequency, setSelectedFrequency] = useState(['recorrente', 'eventual']);

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

    const handleFrequencyClick = (frequency: string) => {
       const alreadySelected = selectedFrequency.findIndex(item => item === frequency);
       if(alreadySelected >= 0){
           const filtered = selectedFrequency.filter(item => item !== frequency);
           setSelectedFrequency(filtered);
       } else {
           setSelectedFrequency((prev) => [...prev, frequency]);
       }
    }

    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth)
        }
        catch(error) {
            throw new Error('Invalid month value. Is accept 0 - 12')
        }
    }
    const handleYearSelected = (month: string) => {
        try {
            const parseYear = Number(month);
            setYearSelected(parseYear)
        }
        catch(error) {
            throw new Error('Invalid year value. Is accept integer numbers.')
        }
    }

    useEffect(() => {
        const filteredDate = listData.filter(item => {
            const date = new Date(item.date)
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);
        })

        const formattedData = filteredDate.map(item => {
            return {
                id: String(uuid_v4()),
                decription: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4e41f0' : "#e44c4e",
            }
        })
        setData(formattedData);
    },[listData, monthSelected, yearSelected, selectedFrequency]);


    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index+1,
                label: month
            }
        });
    },[]);

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        listData.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year)){
                uniqueYears.push(year);
            }
        });
        return uniqueYears.map(year => {
            return {
                value: year,
                label: year,
            }
        });
    },[listData]);

    return (
        <Container>
            <ContentHeader title={props.title} lineColor={props.lineColor}>
                <SelectInput options={months} onChange={(e) => handleMonthSelected(e.target.value)} defaultValue={monthSelected}/>
                <SelectInput options={years} onChange={(e) => handleYearSelected(e.target.value)} defaultValue={yearSelected} />
            </ContentHeader>

            <Filters>
                <button 
                    type="button"
                    className={`tag-filter tag-filter-recurrent ${selectedFrequency.includes('recorrente') && 'tag-actived'}`}

                    onClick={() => handleFrequencyClick('recorrente')}
                >
                    Recorrentes
                </button>
                <button 
                    type="button"
                    className={`tag-filter tag-filter-eventual ${selectedFrequency.includes('eventual') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('eventual')}
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