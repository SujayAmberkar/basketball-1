import { Button } from '@mui/material'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MobileOne extends Component {
  render() {
    return (
      <div>
        <Link to="/MobileController"><Button>Start</Button></Link>
      </div>
    )
  }
}
