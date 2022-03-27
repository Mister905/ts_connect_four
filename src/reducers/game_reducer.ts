import { Game_Action } from "../action_intefaces/game_interface";
import { Action_Type } from "../action_types";

interface I_initial_state {
  player_1: number;
  player_2: number;
  current_player: number;
  board: (number[] | null[])[];
  game_over: boolean;
  message: string;
}

const initial_state: I_initial_state = {
  player_1: 1,
  player_2: 2,
  current_player: 1,
  board: [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
  ],
  game_over: false,
  message: "",
};

export default function (
  state: I_initial_state = initial_state,
  action: Game_Action
): I_initial_state {
  switch (action.type) {
    case Action_Type.NEW_GAME:
      return initial_state;

    case Action_Type.TOGGLE_PLAYER:
      return {
        ...state,
        current_player: action.current_player,
        board: action.board,
      };

    case Action_Type.UPDATE_MESSAGE:
      return {
        ...state,
        message: action.message,
      };

    case Action_Type.END_GAME:
      return {
        ...state,
        game_over: true,
        message: action.message,
        board: action.board,
      };
    default:
      return state;
  }
}
