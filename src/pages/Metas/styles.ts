import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    position: relative;
    font-size: 36px;
    line-height: 42px;
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 58px;
      height: 8px;
      border-bottom: 10px solid ${props => props.theme.colors.info};
    }
  }

  @media(max-width: 768px) {
    .inputField {
      margin-bottom: 0;
    }

    .fieldInput {
      margin-top: 0;
    }
  }
`;

export const InputField = styled.div`
  margin: 28px 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  font-size: 18px;
  line-height: 24px;

  label {
    padding-bottom: 8px;
  }

  input, select, textarea {
    height: 40px;
    border-radius: 4px;
    padding: 0 8px;
    font-size: 16px;
    width: 100%;
  }

  textarea {
    resize: none;
    min-height: 160px; 
    padding: 8px;
  }

  button {
    margin-top: 32px;
    width: 100%;
    max-width: 200px;
    height: 50px;
    background: ${props => props.theme.colors.success};
    color: ${props => props.theme.colors.white};
    border-radius: 8px;
    font-size: 18px;
  }
  
  @media(max-width: 768px) {
    button {
      max-width: unset;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  >div {
    &:nth-child(2) {
      margin: 0 28px;
    }
  }

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;