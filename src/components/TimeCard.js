import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './TimeCard.css'


export default function BasicCard() {
    const [q, setQ] = useState(1)
    const [timerButton, setTimerButton] = useState('Start')
    const timerButtonHandler=()=>{
        if(timerButton==='Start'){
            setTimerButton('Stop')
        }else{
            setTimerButton('Start')
        }
    }

  return (
    <Card sx={{ minWidth: 275,margin:'1rem' }}>
            <CardContent sx={{display:'flex'}}>
                <Typography variant='h4' align='right'>Q{q}</Typography>
                <Divider orientation='vertical' align="left"/>
                <Button className='timer-button' onClick={timerButtonHandler} variant="contained" color="success">{timerButton}</Button>
                {/* <Stopwatch/> */}
            </CardContent>
    </Card>
  );
}