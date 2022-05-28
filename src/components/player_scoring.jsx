import React, {Component} from "react";

class Scoring extends Component{
    state = {
        match : []
    }

    onTrigger = (event) => {
        
    }

    update_match(point, player_name){
        var joined = [{
            player_name: player_name,
            point: point,
            time: "t"
        }]
        this.props.parentCallback(joined);
    }

    render(){
        console.log(this.props.player)
        const player_name = this.props.player["player_name"]
        const player_number = this.props.player["player_number"]
        const one = 1, two =2, three = 3
        return (
            
            <div key={this.props.i}>
                <h5>{player_name}</h5>
                <h5>{player_number}</h5>
                <button onClick={()=>this.update_match(one, player_name)}>+{one}</button>
                <button onClick={()=>this.update_match(two, player_name)}>+{two}</button>
                <button onClick={()=>this.update_match(three, player_name)}>+{three}</button>
            </div>
        );
    }
}

export default Scoring;