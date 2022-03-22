import { Action_Type } from "../action_types";

interface I_game {
  type: Action_Type.NEW_GAME;
}

export type Game_Action = I_game;
