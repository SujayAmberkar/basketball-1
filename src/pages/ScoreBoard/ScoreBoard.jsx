import React, { Component } from 'react'
// import Stopwatch from '../../components/Stopwatch'
import ScoreCard from '../../components/ScoreCard'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./ScoreBoard.css"
import { Grid,Paper } from '@mui/material';
import ScoreBoardFooter from '../../components/ScoreBoardFooter';
import { styled } from '@mui/material/styles';

const scoreButtons = [1,2,3,"A","F","U"]

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width:"15rem"
}));


export default class ScoreBoard extends Component {
  
  constructor(props){    
    super(props)
    this.state = {
      playerData: this.props.players
    }
    this.show=this.show.bind(this)
  }

  show(){
    // this.props.players.team_a.team_a.playing_5.map((i)=>{
    //   console.log(i);
    // });
  }

  render() {
    return (
      <div>
      <div>
      <ScoreCard/>
      <div className="main-container">
        {/* Team A card */}
        <Card className="team-card" sx={{minWidth:330}}>
                  <CardContent sx={{display:'flex'}}>
                    <Grid className='Player-list' container spacing={5}>
                      {
                        this.props.players.team_a.team_a.playing_5.map((i)=>{
                          return(
                              <Grid container item spacing={3}>
                                <Button variant='contained'>1!</Button>
                                <Item>{i.name}</Item>
                              </Grid>                        
                          )
                        })
                      }
                      </Grid>
                  </CardContent>
            </Card>
          {/* tools */}
          <Card className="team-card" sx={{minWidth:275}} >
                  <CardContent sx={{display:'flex'}}>
                    <Grid container rowSpacing={0.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                      {
                        scoreButtons.map((i)=>{
                          return(<Grid item xs={6}>
                            <Button className='scoreButtons' variant='contained'>{i}</Button>
                          </Grid>)
                        })
                      }
                    </Grid>
                    {/* <button onClick={this.show}>Show</button> */}
                  </CardContent>
            </Card>
        {/* Team B card */}
          <Card className="team-card" sx={{minWidth:330}}>
                  <CardContent sx={{display:'flex'}}>
                    <Grid className='Player-list' container spacing={5}>
                      {
                        this.props.players.team_a.team_a.playing_5.map((i)=>{
                          return(
                              <Grid container item spacing={3}>
                                <Button variant='contained'>1!</Button>
                                <Item>{i.name}</Item>
                              </Grid>                        
                          )
                        })
                      }
                      </Grid>
                  </CardContent>
            </Card>
             {/* history recorder */}
          <Card className="team-card" sx={{minWidth:275}}>
                  <CardContent sx={{display:'flex'}}>
                      <Typography>Score records</Typography>
                  </CardContent>
          </Card>
        </div>

      
      </div>
      <ScoreBoardFooter/>
    </div>
    )
  }
}

