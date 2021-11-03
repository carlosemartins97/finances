import styled from 'styled-components';

export const Container = styled.section`
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
      margin: 0 auto;
    }
  }
`;

export const Form = styled.form`
  margin-top: 80px;
  
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
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  >div {
    &:nth-child(2) {
      margin: 0 28px;
    }
    &:nth-child(3) {
      margin-right: 28px;
    }
  }
  @media(max-width: 768px) {
    flex-direction: column;

    >div:nth-child(n) {
      margin-left: 0;
      margin-right: 0;
    }
  }
`;

export const ButtonRow = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  #delete {
    border: none;
    font-size: 18px;
    line-height: 24px;
    color: ${props => props.theme.colors.warning};
    background: none;
  }

  #back,
  #create {
    font-size: 24px;
    line-height: 32px;
    color: ${props => props.theme.colors.white};
    border-radius: 8px;
    height: 50px;
    width: 200px;
  }

  #back {
    background: ${props => props.theme.colors.warning};
  }

  #create {
    background: ${props => props.theme.colors.success};
    margin-left: 16px;
  }

  @media(max-width: 768px) {
    flex-direction: column;
    >div {
      max-width: unset;
      width: 100%;
      #create, #back {
        margin: 0;
        margin-top: 5px;
        width: 100%;
        max-width: unset;
      }
      #delete {
        font-size: 24px;
        margin-bottom: 16px;
      }
    }
  }
`;