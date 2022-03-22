import { combineReducers } from "redux";
import game_reducer from "./game_reducer";

const reducers = combineReducers({
  game: game_reducer,
});

export default reducers;
