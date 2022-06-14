import './App.css';
import PlayerDetail from './pages/PlayerDetail/PlayerDetail';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Summary from './pages/Summary/Summary';
import ScoreBoard from './pages/ScoreBoard/ScoreBoard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PlayerDetail />} />
          <Route path="ScoreBoard" element={<ScoreBoard />} />
          <Route path="Summary" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
