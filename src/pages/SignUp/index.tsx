import React from 'react';
import { FiArrowLeft, FiUser,FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {

    function handleSubmit(data: object): void {
        console.log(data);
    }

    return (
    <Container>
        <Background />
        <Content>
            <img src={logoImg} alt="GoBarber" />

            <Form initialData={{name: 'Giovanni'}} onSubmit={handleSubmit}>
                <h1>Faça seu cadastro</h1>

                <Input name="name" icon={FiUser} placeholder="Nome" />
                <Input name="email" icon={FiMail} placeholder="E-mail" />
                <Input name="password" icon={FiLock} placeholder="Senha" />
                <Button type="submit">Cadastrar</Button>                
            </Form>

            <a href="signup"><FiArrowLeft />Voltar para  tela de logon</a>
        </Content>        
    </Container>
    );
};

export default SignUp;