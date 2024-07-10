import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import AlertSnackbar from '../components/AlertSnackbar';
import Avatar from '../components/Avatar';
import Checkbox from '../components/Checkbox';
import Fab from '../components/Fab';
import Button from '../components/Button';
import TextField from '../components/TextField';
import Typography from '../components/Typography';
import TableList from '../components/TableList';

const Home = () => {
  const [checked, setChecked] = useState(false);
  const [alert, setAlert] = useState({ open: false, message: '', type: '' });
  const [inputValue, setInputValue] = useState('');
  const columns = ['Nome', 'Idade', 'Profissão'];
  const data = [
    { Nome: 'João', Idade: 28, Profissão: 'Desenvolvedor' },
    { Nome: 'Maria', Idade: 32, Profissão: 'Designer' },
    { Nome: 'Carlos', Idade: 25, Profissão: 'Gerente de Projetos' },
  ];

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const showAlert = (message, type) => {
    setAlert({ open: true, message, type });
  };

  const handleAlertClose = () => {
    setAlert({ ...alert, open: false });
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Container sx={{ padding: { xs: '16px', sm: '32px', md: '48px' }, textAlign: 'center', position: 'relative' }}>
      <Avatar alt="Avatar do Desenvolvedor" size="small" />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Página Inicial</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Bem-vindo à página inicial! Esta página foi projetada com design mobile-first.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="success" onClick={() => showAlert('Isso é um alerta de sucesso!', 'success')}>
            Mostrar Alerta de Sucesso
          </Button>
          <Button variant="contained" color="error" onClick={() => showAlert('Isso é um alerta de erro!', 'error')}>
            Mostrar Alerta de Erro
          </Button>
          <Button variant="contained" color="warning" onClick={() => showAlert('Isso é um alerta de aviso!', 'warning')}>
            Mostrar Alerta de Aviso
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Digite algo" type="text" value={inputValue} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <Checkbox label="Aceitar termos e condições" checked={checked} onChange={handleCheckboxChange} />
        </Grid>
        <Grid item xs={12}>
          <TableList columns={columns} data={data} />
        </Grid>
      </Grid>
      <Fab icon="+" onClick={() => alert('FAB clicked!')} />
      <AlertSnackbar open={alert.open} message={alert.message} type={alert.type} handleClose={handleAlertClose} />
    </Container>
  );
};

export default Home;
