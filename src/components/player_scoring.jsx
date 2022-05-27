import React, {Component} from "react";

class Scoring extends Component{
    state = {
        match : []
    }

    update_match(name){
        var joined = this.state.match.concat([{
            player_name: name,
            time: "t"
        }]) 
        this.setState({match: joined})
        console.log(this.state.match)
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
                <button>+{one}</button>
                <button>+{two}</button>
                <button>+{three}</button>
            </div>
        );
    }
}

export default Scoring;