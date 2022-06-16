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
import { render } from '@testing-library/react';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {}
      this.playerDetails = React.createRef();
    }

  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PlayerDetail ref={this.playerDetails}/>} />
            <Route path="ScoreBoard" element={<ScoreBoard />} />
            <Route path="Summary" element={<Summary />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
