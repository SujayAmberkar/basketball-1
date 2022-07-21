import React from 'react'
import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
import './ScoreBoardFooter.css'
import { Link } from 'react-router-dom';

function ScoreBoardFooter() {
  return (
    <Box className='ScoreCard-main'>
        <Button variant='contained'>Confirm</Button>
        <Button variant='contained'>End Q</Button>
        <Link to="/Summary" style={{textDecoration:'none'}}><Button variant='contained'>Go to Highlights</Button></Link>
    </Box>
  )
}

export default ScoreBoardFooter