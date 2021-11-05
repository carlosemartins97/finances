import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.primary};

    animation: fadein .3s;
    @keyframes fadein {
        from {
            opacity: .5;
        }
        to {
            opacity: 1;
        }
    }
    .link {
        margin-top: 24px;
        text-decoration: none;
        color: ${props => props.theme.colors.white};
        font-weight: 700;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    > h2 {
        color: ${props => props.theme.colors.white};
        margin-left: 7px;
    }

    > img {
        width: 40px;
        height: 40px;
    }

`;

export const Form = styled.form`
    width: 300px;
    height: auto;

    padding: 30px;
    border-radius: 10px;

    background-color: ${props => props.theme.colors.tertiary};
`;

export const FormTitle = styled.h1`
    color: ${props => props.theme.colors.white};
    margin-bottom: 30px;
    &:after {
        content: '';
            display: block;
            width: 55px;
            border-bottom: 10px solid ${props => props.theme.colors.warning};
    }
`;
