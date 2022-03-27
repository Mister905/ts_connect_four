import { Action_Type } from "../action_types";

interface I_new_game {
  type: Action_Type.NEW_GAME;
}

interface I_toggle_player {
  type: Action_Type.TOGGLE_PLAYER;
  current_player: number;
  board: (number[] | null[])[];
}

interface I_end_game {
  type: Action_Type.END_GAME;
  message: string;
  board: (number[] | null[])[];
}

interface I_update_message {
  type: Action_Type.UPDATE_MESSAGE;
  message: string;
}

export type Game_Action =
  | I_new_game
  | I_toggle_player
  | I_update_message
  | I_end_game;
