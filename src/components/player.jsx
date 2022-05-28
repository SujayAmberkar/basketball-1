import React, {Component, useCallback} from "react";
import Scoring from "./player_scoring";


class Player extends Component{
    state = {
        players: this.props.players,
        match: []
    }
    update_match_data(childData){

    }
    handleCallback = (childData) => {
        var joined = this.state.match.concat(childData)
        this.setState({match: joined})
        console.log(this.state.match)
    }
    render(){
        const player_list = this.state["players"];
        let total_players = player_list.length;
        console.log(total_players)

        let player_list_components = []
        for (let i = 0; i < total_players; i++ ){
            player_list_components.push(
                <div key={i}>
                    <Scoring key={i} player={this.state["players"][i]} parentCallback = {this.handleCallback} />
                    <button onClick={() => this.update_match_data()}></button>
                </div>        
                
            )
        }
        return (
            <div>
                {player_list_components}
            </div>
        );
    }
}

export default Player;