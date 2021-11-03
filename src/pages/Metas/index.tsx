import { useEffect, useState } from 'react';
import {Container, InputField, Row} from './styles';

export interface MetasProps {
  title: string;
  type: string;
  date: string;
  amount: string;
  description: string;
}

export default function Metas() {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('atingido');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  function saveOnLocalStorage(arr: MetasProps[], payload: MetasProps) {
    arr.push(payload);

    localStorage.setItem('@saveMoney-metas', JSON.stringify(arr));
  }

  function createSaveOnLocalStorage(payload: MetasProps) {
    let arr: MetasProps[] = [
      payload
    ]

    localStorage.setItem('@saveMoney-metas', JSON.stringify(arr));
  }

  function onSubmit() {
    let payload: MetasProps = {
      title,
      type,
      date,
      amount,
      description
    }

    const localData = localStorage.getItem('@saveMoney-metas');
    if(localData) {
      let newLocalData: MetasProps[] = JSON.parse(localData);
      
      saveOnLocalStorage(newLocalData, payload);
    } else {
      createSaveOnLocalStorage(payload);
    }

    alert('Transação cadastrada!')
  }

  useEffect(() => {
    const localData = localStorage.getItem('@saveMoney-metas');
    if(localData) {
      console.log(JSON.parse(localData));
    }
  },[])

  return (
    <Container>
      <h1>Cadastrar nova meta</h1>


    <form>
      <InputField className="inputField">
        <label htmlFor="title">Título</label>
        <input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)}/>
      </InputField>

      <Row>
        <InputField>
          <label htmlFor="type">Tipo</label>
          <select name="type" id="type" onChange={(e) => setType(e.target.value)}>
            <option value="atingido">Valor a ser atingido</option>
            <option value="maximo">Valor máximo a ser gastado</option>
          </select>
        </InputField>

        <InputField>
          <label htmlFor="date">Data limite</label>
          <input type="date" name="date" id="date" onChange={(e) => setDate(e.target.value)}/>
        </InputField>

        <InputField>
          <label htmlFor="value">Valor</label>
          <input type="number" name="value" id="value" onChange={(e) => setAmount(e.target.value)}/>
        </InputField>
      </Row>

      <InputField className="fieldInput">
        <label htmlFor="msg">Descrição</label>
        <textarea name="msg" id="msg" onChange={(e) => setDescription(e.target.value)}/>

        <button type="button" onClick={onSubmit}>Cadastrar</button>
      </InputField>
      
    </form>
    </Container>
  )
}