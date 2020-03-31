import { uuid } from "uuidv4";
import { IState } from "../actions/IState";
import IAction from "../actions/IAction";
const reducer = ({ notes }: IState, action: IAction) => {
  switch (action.type) {
    case "ADD":
      return {
        notes: [
          ...notes,
          { id: uuid(), task: action.payload.task, completed: false }
        ]
      };
    case "REMOVE":
      return notes.filter(todo => todo.id !== action.payload.id);
    case "TOGGLE":
      return {
        notes: notes.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case "EDIT":
      return {
        notes: notes.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, task: action.payload.newTask }
            : todo
        )
      };
    default:
      return {
        notes
      };
  }
};
export default reducer;
