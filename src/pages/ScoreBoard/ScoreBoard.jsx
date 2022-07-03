import React, { Component } from 'react'
import axios from "axios";
// import Stopwatch from '../../components/Stopwatch'
import ScoreCard from '../../components/ScoreCard'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./ScoreBoard.css"
import { Grid } from '@mui/material';
import ScoreBoardFooter from '../../components/ScoreBoardFooter';
import PlayerSwitch from '../../components/PlayerSwitch';

const scoreButtons = [1,2,3,"A","F","B"]


export default class ScoreBoard extends Component {
  
  constructor(props){    
    super(props)
    this.state = {
      StartMatch: 0,
      MatchData: [],
      playerData: this.props.players
    }
    
  }

  end_match(){
     this.send_data(this.state.MatchData)
  }

  // start_match(){
  //   const time = this.getUTCtime()
  //   this.setState({StartMatch: time})
  // }

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
  
  setPlayer(pNumber, pName, teamName){
    const lastEntry = (this.state.MatchData).pop()
    // console.log(lastEntry)
    const record = [...this.state.MatchData, {scoreType: lastEntry.scoreType ,sec: lastEntry.sec, player:{team: teamName, name: pName, number: pNumber}}]
    this.setState({MatchData: record})
  }

  scoreButtonHandler(e){
    if(e.target.innerHTML==="START"){
      const time = this.getUTCtime()
      this.setState({StartMatch: time})
    }else if(e.target.innerHTML==="END MATCH"){
      this.send_data(this.state.MatchData)
    }
  }

  scoreRecord(type){
    // console.log(type)
    const time = this.getUTCtime()
    if (type === "start"){
      this.setState({StartMatch: time})
      return 
    }
    // console.log(this.state.StartMatch)
    const record = [...this.state.MatchData, {scoreType: type ,sec: (time-this.state.StartMatch), player:{team: "", name: "", number: 0}}]
    this.setState({MatchData: record})
  }

  render() {
    // console.log(this.state.MatchData)
    const teamA = this.state.playerData.team_a
    const teamB = this.state.playerData.team_b
    return (
      <div>
        <div>
          <ScoreCard/>
          <div className="main-container-board">
            {/* Team A card */}
            <Card id='teamA' className="team-card-board" sx={{minWidth:330}}>
              <CardContent sx={{display:'flex'}}>
                        <Grid className='Player-list-board' container spacing={5}>
                          {
                            teamA.playing_5.map((i)=>{
                              return(
                                  <Grid id={i} container item spacing={3}>
                                    <PlayerSwitch/>
                                    <Button className='scoreButtons-board' variant='contained'>{i.number}</Button>
                                    <Button onClick={()=>{this.setPlayer(i.number, i.name, teamA.team_name)}} variant="contained">{i.name}</Button>
                                  </Grid>                        
                              )
                            })
                          }
                          </Grid>
                      </CardContent>
            </Card>
              {/* tools */}
              <Card id='scoreButtons' className="team-card-board" sx={{minWidth:275}} >
                      <CardContent sx={{display:'flex'}}>
                        <Grid container rowSpacing={0.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                         <Button onClick={()=>{this.scoreRecord("start")}} variant='contained'>Start</Button>
                          {
                            scoreButtons.map((i)=>{
                              return(<Grid item xs={6}>
                                <Button id={i} onClick={()=>{this.scoreRecord(i)}} className='scoreButtons-board' variant='contained'>{i}</Button>
                              </Grid>)
                            })
                          }
                          <Button onClick={()=>this.end_match()} className="scoreButtons" variant='contained'>End Match</Button>
                        </Grid>
                        {/* <button onClick={this.show}>Show</button> */}
                      </CardContent>
                </Card>
            {/* Team B card */}
              <Card id='teamB' className="team-card-board" sx={{minWidth:330}}>
                      <CardContent sx={{display:'flex'}}>
                        <Grid className='Player-list-board' container spacing={5}>
                          {
                            teamB.playing_5.map((i)=>{
                              return(
                                  <Grid id={i} key={i.number} container item spacing={3}>
                                    <PlayerSwitch extras={this.props}/>
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
              <Card className="team-card-board" sx={{minWidth:275}}>
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

