import React from 'react';

import {Container, Tag} from './styles';

interface IMovimentHistoryCardProps {
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}

const MovimentHistoryCard: React.FC<IMovimentHistoryCardProps> = ({
    tagColor, 
    title, 
    subtitle, 
    amount
}) => (
    <Container>
        <Tag tagColor={tagColor}/>
        <div>
            <span>{title}</span>
            <small>{subtitle}</small>
        </div>
        <h3>{amount}</h3>
    </Container>
)

export default MovimentHistoryCard;