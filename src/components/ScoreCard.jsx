import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './ScoreCard.css'
import StopWatch from './Stopwatch';


export default function ScoreCard() {
    const q = 1;

  return (
    <Box className='ScoreCard-main'>
        {/* Quater recorder */}
        <Card sx={{ minWidth: 275,margin:'1rem' }}>
                <CardContent sx={{display:'flex'}}>
                    <Typography variant='h4' align='right'>Q{q}</Typography>
                </CardContent>
        </Card>

        {/* Total Score recorder */}
        <Card sx={{ minWidth: 100,margin:'1rem' }}>
                <CardContent sx={{display:'flex'}}>
                    <Typography variant='h4' align='right'>10</Typography>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Typography variant='h4' align='right'>11</Typography>
                </CardContent>
        </Card>

        {/* stopwatch  */}
        <Card sx={{ minWidth: 275,margin:'1rem' }}>
                <CardContent sx={{display:'flex'}}>
                    <Divider orientation='vertical' align="left"/>
                    {/* <Button className='timer-button' onClick={timerButtonHandler} variant="contained" color="success">{timerButton}</Button> */}
                    <StopWatch/>
                </CardContent>
        </Card>
    </Box>
  );
}
