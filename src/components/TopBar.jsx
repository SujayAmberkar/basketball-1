import React, { Component } from 'react'
import './TopBar.css'
import Typography from '@mui/material/Typography';
import logo from './Images/logo.jpeg'
import "./TopBar.css"


export default class TopBar extends Component {
  render() {
    return (
      <div className='Topbar-main'>
                <img src={logo} alt="logo" width="55rem"  style={{margin:'1rem',borderRadius:'100%'}}/>
                <Typography fontWeight="100" marginLeft="10" fontFamily="Comfortaa" variant="h6" color="white" component="div" noWrap>
                    HiBasky
                </Typography>
      </div>
    )
  }
}
