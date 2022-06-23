import React, { Component } from 'react'
import axios from "axios";
import { Grid,Card,CardContent } from '@mui/material'
import './MobileController.css'

const buttonArray = ["2","3","F","1","B","S"]

export default class MobileController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StartMatch: 0,
      MatchData: [],
      playerData: this.props.players,
      label: "Start Match"
    }
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

  // change the label of the button
  changeLabel(){
    if(this.state.label === "Start Match"){
      this.setState({label: "End Match"})
    }else{
      this.setState({label: "Start Match"})
    }
  }
  scoreRecord(type){
    console.log(type)
    const time = this.getUTCtime()
    if (type === "start"){
      this.setState({StartMatch: time})
      return
    }
    console.log(this.state.StartMatch)
    const record = [...this.state.MatchData, {scoreType: type ,sec: (time-this.state.StartMatch), player:{team: "", name: "", number: 0}}]
    this.setState({MatchData: record})
  }
  end_match(){
    this.setState({StartMatch:this.getUTCtime(), MatchData: []})
    this.send_data(this.state.MatchData)
 }


  render() {
    return (
      
      <div className='main-container-Controller'>
        
        <Card id='teamA' className="team-card-controller" >
              <CardContent >
                    <Grid className='Player-list-controller' container spacing={5}>
                        <Grid className='inner-grid-controller' container item spacing={3}>
                            <button key={"start"} onClick={()=>{this.changeLabel()}} className='EndButton-controller' variant='contained'>{this.state.label}</button>
                            {                              
                                this.state.label === "End Match" && buttonArray.map((i)=>{
                                    return(                                     
                                        <button key={i} onClick={()=>{this.scoreRecord(i)}} className='scoreButtons-controller' variant='contained'>{i}</button>     
                                    )
                                })
                                
                            }
                        </Grid>  
                    </Grid>
              </CardContent>
        </Card>
      </div>
    )
  }
}
