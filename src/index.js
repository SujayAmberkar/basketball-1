import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import StartMatch from './components/start_match'

let players =  {
    team_a:{
        team_name: "iit bombay",
        team_players: [
        {
            player_name: "rohit auti",
            player_number: 24,
            total_points: 0
        },
        
        {
            player_name: "atishey",
            player_number: 22,
            total_points: 0
        },
        {
          player_name: "thomas",
          player_number: 2,
          total_points: 0
      }
    ]
  },
    team_b:{
        team_name: "iit delhi",
        team_players: [
        {
            player_name: "rohit auti",
            player_number: 24,
            total_points: 0
        },
        
        {
            player_name: "atishey",
            player_number: 22,
            total_points: 0
        },
        {
          player_name: "thomas",
          player_number: 2,
          total_points: 0
      }
    ]
  },
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <StartMatch players = {players}></StartMatch>
  </div>
);

reportWebVitals();
