// Components
import Game from "./components/game/Game";
import Status from "./components/status/Status";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col m12 center-align">
            <h1 className="white-text mt-25 game-font">Connect Four</h1>
          </div>
        </div>
        <div className="row">
          <div className="col m8 offset-m2 board-col">
            <Game />        
          </div>
        </div>
        <Status />
      </div>
    </div>
  );
}

export default App;
