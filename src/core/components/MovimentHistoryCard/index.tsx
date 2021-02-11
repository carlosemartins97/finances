import React from 'react';

import {Container, Tag} from './styles';

interface IMovimentHistoryCardProps {
    cardColor: string;
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}

const MovimentHistoryCard: React.FC<IMovimentHistoryCardProps> = ({
    cardColor, 
    tagColor, 
    title, 
    subtitle, 
    amount
}) => {

    return (
        <Container color={cardColor}>
            <Tag tagColor={tagColor}/>
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
            </div>
            <h3>{amount}</h3>
        </Container>
    )
}

export default MovimentHistoryCard;