import styled from 'styled-components';

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    width: 48%;
    min-height: 260px;

    margin: 10px 0;
    
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;

    display: flex;
    
    @media(max-width: 1200px){
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
    }
`;


export const SideLeft = styled.aside`
    padding: 30px 20px;
    flex: 1;

    > h2 {
        margin-bottom: 10px;
        padding-left: 18px;
    }
`;

export const SideRight = styled.main`
    flex: 1;
    min-height: 150px;

    display: flex;
    justify-content: center;
    padding-top: 35px;
`;

export const LegendContainer = styled.ul`
    list-style: none;

    height: 170px;
    padding-right: 20px;

    overflow-y: scroll;

    > h2 {
        margin-bottom: 20px;
    }
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
        border-radius: 10px;
    }

    @media(max-width: 1200px){
        display: flex;
        height: auto;
    }
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    padding-left: 18px;

    > div {
        background-color: ${props => props.color};
        width: 40px;
        height: 40px;
        border-radius: 5px;
        font-size: 14px;
        line-height: 40px;
        text-align: center;
    }

    > span {
        margin-left: 5px;
    }

    @media(max-width: 420px){
        > div {
            width: 30px;
            height: 30px;
            font-size: 11px;
            line-height: 30px;
        }
        > span {
            font-size: 11px;
        }
    }
`;
