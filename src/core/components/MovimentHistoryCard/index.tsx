import React, { useEffect, useState } from 'react';

import {Container, Tag, Row, ActivatedRow} from './styles';

interface IMovimentHistoryCardProps {
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
    hasButton?: boolean;
    isButtonLink?: boolean;
    buttonText?: string;
    description?: string;
    frequency?: string;
}

function MovimentHistoryCard( {
    tagColor, 
    title, 
    subtitle, 
    amount,
    hasButton = false,
    isButtonLink = false,
    buttonText,
    description,
    frequency
} :IMovimentHistoryCardProps) {
    const [display, setDisplay] = useState('none');
    const [windowSize, setWindowSize] = useState(() => window.innerWidth);

    function handleOpenDetails() {
        if(display === 'none') {
            setDisplay('flex');
        } else {
            setDisplay('none');
        }
    }

    useEffect(() => {
        document.addEventListener('resize', function() {
            setWindowSize(window.innerWidth);
        })
    }, [windowSize]);

    return (
    <>
        <Container>
            <Tag tagColor={tagColor}/>
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
            </div>
            <Row>
                <h3>{amount}</h3>
                {
                    hasButton && !isButtonLink &&  (
                        <button type="button" onClick={handleOpenDetails}>{windowSize > 768 ? buttonText : '>'}</button>
                    )
                }
                {
                    hasButton && isButtonLink && (
                        <a href="https://www.google.com.br">{windowSize > 768 ? buttonText : '>'}</a>
                    )
                }
            </Row>
        </Container>
        <ActivatedRow className="activated" display={display}>
            <div>
                <span>Descrição:</span>
                <p>{description}</p>
            </div>

            <div>
                <span>Meta:</span>
                <p>{
                frequency === 'atingido' ? 'Valor a ser atingido' : 'Valor máximo a ser gastado'
                }</p>
            </div>
        </ActivatedRow>
    </>
    
)};

export default MovimentHistoryCard;