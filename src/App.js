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
import MobileOne from './pages/MobileStart/MobileOne';
import MobileController from './pages/MobileStart/MobileController';
import TopBar from './components/TopBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import wavy from '../src/components/Images/waves.svg';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1E90FF',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players : {
        team_a:{
          team_name: "teamA",
          playing_5: [{number:1,name:"player1"},{number:2,name:"player2"},{number:3,name:"player3"},{number:4,name:"player4"},{number:5,name:"player5"}],
          extras: [{number:1,name:"player6"},{number:1,name:"player7"},{number:1,name:"player8"}]
        },
        team_b:{
          team_name: "teamB",
          playing_5: [{number:1,name:"player1"},{number:2,name:"player2"},{number:3,name:"player3"},{number:4,name:"player4"},{number:5,name:"player5"}],
          extras: [{number:1,name:"player6"},{number:1,name:"player7"},{number:1,name:"player8"}]
        }
      }
    }
    this.playerDetails = React.createRef();
  }
  setPlayers= (team_a, team_b)=>{
    const tapd = team_a
    const tbpd = team_b
    console.log(tapd, tbpd)
    const players_data = {
      team_a: tapd.team_a,
      team_b: tbpd.team_b
    }
    this.setState({players: players_data})

  }
  render(){
    return (
      <ThemeProvider theme={theme}>
      <div className="App">
        <TopBar/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PlayerDetail setPlayers={this.setPlayers} ref={this.playerDetails}/>} />
            <Route path="ScoreBoard" element={<ScoreBoard players={this.state.players} />} />
            <Route path="Summary" element={<Summary />} />
            <Route path="MobileOne" element={<MobileOne />} />
            <Route path="MobileController" element={<MobileController players={this.state.players}/>} />
          </Routes>
        </BrowserRouter>
        <img src={wavy} className="wavy" height="1%" width="100%" alt="wavy" />
      </div>
      </ThemeProvider>
    );
  }

}

export default App;
