import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar'


class App extends Component {
  constructor(){
    super()
    this.state = {
      loggedIn: true
    }
  };

  handleClick = () => {
    this.state.isClicked ? 
      this.setState({loggedIn : true}) : this.setState({loggedIn : false})
  }

  render() {
    return !this.state.loggedIn ? 
    (
      <div>
      <NavBar />
      <br/>
      <Dashboard />
      </div>
    )
    : (
      

      <div>
        <NavBar/>
        <br/>



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
    </div>   
    <br/>     
    <Button variant="contained" onClick={(e) => {this.handleClick(e)}} style={{ width: '25ch', display: 'flex', alignItems: 'center', justifyContent: 'center', margin:'auto' }} >Login</Button>


      </div>


)}}

export default App;