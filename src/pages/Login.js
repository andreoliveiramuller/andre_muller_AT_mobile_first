import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Certifique-se de que este caminho está correto
import { Container, TextField, Button, Typography } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Handle successful login
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
      <Typography variant="h5">Login</Typography>
      <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} sx={{ marginBottom: '8px' }} />
      <TextField label="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} sx={{ marginBottom: '16px' }} />
      <Button variant="contained" onClick={handleLogin}>Login</Button>
    </Container>
  );
};

export default Login;
