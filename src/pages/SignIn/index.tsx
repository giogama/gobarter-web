import React, { useRef, useCallback, useContext } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import AuthContext from '../../context/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/input';
import Button from '../../components/button';


import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);  
    
    const auth = useContext(AuthContext);
    console.log(auth);

    const handleSubmit = useCallback(async (data: object) => {               
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({                
                email: Yup.string().required('Informe o e-mail').email('E-mail inválido'),
                password: Yup.string().required('Informe a senha'),
            });
            
            await schema.validate(data, {
                abortEarly: false,
            });            

        } catch (err: any) {
            const errors = getValidationErrors(err);

            formRef.current?.setErrors(errors);
        }
    }, []);

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="GoBarber" />

                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu logon</h1>

                    <Input name="email" icon={FiMail} placeholder="E-mail" />
                    <Input name="password" icon={FiLock} placeholder="Senha" />
                    <Button type="submit">Entrar</Button>
                    <a href="forgot">Esqueci a minha senha</a>
                </Form>

                <a href="signup"><FiLogIn /> Criar Conta</a>
            </Content>
            <Background />
        </Container>
    );
    
};

export default SignIn;
