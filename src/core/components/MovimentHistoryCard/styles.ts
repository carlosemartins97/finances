import styled, { keyframes } from 'styled-components';

interface ActivatedProps {
    display: string;
}

interface ITagProps {
    tagColor: string;
}

const animate = keyframes`
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    50% {
        opacity: .3;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
`;

const scrollDown = keyframes`
    0% {
        transform: translateY(-20px);
        opacity: 0;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`;

export const Container = styled.li`
    background-color: ${props => props.theme.colors.tertiary};
    list-style: none;
    margin: 10px 0;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all .3s;
    position: relative;
    border-radius: 10px;

    animation: ${animate} .2s ease-in-out;


    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
    }
    > div span {
        font-weight: bold;
        font-size: 22px;

        @media(max-width: 768px) {
            font-size: 16px;
        }
    }
`;

export const Tag = styled.div<ITagProps>`
    width: 10px;
    height: 60%;
    background-color: ${props => props.tagColor};
    position: absolute;
    left: 0;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row !important;
    align-items: center;

    h3 {
        @media(max-width: 768px) {
            font-size: 16px;
        }
    }

    button, a {
        text-decoration: none;
        margin-left: 24px;
        border: none;
        background: none;
        color: ${props => props.theme.colors.info};
        font-size: 18px;
        line-height: 24px;
        padding-right: 8px;

        @media(max-width: 768px) {
            font-size: 16px;
        }

    }
`;

export const ActivatedRow = styled.div<ActivatedProps>`
    animation: ${scrollDown} .2s ease-in-out;
    display: ${props => props.display};
    background: ${props => props.theme.colors.tertiary};
    justify-content: space-between;
    padding: 20px;
    border-radius: 8px;
    margin-top: -20px;
    transition: all 0.3s;
    position: static;
    z-index: -1;

    span {
        font-size: 18px;
        font-weight: bold;
    }

    p {
        margin-top: 2px;
    }
`;