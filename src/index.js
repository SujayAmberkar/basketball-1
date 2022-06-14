import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import StartMatch from './components/start_match'

let players =  {
    team_a:{
        team_name: "green",
        team_players: [
        {
            player_name: "22",
            player_number: 10,
            total_points: 0
        },
        {
            player_name: "lebron",
            player_number: 23,
            total_points: 0
        },
        {
          player_name: "14",
          player_number: 8,
          total_points: 0
        },
        
    ]
  },
    team_b:{
        team_name: "black",
        team_players: [
        {
            player_name: "india",
            player_number: 24,
            total_points: 0
        },
        
        {
            player_name: "agnels",
            player_number: 22,
            total_points: 0
        },
        {
          player_name: "tall",
          player_number: 22,
          total_points: 0
        },
        {
          player_name: "married",
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
