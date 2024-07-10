import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

const About = () => (
  <Container sx={{ padding: { xs: '16px', sm: '32px', md: '48px' }, textAlign: 'center' }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Sobre</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">
          Esta é a página sobre. Aqui você pode aprender mais sobre nossa missão e valores.
        </Typography>
      </Grid>
    </Grid>
  </Container>
);

export default About;
