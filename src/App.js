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
        players : this.setPlayers
      }
      this.playerDetails = React.createRef();
    }
  setPlayers(){
    const tapd = this.playerDetails.current.state.team_a
    const tbpd = this.playerDetails.current.state.team_b
    console.log(tapd, tbpd)
    return({
      team_a: tapd,
      team_b: tbpd
    })
  }
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PlayerDetail ref={this.playerDetails}/>} />
            <Route path="ScoreBoard" element={<ScoreBoard plsyaer={this.state.players} />} />
            <Route path="Summary" element={<Summary />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
