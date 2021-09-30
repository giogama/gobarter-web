import { ValidationError } from 'yup';

interface MyCustomErrors {
    [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): MyCustomErrors {
    const validationErrors: MyCustomErrors = {};

    err.inner.forEach(error => {       
        validationErrors[error.path!] = error.message;
    });

    return validationErrors;
}