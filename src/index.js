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
            player_name: "carina",
            player_number: 14,
            total_points: 0
        },
        {
            player_name: "short sister",
            player_number: 22,
            total_points: 0
        },
        {
          player_name: "tall sister",
          player_number: 8,
          total_points: 0
        },
        {
          player_name: "center",
          player_number: 2,
          total_points: 0
      }
    ]
  },
    team_b:{
        team_name: "Gst Samll ball",
        team_players: [
        {
            player_name: "yousuf",
            player_number: 24,
            total_points: 0
        },
        
        {
            player_name: "siddhant shinde",
            player_number: 22,
            total_points: 0
        },
        {
          player_name: "ajinkya mane",
          player_number: 22,
          total_points: 0
        },
        {
          player_name: "sameer",
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
