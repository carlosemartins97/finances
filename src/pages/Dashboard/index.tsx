import React, { useCallback, useEffect, useMemo, useState } from 'react';

import ContentHeader from '../../core/components/ContentHeader';
import SelectInput from '../../core/components/SelectInput';
import WalletCard from '../../core/components/WalletCard';
import MessageBox from '../../core/components/MessageBox'


import listOfMonths from '../../core/utils/months';

import happyImg from '../../core/assets/happy.svg';
import sadImg from '../../core/assets/sad.svg';
import sweatingImg from '../../core/assets/sweating.svg';
import thinkingImg from '../../core/assets/thinking.svg';


import { Container, Content } from './styles';
import PieGraph from '../../core/components/PieGraph';
// import HistoryBox from '../../core/components/HistoryBox';
import BarChartBox from '../../core/components/BarChartBox';
import { TransactionsProps } from '../Transactions';

const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getUTCMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getUTCFullYear());
    
    const [metas, setMetas] = useState([]);
    const [transacts, setTransacts] = useState<TransactionsProps[]>([]);
    

    function getMetas() {
        const metasString = localStorage.getItem('@saveMoney-metas');
        if(metasString) {
            setMetas(JSON.parse(metasString));
        } else {
            setMetas([]);
        }
    }

    function getTransactions() {
        const transactionsString = localStorage.getItem('@saveMoney-transactions');
        if(transactionsString) {
            setTransacts(JSON.parse(transactionsString));
        } else {
            setTransacts([]);
        }
    }

    useEffect(() => {
        getMetas();
        getTransactions();
    }, [])

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

        [...metas, ...transacts].forEach(item => {
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
    },[metas, transacts]);


    const totalExpense = useMemo(() => {
        let total: number = 0;
        const allSaidas: any[] = [];
        transacts.forEach(transaction => {
            if(transaction.type === 'saida') {
                allSaidas.push(transaction);
            }
        })
        allSaidas.forEach(item => {
            const date = new Date(item.date);
            const year = date.getUTCFullYear();
            const month = date.getUTCMonth() + 1;
            if(month === monthSelected && year === yearSelected){
                try{
                    total += Number(item.amount);
                }catch{
                    throw new Error('Invalid amount! Amount must be number.')
                }
            }
        })
        return total;
    },[monthSelected, yearSelected, transacts]);


    const totalGains = useMemo(() => {
        let total: number = 0;
        const allEntradas: any[] = [];
        transacts.forEach(transaction => {
            if(transaction.type === 'entrada') {
                allEntradas.push(transaction);
            }
        })
        allEntradas.forEach(item => {
            const date = new Date(item.date);
            const year = date.getUTCFullYear();
            const month = date.getUTCMonth() + 1;
            if(month === monthSelected && year === yearSelected){
                try{
                    total += Number(item.amount);
                }catch{
                    throw new Error('Invalid amount! Amount must be number.')
                }
            }
        })
        return total;
    },[monthSelected, yearSelected, transacts]);


    const message = useMemo(() => {
        if((totalGains - totalExpense) < 0){
            return {
                title:"Que triste!",
                description:"Neste mês, você gastou mais do que deveria!",
                footerText:"Verifique seus gastos e mantenha o controle!",
                icon: sadImg,
            }
        } else if(totalGains === 0 && totalExpense === 0) {
            return {
                title:"Ops!",
                description:"Não há registro de entradas ou saídas!",
                footerText:"Parece que você não fez nenhum registro no mês e ano selecionado.",
                icon: thinkingImg,
            }  
        } else if((totalGains - totalExpense) === 0){
            return {
                title:"Ufaa!",
                description:"Neste mês, você gastou exatamente o que ganhou!",
                footerText:"Tome cuidado e mantenha o controle!",
                icon: sweatingImg,
            } 
        } else {
            return {
                title:"Muito bem!",
                description:"Sua carteira está positiva!",
                footerText:"Continue assim. Considere investir o seu saldo.",
                icon: happyImg,
            }  
        }
    },[totalExpense, totalGains]);

    const relationExpensesVersusGains = useMemo(() => {
        const total = totalGains + totalExpense;
        const percentGains = Number(((totalGains/total) * 100).toFixed(1));
        const percentExpenses = Number(((totalExpense/total) * 100).toFixed(1));

        const data = [
            {
                name: 'Entradas',
                value: totalGains,
                percent: percentGains ? percentGains : 0,
                color: '#f7931b'
            },
            {
                name: 'Saídas',
                value: totalExpense,
                percent: percentExpenses ? percentExpenses : 0,
                color: '#E44c4E'
            }
        ];
        return data;

    },[totalGains, totalExpense]);

    // const historyData = useMemo(() => {
    //     return listOfMonths.map((_, month) => {
    //         let amountInput = 0;
    //         gains.forEach(gain => {
    //             const date = new Date(gain.date);
    //             const gainMonth = date.getUTCMonth();
    //             const gainYear = date.getUTCFullYear();

    //             if(gainMonth === month && gainYear === yearSelected){
    //                 try{
    //                     amountInput += Number(gain.amount);
    //                 } catch{
    //                     throw new Error('Amount input is invalid, must be number.')
    //                 }
    //             }
    //         });

    //         let amountOutput = 0;
    //         expenses.forEach(expense => {
    //             const date = new Date(expense.date);
    //             const expenseMonth = date.getUTCMonth();
    //             const expenseYear = date.getUTCFullYear();

    //             if(expenseMonth === month && expenseYear === yearSelected){
    //                 try{
    //                     amountOutput += Number(expense.amount);
    //                 } catch{
    //                     throw new Error('Amount input is invalid, must be number.')
    //                 }
    //             }
    //         });

    //         return {
    //             monthNumber: month,
    //             month: listOfMonths[month].substr(0, 3).toUpperCase(),
    //             amountOutput,
    //             amountInput
    //         }
    //     })
    //     .filter(item => {
    //         const currentMonth = new Date().getUTCMonth();
    //         const currentYear = new Date().getUTCFullYear();
            
    //         return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear)
    //     });

    // },[yearSelected]);


    const relationExpensesRecurrentVersusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        const allSaidas: any[] = [];
        transacts.forEach(transaction => {
            if(transaction.type === 'saida') {
                allSaidas.push(transaction);
            }
        })

        allSaidas.filter((expense) => {
            const date = new Date(expense.date);
            const year = date.getUTCFullYear();
            const month = date.getUTCMonth()+1;

            return month === monthSelected && year === yearSelected;
        }).forEach((expense) => {
            if(expense.frequency === 'recorrente'){
                return amountRecurrent += Number(expense.amount);
            }
            
            if(expense.frequency === 'eventual'){
                return amountEventual += Number(expense.amount);
            }
        });
        const total = amountRecurrent + amountEventual
        const percentEventual = Number(((amountEventual/total)*100).toFixed(1));
        const percentRecurrent = Number(((amountRecurrent/total)*100).toFixed(1));
        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: percentRecurrent ? percentRecurrent : 0,
                color: '#e44c4e',
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: percentEventual ? percentEventual : 0,
                color: '#f7931b',
            }
        ]

    },[monthSelected, yearSelected, transacts])


    const relationGainsRecurrentVersusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        const allEntradas: any[] = [];
        transacts.forEach(transaction => {
            if(transaction.type === 'entrada') {
                allEntradas.push(transaction);
            }
        })

        allEntradas.filter((gain) => {
            const date = new Date(gain.date);
            const year = date.getUTCFullYear();
            const month = date.getUTCMonth()+1;

            return month === monthSelected && year === yearSelected;
        }).forEach((gain) => {
            if(gain.frequency === 'recorrente'){
                return amountRecurrent += Number(gain.amount);
            }
            
            if(gain.frequency === 'eventual'){
                return amountEventual += Number(gain.amount);
            }
        });
        const total = amountRecurrent + amountEventual
        const percentEventual = Number(((amountEventual/total)*100).toFixed(1));
        const percentRecurrent = Number(((amountRecurrent/total)*100).toFixed(1));
        
        
        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: percentRecurrent ? percentRecurrent : 0,
                color: '#E44C4E',
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: percentEventual ? percentEventual : 0,
                color: '#F7831B',
            }
        ]

    },[monthSelected, yearSelected, transacts])


    const handleMonthSelected = useCallback((month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth)
        }
        catch {
            throw new Error('Invalid month value. Is accept 0 - 12')
        }
    },[]);

    const handleYearSelected = useCallback((month: string) => {
        try {
            const parseYear = Number(month);
            setYearSelected(parseYear)
        }
        catch {
            throw new Error('Invalid year value. Is accept integer numbers.')
        }
    },[])

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor='#f7931b'>
                <SelectInput options={months} onChange={(e) => handleMonthSelected(e.target.value)} defaultValue={monthSelected}/>
                <SelectInput options={years} onChange={(e) => handleYearSelected(e.target.value)} defaultValue={yearSelected} />
            </ContentHeader>

            <Content>
                <WalletCard 
                    title='Saldo'
                    amount={totalGains - totalExpense}
                    footerLabel='Atualizado com base nas entradas e saídas!'
                    icon='dollar'
                    color='#4e41f0'
                />
                <WalletCard 
                    title='Entradas'
                    amount={totalGains}
                    footerLabel='Atualizado com base nas entradas e saídas'
                    icon='arrowUp'
                    color='#f7931b'
                />
                <WalletCard 
                    title='Saídas'
                    amount={totalExpense}
                    footerLabel='Atualizado com base nas entradas e saídas'
                    icon='arrowDown'
                    color='#E44c4E'
                />

                <MessageBox 
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}
                />

                <PieGraph 
                    data={relationExpensesVersusGains}
                />

                {/* <HistoryBox 
                    data={historyData}
                    lineColorInput="#f7931b"
                    lineColorOutput="#e44c4e"
                /> */}

                <BarChartBox 
                    data={relationGainsRecurrentVersusEventual}
                    title="Entradas"
                />
                <BarChartBox 
                    data={relationExpensesRecurrentVersusEventual}
                    title="Saídas"
                />
            </Content>
        </Container>
    )
}

export default Dashboard;