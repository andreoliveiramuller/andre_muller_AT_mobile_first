import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Nome: ${name}, Email: ${email}`);
  };

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
      <Typography variant="h5">Formulário</Typography>
      <TextField label="Nome" value={name} onChange={(e) => setName(e.target.value)} sx={{ marginBottom: '8px' }} />
      <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} sx={{ marginBottom: '16px' }} />
      <Button variant="contained" onClick={handleSubmit}>Enviar</Button>
    </Container>
  );
};

export default Form;

