import React, { Component } from 'react'
import axios from "axios";
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
      StartMatch: 0,
      MatchData: [],
      playerData: this.props.players
    }
    this.show=this.show.bind(this)
  }

  show(){
    //this.state.playerData.team_a.team_a.playing_5.map((i)=>{
    //console.log(i);
    //});
  }
  end_match(){
    this.send_data(this.state.MatchData)
  }

  send_data(match_data){
    var data = new FormData();
    data.append('match_data', JSON.stringify(match_data));

    var config = {
      method: 'post',
      url: 'https://asia-south1-basketball-353906.cloudfunctions.net/recieve_match_data',
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  getUTCtime(){
    var t = new Date()
    const time = t.getUTCHours()*3600 + t.getUTCMinutes()*60+ t.getUTCSeconds()
    return time
  }
  start_match(){
    const time = this.getUTCtime()
    this.setState({StartMatch: time})
  }
  setPlayer(pNumber, pName, teamName){
    const lastEntry = (this.state.MatchData).pop()
    console.log(lastEntry)
    const record = [...this.state.MatchData, {scoreType: lastEntry.scoreType ,sec: lastEntry.sec, player:{team: teamName, name: pName, number: pNumber}}]
    this.setState({MatchData: record})
  }
  scoreRecord(type){
    console.log(type)
    const time = this.getUTCtime()
    console.log(this.state.StartMatch)
    const record = [...this.state.MatchData, {scoreType: type ,sec: (time-this.state.StartMatch), player:{team: "", name: "", number: 0}}]
    this.setState({MatchData: record})
  }

  render() {
    console.log(this.state.MatchData)
    const teamA = this.state.playerData.team_a
    const teamB = this.state.playerData.team_b
    return (
      <div>
      <div>
      <ScoreCard/>
      <div className="main-container">
        {/* Team A card */}
        <Card id='teamA' className="team-card" sx={{minWidth:330}}>
                  <CardContent sx={{display:'flex'}}>
                    <Grid className='Player-list' container spacing={5}>
                      {
                        teamA.playing_5.map((i)=>{
                          return(
                              <Grid id={i} container item spacing={3}>
                                <Button variant='contained'>{i.number}</Button>
                                <Button onClick={()=>{this.setPlayer(i.number, i.name, teamA.team_name)}}>{i.name}</Button>
                              </Grid>                        
                          )
                        })
                      }
                      </Grid>
                  </CardContent>
            </Card>
          {/* tools */}
          <Card id='scoreButtons' className="team-card" sx={{minWidth:275}} >
                  <CardContent sx={{display:'flex'}}>
                    <Grid container rowSpacing={0.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                      <Button onClick={()=>{this.start_match()}} variant='contained'>Start</Button>
                      {
                        scoreButtons.map((i)=>{
                          return(<Grid item xs={6}>
                            <Button id={i} onClick={()=>{this.scoreRecord(i)}} className='scoreButtons' variant='contained'>{i}</Button>
                          </Grid>)
                        })
                      }
                      <Button onClick={()=>this.end_match()} variant='contained'>End Match</Button>
                    </Grid>
                    {/* <button onClick={this.show}>Show</button> */}
                  </CardContent>
            </Card>
        {/* Team B card */}
          <Card id='teamB' className="team-card" sx={{minWidth:330}}>
                  <CardContent sx={{display:'flex'}}>
                    <Grid className='Player-list' container spacing={5}>
                      {
                        teamB.playing_5.map((i)=>{
                          return(
                              <Grid id={i} container item spacing={3}>
                                <Button variant='contained'>{i.number}</Button>
                                <Button onClick={()=>{this.setPlayer(i.number, i.name, teamB.team_name)}}>{i.name}</Button>
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

