import React, {useMemo, useState, useEffect} from 'react';
import { v4 as uuid_v4 } from "uuid";

import ContentHeader from '../../core/components/ContentHeader';
import MovimentHistoryCard from '../../core/components/MovimentHistoryCard';
import SelectInput from '../../core/components/SelectInput';
import DataNotFound from '../../core/components/DataNotFound';

import {Container, Content, Filters} from './styles';

import formatCurrency from '../../core/utils/formatCurrency';
import formatDate from '../../core/utils/formatDate';
import listOfMonths from '../../core/utils/months';
import { TransactionsProps } from '../Transactions';
import { useLocation } from 'react-router-dom';
import { MetasProps } from '../Metas';


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
    frequency?: string;
    dateFormatted: string;
    tagColor: string; 
    email?: string;
}

interface Dependents {
    email: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {
    const [data, setData] = useState<IData[]>([]);
    const [dataDependents, setDataDependents] = useState<Dependents[]>([]);
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getUTCMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getUTCFullYear());
    const [selectedFrequency, setSelectedFrequency] = useState(['recorrente', 'eventual']);
    const [selectedMeta, setSelectedMeta] = useState(['atingido', 'maximo']);

    const activatedRoute = useLocation();
    const type = activatedRoute.pathname;

    const listData: TransactionsProps[] = useMemo(() => {
        const getLocalData = localStorage.getItem('@saveMoney-transactions');
        

        if(type === '/list/inputs' || type === '/list/outputs') {
            if(getLocalData) {
                const localData: TransactionsProps[] = JSON.parse(getLocalData);

                if(type === '/list/inputs') {
                    const transactionsDataEntrada: TransactionsProps[] = [];
                    localData.forEach(transaction => {
                        if(transaction.type === 'entrada') {
                            transactionsDataEntrada.push(transaction);
                        }
                    })
                    return transactionsDataEntrada;
                } else if(type ==='/list/outputs') {
                    const transactionsDataSaida: TransactionsProps[] = [];

                    localData.forEach(transaction => {
                        if(transaction.type === 'saida') {
                            transactionsDataSaida.push(transaction);
                        }
                    })
                    return transactionsDataSaida;
                }  
            } 
        }
        return [];
    },[type])

    const listaDataMetas = useMemo(() => {
        const getMetasData = localStorage.getItem('@saveMoney-metas');

        if(type === '/metas/list') {
            if(getMetasData) {
                const metasData: MetasProps[] = JSON.parse(getMetasData);
                return metasData;
            }
        }
        return [];
    }, [type])
    const listaDataDependentes = useMemo(() => {
        const getDependentes = localStorage.getItem('@saveMoney-dependentes');

        if(type === '/dependents/list') {
            if(getDependentes) {
                const dependentsData: Dependents[] = JSON.parse(getDependentes);
                return dependentsData;
            }
        }
        return [];
    }, [type])

    const props = useMemo(() => {
        if(type === '/list/inputs'){
            return { 
                title: 'Entradas',
                lineColor: '#4E41F0'
            }
        } else if(type === '/list/outputs') {
            return {
                title: 'Saídas',
                lineColor: '#E44c4E'
            }
        } else if (type === '/metas/list') {
            return {
                title: 'Metas',
                lineColor: '#F7931B',
            }
        }
        return {
            title: 'Dependentes',
            lineColor: '#F7931B'
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

    const handleMetaFilter = (meta: string) => {
       const alreadySelected = selectedMeta.findIndex(item => item === meta);
       console.log(alreadySelected);
       if(alreadySelected >= 0){
           const filtered = selectedMeta.filter(item => item !== meta);
           setSelectedMeta(filtered);
       } else {
        setSelectedMeta((prev) => [...prev, meta]);
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
        if(type === '/list/inputs' || type === '/list/outputs') {
            const filteredDate = listData.filter(item => {
                const date = new Date(item.date)
                const month = date.getUTCMonth() + 1;
                const year = date.getUTCFullYear();

            
                return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);
            })
            const formattedData = filteredDate.map(item => {
                return {
                    id: String(uuid_v4()),
                    decription: item.title,
                    amountFormatted: formatCurrency(Number(item.amount)),
                    frequency: item.frequency,
                    dateFormatted: formatDate(item.date),
                    tagColor: item.frequency === 'recorrente' ? '#4e41f0' : "#e44c4e",
                }
            })
            setData(formattedData);
        } else if(type === '/metas/list') {
            const filteredDate = listaDataMetas.filter(item => {
                const date = new Date(item.date)
                const month = date.getUTCMonth() + 1;
                const year = date.getUTCFullYear();

            
                console.log(item.type);
                return month === monthSelected && year === yearSelected && selectedMeta.includes(item.type);
            })

            const formattedDataMetas = filteredDate.map(item => {
                return {
                    id: String(uuid_v4()),
                    decription: item.title,
                    amountFormatted: formatCurrency(Number(item.amount)),
                    dateFormatted: formatDate(item.date),
                    frequency: item.type,
                    tagColor: item.type === 'atingido' ? '#4e41f0' : "#e44c4e",
                }
            });
            setData(formattedDataMetas);
        } else if(type === '/dependents/list') {
            
            setDataDependents(listaDataDependentes);
        }

        
    },[listData, listaDataMetas, monthSelected, yearSelected, selectedFrequency, type, selectedMeta, listaDataDependentes]);

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

        if(type === '/list/inputs' || type === '/list/outputs') {
            listData.forEach(item => {
                const date = new Date(item.date);
                const year = date.getUTCFullYear();
    
                if(!uniqueYears.includes(year)){
                    uniqueYears.push(year);
                }
            });
            if(uniqueYears.length === 0) {
                return [{
                    value: new Date().getUTCFullYear(),
                    label: new Date().getUTCFullYear()
                }]
            } else {
                return uniqueYears.map(year => {
                    return {
                        value: year,
                        label: year,
                    }
                });
            }
        } else {
            listaDataMetas.forEach(item => {
                const date = new Date(item.date);
                const year = date.getUTCFullYear();
    
                if(!uniqueYears.includes(year)){
                    uniqueYears.push(year);
                }
            });
            if(uniqueYears.length === 0) {
                return [{
                    value: new Date().getUTCFullYear(),
                    label: new Date().getUTCFullYear()
                }]
            } else {
                return uniqueYears.map(year => {
                    return {
                        value: year,
                        label: year,
                    }
                });
            }
        }
    },[listData, listaDataMetas, type]);

    return (
        <Container>
            <ContentHeader title={props.title} lineColor={props.lineColor}>
                {
                    !(type === '/dependents/list') && (
                        <>
                            <SelectInput options={months} onChange={(e) => handleMonthSelected(e.target.value)} defaultValue={monthSelected}/>
                            <SelectInput options={years} onChange={(e) => handleYearSelected(e.target.value)} defaultValue={yearSelected} />
                        </>
                    )
                }
            </ContentHeader>

            {
                type === '/list/inputs' || type === '/list/outputs' ? (
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
                ) : null
            }
            {
                type === '/metas/list' ? (
                    <Filters>
                        <button 
                            type="button"
                            className={`tag-filter tag-filter-recurrent ${selectedMeta.includes('atingido') && 'tag-actived'}`}

                            onClick={() => handleMetaFilter('atingido')}
                        >
                            Valor a ser atingido
                        </button>
                        <button 
                            type="button"
                            className={`tag-filter tag-filter-eventual ${selectedMeta.includes('maximo') && 'tag-actived'}`}
                            onClick={() => handleMetaFilter('maximo')}
                        >
                            Valor máximo a ser gastado
                        </button>
                    </Filters>
                ) : null
            }

            <Content>
               {
                   (type === '/list/inputs' || type === '/list/outputs') && (

                    data.length !== 0 ? data.map(item => (
                        <MovimentHistoryCard 
                             key={item.id}
                             tagColor={item.tagColor}
                             title={item.decription}
                             subtitle={item.dateFormatted}
                             amount={item.amountFormatted}
                         />
                        )) : 
                        <DataNotFound />
                   ) 
               }

               {
                   (type === '/metas/list') && (

                    data.length !== 0 ? data.map(item => (
                        <MovimentHistoryCard 
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.decription}
                            subtitle={item.dateFormatted}
                            amount={item.amountFormatted}
                            hasButton={true}
                            buttonText="Detalhes >"
                            description={item.decription}
                            frequency={item.frequency}
                        />
                    )) : <DataNotFound />
                   )
               }

               {
                   (type === '/dependents/list') && (
                        dataDependents.length !== 0 ? dataDependents.map(item => (
                            <MovimentHistoryCard 
                                key={item.email}
                                tagColor='#F7931B'
                                title={item.email}
                                subtitle=''
                                amount=''
                                hasButton={true}
                                isButtonLink={true}
                                buttonText='Acessar conta >'
                            />
                        )) : <DataNotFound haveDate={false}/>
                   )
               }

               
            </Content>
        </Container>
    )
}

export default List;