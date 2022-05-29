import React, {Component} from "react";
import Player from "./team";

class ScoreSheet extends Component{
    state = {
        start_time : null,
        teams: this.props.players,
        match: []

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

    start_match(){
        var t = new Date()
        const time = t.getUTCHours() + ":" +t.getUTCMinutes() + ":" + t.getUTCSeconds()
        console.log(time)
        this.setState({start_time: time})
        console.log(this.state.start_time)
    }

    render(){
        const team_a = this.state.teams.team_a
        const team_b = this.state.teams.team_b
        console.log(this.state.match)

        return(
            <div>
                <button className="start_match" onClick={()=>this.start_match()}> START MATCH</button>
                <div className='score_sheet'>
                    <Player team={team_a}parentCallback={this.handleCallbackA}></Player>
                    <Player team={team_b} parentCallback={this.handleCallbackB}></Player>
                </div>
            </div>

        );
    }
}

export default ScoreSheet;