import { createContext, Dispatch } from "react";
import { IState } from "../actions/IState";
import IAction from "../actions/IAction";
import todoReducer from "../reducers/todo.reducer";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";
import NotesApp from "../components/NotesApp";
const defaultTodos: IState = {
  notes: [
    { id: "1", task: "Mow the lawn using goats", completed: false },
    { id: "2", task: "Release lady bugs into garden", completed: true }
  ]
};
export const TodosContext = createContext<Partial<IState>>({});
export const DispatchContext = createContext<Partial<Dispatch<IAction>>>({});

export function TodosProvider(props: any) {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    todoReducer
  );
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
