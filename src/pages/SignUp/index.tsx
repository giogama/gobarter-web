import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiUser,FiLock, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {

    const formRef = useRef<FormHandles>(null);    

    const handleSubmit = useCallback(async (data: object) => {               
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string().required('Informe o nome'),
                email: Yup.string().required('Informe o e-mail').email('E-mail inválido'),
                password: Yup.string().min(6, 'Senha deve ter mais que 6 caracteres')
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
        <Background />
        <Content>
            <img src={logoImg} alt="GoBarber" />

            <Form ref={formRef} initialData={{name: 'Giovanni'}} onSubmit={handleSubmit}>
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