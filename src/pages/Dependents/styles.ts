import styled from 'styled-components';

export const Container = styled.section`
  h1 {
    font-size: 36px;
    line-height: 42px;
    position: relative;
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

  >div {
    margin-top: 70px;
  }
`;

export const FormField = styled.form`
  max-width: 560px;
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

    @media(max-width: 768px) {
      max-width: unset;
    }
  }

  .txtMsg {
    margin-top: 24px;
  }
`;

export const TextInfo = styled.div`
  font-size: 24px;
  line-height: 32px;
  max-width: 560px;
`;