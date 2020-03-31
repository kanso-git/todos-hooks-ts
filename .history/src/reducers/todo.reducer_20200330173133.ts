import { uuid } from "uuidv4";
import { IState, INote } from "../actions/IState";
import IAction from "../actions/IAction";
const reducer = (state: INote[], action: IAction) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: uuid(), task: action.payload.task, completed: false }
      ];
    case "REMOVE":
      return state.filter(todo => todo.id !== action.payload.id);
    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "EDIT":
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, task: action.payload.newTask }
          : todo
      );
    default:
      return state;
  }
};
export default reducer;
