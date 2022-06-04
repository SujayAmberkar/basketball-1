//import { Button } from "bootstrap";
import React, {Component} from "react";
import Scoring from "./player_scoring";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


class Player extends Component{
    state = {
        start_time: this.props.start_time,
        team_name: this.props.team.team_name,
        players: this.props.team.team_players,
        total_score: 0,
        match: []
    }


    log_match(){
        console.log(this.state.total_score)
        var {match} = this.state
        console.log(match);

        const parent_data = {
                team_name: this.state.team_name,
                final_score: this.state.total_score,
                match_data: this.state.match
        }
        return parent_data
        // this.props.parentCallback(parent_data)
    }

    handleCallback = (childData) => {
        const data = childData
        const {total_score} = this.state
        var joined = this.state.match.concat(childData)
        this.setState({match: joined})
        this.setState({total_score : total_score+ data[0].point})
    }
    render(){
        const player_list = this.state["players"];
        let total_players = player_list.length;

        let player_list_components = []
        for (let i = 0; i < total_players; i++ ){
            player_list_components.push(
                <div key={i}>
                    <Scoring start_time={this.state.start_time} player={this.state["players"][i]} parentCallback = {this.handleCallback} />
                </div>
            )
        }
        return (

            <Grid container spacing={2} columns={16}>
                <Grid item xs={16} id={this.state.team_name}>
                    <Item id="score">
                        <h1>{this.state.team_name.toUpperCase()} {" | "} {this.state.total_score}</h1>
                    </Item>
                    {player_list_components}
                </Grid>
            </Grid>
            // <div>
            //     <div id={this.state.team_name}>
            //         <div id="score">
            //             <h1>{this.state.team_name} {"->"} {this.state.total_score}</h1>
            //         </div>

            //         {player_list_components}
            //     </div>
            // </div>
        );
    }
}

export default Player;