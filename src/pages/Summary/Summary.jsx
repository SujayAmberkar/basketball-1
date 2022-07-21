import React from 'react'
import { Typography,Card,CardContent,Box,Button } from '@mui/material';
import './Summary.css'
import HighlightsTable from '../../components/HighlightsTable';
import MatchHighligthsVideo from '../../components/MatchHighligthsVideo';
import FinalTable from '../../components/FinalTable';

function Summary() {
  // const embedMatchHght = fetch()
  // const embedMVPHght   = fetch()
  return (
    <div>
      <div className='main-container'>
        {/* Left */}
        <div className='left-container'>
          <Box sx={{ minWidth: 275,margin:1 }}>
            <Card className='total-score' variant="outlined">
              <CardContent >
                <Typography variant="h4">8</Typography>
              </CardContent>
              <hr />
              <CardContent>
                <Typography variant='h4'>13</Typography>
              </CardContent>
            </Card>
          </Box>
          <HighlightsTable/>
          
          <div className='video-container'>
          <Typography fontFamily="comfortaa" variant='h5' style={{color:'white'}}>Video Highlights</Typography>
            <MatchHighligthsVideo embedId='oiixoRfEmyw'/>
            <MatchHighligthsVideo embedId='DufU8s4_IBw'/>
          </div>
          
        </div>
        
        {/* Right */}
        <div className='right-container'>
          <Button variant='contained' style={{marginTop:'1rem'}}>Wathc Full Match</Button>
          <Box sx={{ minWidth: 275,margin:1 }}>
            <Card className='player-mvp' variant="outlined">
              <CardContent >
                <Typography variant="h6">Match MVP</Typography>
              </CardContent>
              <CardContent>
                <Typography fontFamily="comfortaa" variant='h6'>Player 1 12</Typography>
              </CardContent>
            </Card>
          </Box>
          
          <FinalTable/>
        </div>
      </div>
    </div>
  )
}

export default Summary