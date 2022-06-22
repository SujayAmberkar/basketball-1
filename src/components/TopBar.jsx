import React, { Component } from 'react'
import './TopBar.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './Images/logo.jpeg'


export default class TopBar extends Component {
  render() {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <img src={logo} alt="logo" width="55rem" style={{margin:'1rem'}}/>
                <Typography variant="h6" color="inherit" component="div">
                    HiBaskie
                </Typography>
                </Toolbar>
            </AppBar>
        </Box>
      </div>
    )
  }
}
