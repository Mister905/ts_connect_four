import Row from "../row/Row";
import { useAppSelector } from "../../store/hooks";

function Game() {
  
  const board = useAppSelector((state) => state.game.board);

  return (
    <div>
      <table>
        <tbody>
          {board.map((row, i) => {
            return <Row key={i} row={row} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Game;
