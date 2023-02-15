import { useForm } from 'react-hook-form';
import { registerService } from '../services/register';
import { useState } from 'react';

export default function Register() {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const [registered, setRegistered] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorForm, setErrorForm] = useState('');

    const onSubmit = (values) => {
        console.log(values);
        setErrorForm('');
        setIsSubmitting(true);
        registerService(values)
            .then(() => {
                setRegistered(true)
                setIsSubmitting(false);
            })
            .catch(error => {
                setErrorForm(error.message);
                setIsSubmitting(false);
            })
    }

    if (registered) {
        return <h3>Successfully registered ✅</h3>
    }

    return (
        <>
            <form
                className="form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    className={errors.email ? 'error' : ''}
                    type="text"
                    name="email"
                    placeholder="Email"
                    {...register('email', { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                />
                {errors.email && <span className='form-error'>This field is required</span>}
                <input
                    className={errors.password ? 'error' : ''}
                    type="password"
                    name="password"
                    placeholder="Password"
                    {...register('password', { required: 'Password is required', minLength: 5 })}
                />
                {errors.password?.type === 'required' && <span className='form-error'>{errors.password?.message}</span>}
                {errors.password?.type === 'minLength' && <span className='form-error'>Password length must be 5 or more</span>}
                {errorForm && <p className='form-error'>{errorForm}</p>}
                <button className="btn" disabled={isSubmitting}>Register</button>
            </form>
        </>
    )
}