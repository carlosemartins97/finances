import styled from 'styled-components';

export const Container = styled.div`
  p {
    font-size: 24px;
    text-align: center;

    strong {
      font-size: 32px;
      color: ${props => props.theme.colors.info};
    }
  }
`;