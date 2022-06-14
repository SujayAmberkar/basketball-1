import React from 'react'
import Stopwatch from '../../components/Stopwatch'
import BasicCard from '../../components/TimeCard'
import { Link } from 'react-router-dom';

function ScoreBoard() {
  return (
    <div>
      <BasicCard/>
      {/* Team A card */}
      
      {/* Team B card */}
      <Link to="/Summary"><button>Go to Highlights</button></Link>
      
    </div>
  )
}

export default ScoreBoard