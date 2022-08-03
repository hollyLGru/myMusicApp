import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function LogInCard(props) {


  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Music App
          </Typography>

        </Toolbar>
      </AppBar>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' , alignItems: 'center', justifyContent: 'center'}
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Username*" variant="standard" />
      <br/>
      <TextField id="standard-basic" label="Password*" variant="standard" />
    </Box>
    <br/>    
    <Button variant="contained" onClick={props.handleClick} style={{ width: '25ch', display: 'flex', alignItems: 'center', justifyContent: 'center', margin:'auto' }} >Login</Button>

    </div>
      </div>
    
  );
}

export default LogInCard;