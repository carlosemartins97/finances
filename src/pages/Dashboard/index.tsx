import React, { useMemo, useState } from 'react';
import ContentHeader from '../../core/components/ContentHeader';
import SelectInput from '../../core/components/SelectInput';

import listOfMonths from '../../core/utils/months';
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import { Container } from './styles';

const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    

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

        [...expenses, ...gains].forEach(item => {
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
    },[]);

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

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor='#f7931b'>
                <SelectInput options={months} onChange={(e) => handleMonthSelected(e.target.value)} defaultValue={monthSelected}/>
                <SelectInput options={years} onChange={(e) => handleYearSelected(e.target.value)} defaultValue={yearSelected} />
            </ContentHeader>
        </Container>
    )
}

export default Dashboard;