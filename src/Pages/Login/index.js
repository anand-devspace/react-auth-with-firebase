import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//Style
import './style.scss'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Login() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className="loginGrid">
        <Grid item xs={12}>
        <Typography variant="h5" component="div" gutterBottom>
            Login
        </Typography>
        <TextField className="loginInputName" label="Name" variant="standard" />
        <TextField className="loginInputPassword" label="Password" variant="standard" />
        <Button variant="contained" className="loginSubmit">Login</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
