import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/input';
import Button from '../../components/button';


import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="GoBarber" />

            <form>
                <h1>Faça seu logon</h1>

                <Input name="email" icon={FiMail} placeholder="E-mail" />
                <Input name="senha" icon={FiLock} placeholder="Senha" />
                <Button type="submit">Entrar</Button>
                <a href="forgot">Esqueci a minha senha</a>
            </form>

            <a href="signup"><FiLogIn /> Criar Conta</a>
        </Content>
        <Background />
    </Container>
);

export default SignIn;