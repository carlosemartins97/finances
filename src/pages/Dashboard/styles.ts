import styled from 'styled-components';

export const Container = styled.div`

    animation: fadein 0.6s;
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
