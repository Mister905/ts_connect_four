import { Dispatch } from "redux";
import { Game_Action } from "../action_intefaces/game_interface";
import { Action_Type } from "../action_types";

export const new_game = () => (dispatch: Dispatch<Game_Action>) => {
  dispatch({
    type: Action_Type.NEW_GAME,
  });
};

export const toggle_player =
  (next_player: number, board: (number[] | null[])[]) =>
  (dispatch: Dispatch<Game_Action>) => {
    dispatch({
      type: Action_Type.TOGGLE_PLAYER,
      current_player: next_player,
      board,
    });
  };

export const update_message =
  (message: string) => (dispatch: Dispatch<Game_Action>) => {
    dispatch({
      type: Action_Type.UPDATE_MESSAGE,
      message,
    });
  };

export const end_game =
  (message: string, board: (number[] | null[])[]) =>
  (dispatch: Dispatch<Game_Action>) => {
    dispatch({
      type: Action_Type.END_GAME,
      message,
      board,
    });
  };
