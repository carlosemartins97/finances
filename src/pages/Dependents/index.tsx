import { useState } from 'react';
import {Container, FormField, TextInfo} from './styles';

export default function Dependents() {

  const [email, setEmail] = useState('');

  function onSubmitAssociar() {
    const payload = {
      email
    };

    const dependentesLocal = localStorage.getItem('@saveMoney-dependentes');
    if(dependentesLocal) {
      const novosDependentes: string[] = JSON.parse(dependentesLocal);
      novosDependentes.push(payload.email);

      localStorage.setItem('@saveMoney-dependentes', JSON.stringify(novosDependentes));
      
    } else {
      localStorage.setItem('@saveMoney-dependentes', JSON.stringify([payload]));
    }
    alert('O associado responderá o formulário e após finalizar, estará vinculado a sua conta.');
  }

  function onSubmitEnviarConvite() {
    alert('Convite enviado!!');
  }

  return (
    <Container>
      <h1>Associação com dependentes</h1>

      <div>
        <h2>Dependente ja possui conta?</h2>

        <FormField>
            <label htmlFor="email">E-mail:</label>
            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>

            <button type="button" onClick={onSubmitAssociar}>ASSOCIAR CONTA</button>
        </FormField>

        <TextInfo>
          Caso não possua conta, 
          envie um convite com a associação pré-estabelecida.
        </TextInfo>

        <FormField>
          <label htmlFor="email2">E-mail:</label>
          <input type="email" name="email2" id="email2" />

          <label className="txtMsg" htmlFor="msg">Escreva uma mensagem para anexar ao convite:</label>
          <textarea name="msg" id="msg"></textarea>

          <button type="button" onClick={onSubmitEnviarConvite}>ENVIAR CONVITE</button>
        </FormField>
      </div>
    </Container>
  )
};