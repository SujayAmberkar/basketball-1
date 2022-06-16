import './App.css';
import React,{Component, } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PlayerDetail from './pages/PlayerDetail/PlayerDetail';
import Summary from './pages/Summary/Summary';
import ScoreBoard from './pages/ScoreBoard/ScoreBoard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players : {}
    }
    this.playerDetails = React.createRef();
  }
  setPlayers= (team_a, team_b)=>{
    const tapd = team_a
    const tbpd = team_b
    console.log(tapd, tbpd)
    const players_data = {
      team_a: tapd,
      team_b: tbpd
    }
    this.setState({players: players_data})

  }
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PlayerDetail setPlayers={this.setPlayers} ref={this.playerDetails}/>} />
            <Route path="ScoreBoard" element={<ScoreBoard players={this.state.players} />} />
            <Route path="Summary" element={<Summary />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
