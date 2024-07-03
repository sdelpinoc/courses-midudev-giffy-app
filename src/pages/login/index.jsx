import { Helmet } from 'react-helmet';

import Login from '../../components/Login';

export default function LoginPage () {
  return (
    <>
      <Helmet>
        <title>Login | Giffy</title>
      </Helmet>
      <section>
        <Login />
      </section>
    </>
  )
}