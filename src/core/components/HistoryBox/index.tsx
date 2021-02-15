import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
} from 'recharts'

import formatCurrency from '../../utils/formatCurrency'

import { Container, 
    ChartContainer,
    Header,
    LegendContainer,
    Legend,

} from './styles';


interface IHistoryBoxProps {
    data: {
        month: string;
        amountInput: number;
        amountOutput: number;
    }[],
    lineColorInput: string;
    lineColorOutput: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({data, lineColorInput, lineColorOutput}) => (
        <Container>
            <Header>
                <h2>Histórico de saldo</h2>
                <LegendContainer>
                    <Legend color={lineColorInput}>
                             <div></div>
                            <span>Entradas</span>
                    </Legend>
                    <Legend color={lineColorOutput}>
                             <div></div>
                            <span>Saídas</span>
                    </Legend>
                </LegendContainer>
            </Header>
            
            <ChartContainer>
                <ResponsiveContainer>
                    <LineChart data={data} margin={{top:5, right:20, left: 20, bottom: 5}}>
                        <CartesianGrid strokeDasharray="3 3" stroke='#cecece' />
                        <XAxis dataKey="month" stroke="#cecece" />
                        <Tooltip formatter={(value: number) =>  formatCurrency(value)}/>
                        <Line 
                            type="monotone"
                            dataKey="amountInput"
                            name="Entradas"
                            stroke={lineColorInput}
                            strokeWidth={5}
                            dot={{r:5}}
                            activeDot={{r: 8}}
                        />
                        <Line 
                            type="monotone"
                            dataKey="amountOutput"
                            name="Saídas"
                            stroke={lineColorOutput}
                            strokeWidth={5}
                            dot={{r:5}}
                            activeDot={{r: 8}}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </ChartContainer>
        </Container>
)


export default HistoryBox;