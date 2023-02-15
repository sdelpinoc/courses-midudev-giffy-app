import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerService } from '../services/register';
import { useState } from 'react';

const initialValues = {
    email: '', password: ''
};

const validateFields = (values) => {
    const errors = {};
    // console.log(values);

    if (!values.email) {
        errors.email = 'Required email';
    }

    if (!values.password) {
        errors.password = 'Required password';
    } else if (values.password.length < 5) {
        errors.password = 'Length must be 5 o more';
    }

    return errors;
}

export default function Register() {
    const [registered, setRegistered] = useState(false);

    if (registered) {
        return <h3>Successfully registered ✅</h3>
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validate={validateFields}
                onSubmit={(values, { setFieldError }) => {
                    return registerService(values)
                        .then(() => {
                            setRegistered(true);
                        })
                        .catch(error => {
                            setFieldError('email', error.message);
                        })
                }}>
                {
                    ({ isSubmitting, errors }) =>
                        <Form className="form">
                            <Field
                                className={errors.email ? 'error' : ''}
                                type="text"
                                name="email"
                                placeholder="Email"
                            />
                            <ErrorMessage className='form-error' name='email' component='small' />
                            <Field
                                className={errors.password ? 'error' : ''}
                                type="password"
                                name="password"
                                placeholder="Password"
                            />
                            <ErrorMessage className='form-error' name='password' component='small' />
                            <button className="btn" disabled={isSubmitting}>Register</button>
                        </Form>
                }
            </Formik>
        </>
    )
}