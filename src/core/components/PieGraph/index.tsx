import React from 'react';

import { 
    PieChart,
    Pie,
    ResponsiveContainer, 
    Cell} 
from 'recharts';

import { 
    Container,
    SideLeft,
    LegendContainer,
    Legend,
    SideRight,
} from './styles';


interface IPieGraphProps {
    data: {
        name: string;
        value: number;
        percent: number;
        color: string;
    }[]
}

const PieGraph: React.FC<IPieGraphProps> = ({ data }) =>  (
    <Container>
        <SideLeft>
            <LegendContainer>
                <h2>Relação</h2>
                {
                    data.map(indicator => (
                        <Legend 
                            color={indicator.color}
                            key={indicator.name}
                        >
                            <div>{indicator.percent}%</div>
                            <span>{indicator.name}</span>
                        </Legend>
                    ))
                }
            </LegendContainer>
        </SideLeft>

        <SideRight>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie 
                            data={data}
                            dataKey='percent'
                        >
                            {
                                data.map(indicator => (
                                    <Cell 
                                        key={indicator.name}
                                        fill={indicator.color} 
                                    />
                                ))
                            }

                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
        </SideRight>

    </Container>
);

export default PieGraph;

