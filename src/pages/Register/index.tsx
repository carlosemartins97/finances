import React, {useState} from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import logoImg from '../../core/assets/logo.svg'
import Button from '../../core/components/Button';
import Input from '../../core/components/Input';

import {
    Container,
    Logo,
    Form,
    FormTitle,

} from './styles';

const Register: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');

    const history = useHistory();

    function handleSubmit() {
      const payload = {
        email,
        password,
        name
      };

      localStorage.setItem('@saveMoney-conta', JSON.stringify(payload));
      alert('Conta criada com sucesso!');
      
      history.push('/');
    } 

    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="Save Money" />
                <h2>Save Money</h2>
            </Logo>
            <Form onSubmit={() => handleSubmit()}>
                <FormTitle>Cadastrar</FormTitle>

                <Input 
                    type='text'
                    placeholder="Nome"
                    required
                    onChange={(e) => setName(e.target.value)}
                />

                <Input 
                    type='email'
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input 
                    type='password'
                    placeholder="Senha"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button type="submit">
                    Cadastrar
                </Button>

            </Form>

            <Link to="/" className="link">
                já tenho uma conta
            </Link>
        </Container>
    )
}

export default Register;