import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

const Contact = () => (
  <Container sx={{ padding: { xs: '16px', sm: '32px', md: '48px' }, textAlign: 'center' }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Contato</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">
          Esta é a página de contato. Entre em contato conosco para mais informações.
        </Typography>
      </Grid>
    </Grid>
  </Container>
);

export default Contact;
