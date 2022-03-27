import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { check_for_win } from "../../utils/index";
import {
  toggle_player,
  update_message,
  end_game,
} from "../../action_creators/game_actions";
import { useDispatch } from "react-redux";

interface I_props {
  value: number | null;
  cell_index: number;
}

function Cell({ value, cell_index }: I_props) {

  const dispatch = useDispatch();

  const game_over = useAppSelector((state) => state.game.game_over);

  const board = useAppSelector((state) => state.game.board);

  const current_player = useAppSelector((state) => state.game.current_player);

  const player_1 = useAppSelector((state) => state.game.player_1);

  const player_2 = useAppSelector((state) => state.game.player_2);

  function play(c: number) {

    if (!game_over) {
      
      let cloned_board = board.map(function (row) {
        return row.slice();
      });

      //check if cell is taken by starting at the bottom row and working up
      for (let r = 5; r >= 0; r--) {
        if (!cloned_board[r][c]) {
          cloned_board[r][c] = current_player;
          break;
        }
      }

      let result = check_for_win(cloned_board);

      if (result === player_1) {
        dispatch(end_game("Player 1 wins!", cloned_board));
      } else if (result === player_2) {
        dispatch(end_game("Player 2 wins!", cloned_board));
      } else if (result === "draw") {
        dispatch(end_game("Game ends in a draw!", cloned_board));
      } else {
        const next_player = current_player === player_1 ? player_2 : player_1;
        dispatch(toggle_player(next_player, cloned_board));
      }
    } else {
      dispatch(update_message("Game Over. Please start a new game."));
    }
  }

  let cell_colour = "white-circle";

  if (value === 1) {
    cell_colour = "red-circle";
  } else if (value === 2) {
    cell_colour = "yellow-circle";
  }

  return (
    <td>
      <div
        className="game-cell"
        onClick={() => {
          play(cell_index);
        }}
      >
        <div className={cell_colour}></div>
      </div>
    </td>
  );
}

export default Cell;
