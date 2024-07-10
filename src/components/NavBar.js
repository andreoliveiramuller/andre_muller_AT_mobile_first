import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Meu Site
      </Typography>
      <Button color="inherit" component={Link} to="/">
        Início
      </Button>
      <Button color="inherit" component={Link} to="/about">
        Sobre
      </Button>
      <Button color="inherit" component={Link} to="/contact">
        Contato
      </Button>
      <Button color="inherit" component={Link} to="/login">
        Login
      </Button>
      <Button color="inherit" component={Link} to="/form">
        Formulário
      </Button>
      <Button color="inherit" component={Link} to="/list">
        Lista
      </Button>
    </Toolbar>
  </AppBar>
);

export default NavBar;
