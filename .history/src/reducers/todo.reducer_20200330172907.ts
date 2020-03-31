import uuid from "uuid/v4";
import { IState, INote } from "../actions/IState";
import IAction from "../actions/IAction";
const reducer = (state: INote[], action: IAction) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuid(), task: action.task, completed: false }];
    case "REMOVE":
      return state.filter(todo => todo.id !== action.id);
    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "EDIT":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo
      );
    default:
      return state;
  }
};
export default reducer;
