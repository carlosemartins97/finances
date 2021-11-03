import { useState } from 'react';
import {
  ButtonRow,
  Container,
  Form,
  InputField,
  Row
} from './styles';

export interface TransactionsProps {
  title: string;
  type: string;
  date: string;
  frequency: string;
  amount: string;
  description: string;
}

function Transactions() {

  const [title, setTitle] = useState('');
  const [type, setType] = useState('saida');
  const [date, setDate] = useState('');
  const [freq, setFreq] = useState('eventual');
  const [value, setValue] = useState('');
  const [desc, setDesc] = useState('');

  function saveOnLocalStorage(arr: TransactionsProps[], payload: TransactionsProps) {
    arr.push(payload);

    localStorage.setItem('@saveMoney-transactions', JSON.stringify(arr));
  }

  function createSaveOnLocalStorage(payload: TransactionsProps) {
    let arr: TransactionsProps[] = [
      payload
    ]

    localStorage.setItem('@saveMoney-transactions', JSON.stringify(arr));
  }

  function onSubmit() {
    let payload: TransactionsProps = {
      title,
      type,
      date,
      frequency: freq,
      amount: value,
      description: desc
    }

    const localData = localStorage.getItem('@saveMoney-transactions');
    if(localData) {
      let newLocalData: TransactionsProps[] = JSON.parse(localData);
      
      saveOnLocalStorage(newLocalData, payload);
    } else {
      createSaveOnLocalStorage(payload);
    }

    alert('Transação cadastrada!')
  }

  // useEffect(() => {
  //   const local = localStorage.getItem('@saveMoney-transactions');
  //   if(local) {
  //     const newLocal: Transactions[] = JSON.parse(local);
  //     console.log(newLocal);
  //   }
    
  // }, [])
  return (
    <Container>
      <h1>Cadastrar nova transação</h1>

      <Form>

        <InputField className="inputField">
          <label htmlFor="titulo">Título</label>
          <input type="text" name="titulo" id="titulo" onChange={(e) => setTitle(e.target.value)}/>
        </InputField>

        <Row>
          <InputField>
            <label htmlFor="type">Tipo</label>
            <select name="type" id="type" onChange={(e) => setType(e.target.value)}>
              <option value="saida">Saída</option>
              <option value="entrada">Entrada</option>
            </select>
          </InputField>

          <InputField>
            <label htmlFor="data">Data</label>
            <input type="date" name="data" id="data" onChange={(e) => setDate(e.target.value)}/>
          </InputField>

          <InputField>
            <label htmlFor="freq">Frequência</label>
            <select name="freq" id="freq" onChange={(e) => setFreq(e.target.value)}>
              <option value="eventual">Eventual</option>
              <option value="recorrente">Recorrente</option>
            </select>
          </InputField>

          <InputField className="inputField">
            <label htmlFor="valor">Valor</label>
            <input type="number" name="valor" id="valor" onChange={(e) => setValue(e.target.value)}/>
          </InputField>
        </Row>

          <InputField>
            <label htmlFor="desc">Descrição</label>
            <textarea name="desc" id="desc" onChange={(e) => setDesc(e.target.value)}></textarea>
          </InputField>

        <ButtonRow>
          <div>
            <button id="delete">Excluir</button>
          </div>

          <div>
            <button id="back">voltar</button>
            <button id="create" type="button" onClick={onSubmit}>cadastrar</button>
          </div>
        </ButtonRow>
      </Form>
    </Container>
  )
}

export default Transactions;