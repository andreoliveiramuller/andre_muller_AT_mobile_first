import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const items = [
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
  { id: 3, text: 'Item 3' },
];

const ListPage = () => (
  <Container sx={{ padding: { xs: '16px', sm: '32px', md: '48px' }, textAlign: 'center' }}>
    <Typography variant="h5">Lista</Typography>
    <List>
      {items.map((item) => (
        <ListItem key={item.id}>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  </Container>
);

export default ListPage;
