import React, {Component} from "react";
import { Card } from "react-bootstrap";
import Player from "./team";
import axios from "axios";

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
        const url = "http://127.0.0.1:5000/player_highlights"
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

    confirm(){
        
    }

    render(){
        const team_a = this.state.teams.team_a
        const team_b = this.state.teams.team_b
        const {start_time} = this.state
        console.log(this.state.match)

        return(
                <div className='score_sheet'>
                    <Card style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title>TEAM 1</Card.Title>
                            <Player start_time={start_time} team={team_a}parentCallback={this.handleCallbackA}></Player>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title>TEAM 2</Card.Title>
                            <Player start_time={start_time} team={team_b} parentCallback={this.handleCallbackB}></Player>
                        </Card.Body>
                    </Card>
                    <button onClick={()=>this.confirm()}>CONFIRM</button>
                    <button onClick={()=>this.end_match()}>END MATCH</button>
                </div>
        );
    }
}

export default ScoreSheet;