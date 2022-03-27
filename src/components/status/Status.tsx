import { useAppSelector } from "../../store/hooks";
import { useDispatch } from "react-redux";

function Status() {
  const dispatch = useDispatch();

  const current_player = useAppSelector((state) => state.game.current_player);

  const message = useAppSelector((state) => state.game.message);

  return (
    <div className="row">
      <div className="col m8 offset-m2 game-status-col">
        <div className="row">
          <div className="col m12">
            <h2 className="game-status-heading center-align game-font">
              Game Status
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col m12 center-align">
            <div className="message-heading game-font">Message:</div>
            <div className="message-output game-font">{message}</div>
          </div>
        </div>

        <div className="row">
          <div className="col m12">
            <div className="player-container">
              <span className="game-font">Player 1</span>
              <a className="btn-floating btn-player waves-effect waves-light red player-marker-btn"></a>
              <div className="current-player-arrow-container">
                {current_player === 1 && (
                  <span className="arrow">
                    <i className="material-icons dp48">arrow_back</i>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col m12">
            <div className="player-container">
              <span className="game-font">Player 2</span>
              <a className="btn-floating btn-player waves-effect waves-light yellow player-marker-btn"></a>
              <div className="current-player-arrow-container">
                {current_player === 2 && (
                  <span className="arrow">
                    <i className="material-icons dp48">arrow_back</i>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col m12 center-align">
            <button
              className="waves-effect waves-light btn game-font btn-new-game"
              onClick={() => {
                dispatch({
                  type: "new_game",
                  // board: generate_new_board(),
                });
              }}
            >
              New Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
