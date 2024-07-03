import { Helmet } from 'react-helmet';

import Register from '../../components/Register';

export default function RegisterPage () {
  return (
    <>
      <Helmet>
        <title>Register | Giffy</title>
      </Helmet>
      <h2>Register</h2>
      <Register />
    </>
  )
}