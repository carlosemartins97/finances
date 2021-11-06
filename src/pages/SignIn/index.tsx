import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../core/assets/logo.svg'
import Button from '../../core/components/Button';
import Input from '../../core/components/Input';

import {useAuth} from '../../core/hooks/auth'

import {
    Container,
    Logo,
    Form,
    FormTitle,

} from './styles';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const {signIn} = useAuth();

    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="Save Money" />
                <h2>Save Money</h2>
            </Logo>
            <Form onSubmit={() => signIn(email, password)}>
                <FormTitle>Entrar</FormTitle>

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
                    Acessar
                </Button>

            </Form>

            <Link to="/register" className="link">
                criar minha conta
            </Link>
        </Container>
    )
}

export default SignIn;