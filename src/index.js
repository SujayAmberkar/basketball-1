import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Player from './components/player';

let players =  [
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Player players={players}></Player>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
