import React, { useState } from 'react';

import { FcGoogle, FcLock } from 'react-icons/fc';
import { Container, InputField } from './styles';

function Login(): JSX.Element {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const isFormValid = name && password;

  return (
    <Container>
      <button type="button">
        <FcGoogle size={30} />
        <span>Faça login com Google</span>
      </button>
      <span>OU</span>
      <form noValidate>
        <InputField>
          E-mail
          <div className="input-container">
            <span>@</span>
            <input
              type="email"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
        </InputField>
        <InputField>
          Senha
          <div className="input-container">
            <FcLock size={26} />
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </InputField>
        <button type="submit" disabled={!isFormValid}>
          Login
        </button>
      </form>
    </Container>
  );
}

export default Login;
