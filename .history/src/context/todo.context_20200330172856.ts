import React, { createContext } from "react";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";
import todoReducer from "../reducers/todo.reducer.js";
import { INote } from "../actions/IState";
const defaultTodos: INote[] = [
  { id: "1", task: "Mow the lawn using goats", completed: false },
  { id: "2", task: "Release lady bugs into garden", completed: true }
];
export const TodosContext = createContext({} as any[]);
export const DispatchContext = createContext({} as any);

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
