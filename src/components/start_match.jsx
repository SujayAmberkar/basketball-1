import React, {useState} from "react";
import ScoreSheet from "./score_sheet";

function start_match(setScoreSheet){
    setScoreSheet(true)
}

function StartMatch(props){
    const [scoreSheet, setScoreSheet] = useState(false);
    return(
            <div id='start_match'>
                {scoreSheet ? <ScoreSheet players = {props.players} /> : <> 
                    <button onClick={()=> start_match(setScoreSheet)}>START MATCH</button>
                    </>
                }
            </div>
        );
}

export default StartMatch;
