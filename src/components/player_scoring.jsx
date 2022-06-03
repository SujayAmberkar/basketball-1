import React, {Component} from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

class Scoring extends Component{
    state = {
        start_time: this.props.start_time,
        match : []
    }


    update_match(point, player_name, player_number){
        var t = new Date()
        const time = t.getUTCHours()*3600 + t.getUTCMinutes()*60+ t.getUTCSeconds()
        
        console.log(this.state.start_time)
        var joined = [{
            "player_name": player_name,
            "player_number": player_number,
            "point": point,
            "time": time - this.state.start_time
        }]
        this.props.parentCallback(joined);
    }

    render(){
        const player_name = this.props.player["player_name"]
        const player_number = this.props.player["player_number"]
        const one = 1, two =2, three = 3

        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                    m: 1,
                    },
                }}
                key={this.props.i}
            >

                <ButtonGroup variant="outlined" size="small" aria-label="text button group">
                    <Button>{player_number}</Button>
                    <Button>{player_name.toUpperCase()}</Button>
                </ButtonGroup>
                <ButtonGroup variant="text" size="large" aria-label="outlined button group">
                    <Button onClick={()=>this.update_match(one, player_name, player_number)}>+{one}</Button>
                        <Button onClick={()=>this.update_match(two, player_name, player_number)}>+{two}</Button>
                        <Button onClick={()=>this.update_match(three, player_name, player_number)}>+{three}</Button>
                </ButtonGroup>

            </Box>
            // <div style={{align:'center'}} className="player_details" key={this.props.i}>
            //     <div className="name_and_number"><h3>{player_number}</h3><h5>{player_name.toUpperCase()}</h5></div>
            //     <button onClick={()=>this.update_match(one, player_name, player_number)}>+{one}</button>
            //     <button onClick={()=>this.update_match(two, player_name, player_number)}>+{two}</button>
            //     <button onClick={()=>this.update_match(three, player_name, player_number)}>+{three}</button>
            // </div>
        );
    }
}

export default Scoring;