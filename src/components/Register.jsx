import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { registerService } from '../services/register';

import { sleep } from '../library/utils';

export default function Register () {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [registered, setRegistered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorForm, setErrorForm] = useState('');

  const onSubmit = async (values) => {
    setErrorForm('');
    setIsSubmitting(true);

    await sleep(1)

    registerService(values)
      .then(() => {
        setRegistered(true)
      })
      .catch(error => {
        setErrorForm(error.message);
      }).finally(() => {
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
        <label htmlFor="email">Email</label>
        <input
          className={errors.email ? 'error' : ''}
          type="text"
          name="email"
          placeholder="user@domain.com"
          {...register('email', { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
        />
        {errors.email && <span className='form-error'>The email is required</span>}
        <label htmlFor="password">Password</label>
        <input
          className={errors.password ? 'error' : ''}
          type="password"
          name="password"
          placeholder="******"
          {...register('password', { required: 'Password is required', minLength: 6 })}
        />
        {errors.password?.type === 'required' && <span className='form-error'>{errors.password?.message}</span>}
        {errors.password?.type === 'minLength' && <span className='form-error'>Password length must be 6 or more</span>}
        {errorForm && <p className='form-error'>{errorForm}</p>}
        <button className="btn" disabled={isSubmitting}>{!isSubmitting ? 'Register' : 'Registering account...'}</button>
      </form>
      <div>
        Do you already have an <Link to={'/login'}>account</Link>?
      </div>
    </>
  )
}