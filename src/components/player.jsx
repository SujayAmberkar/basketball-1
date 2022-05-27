import React, {Component} from "react";
import Scoring from "./player_scoring";


class Player extends Component{
    state = {
        players: this.props.players,
        match: []
    }

    render(){
        const player_list = this.state["players"];
        console.log(player_list)
        let total_players = player_list.length;

        let player_list_components = []
        for (let i = 0; i < total_players; i++ ){
            player_list_components.push(<Scoring key={i} player={this.state["players"][i]} />)
        }
        console.log(player_list_components)
        return (
            <div>
                {player_list_components}
            </div>
        );
    }
}

export default Player;