import React, {Component} from "react";
//import { Card } from "react-bootstrap";
import Player from "./team";
import axios from "axios";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


class ScoreSheet extends Component{
    state = {
        start_time : this.set_time(),
        teams: this.props.players,
        match: []
    }

    set_time(){
        var t = new Date()
        console.log(t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds())
        const time = t.getUTCHours()*3600 + t.getUTCMinutes()*60+ t.getUTCSeconds()
        console.log(time)
        return time
    }

    handleCallbackA = (childData) =>{
        console.log(childData)
        const team_data = this.state.match.concat({team_a: childData})
        this.setState({match: team_data})

    }
    handleCallbackB = (childData) =>{
        console.log(childData)
        const team_data = this.state.match.concat({team_b: childData})
        this.setState({match: team_data})
    }

    end_match(){
        const url = "https://us-central1-demo1-326813.cloudfunctions.net/testBasketballData"
        const match_data = this.state.match
        console.log(match_data)
        // Simple POST request with a JSON body using fetch
        axios({
            method: 'post',
            url: url,
            data: {match_data: match_data}
        })
        .then(res => {
            console.log(res);
        })
        .catch(err=>{
            console.log(err)
        });
    }

    render(){
        const team_a = this.state.teams.team_a
        const team_b = this.state.teams.team_b
        const {start_time} = this.state
        console.log(this.state.match)

        return(
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                    <Item>
                        <Player start_time={start_time} team={team_a}parentCallback={this.handleCallbackA}></Player>
                    </Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>
                        <Player start_time={start_time} team={team_b} parentCallback={this.handleCallbackB}></Player>
                    </Item>
                </Grid>
                <Grid item xs={16}>
                    <Item>
                        <button onClick={()=>this.end_match()}>END MATCH</button>
                    </Item>
                </Grid>
            </Grid>
        );
    }
}

export default ScoreSheet;