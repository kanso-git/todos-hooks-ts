import React, { createContext } from "react";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";
import todoReducer from "../reducers/todo.reducer.js";
import { INote } from "../actions/IState";
import IAction from "../actions/IAction";
type Dispatch<A> = (value: A) => void;
type IActionContext = Dispatch<IAction>;

const defaultTodos: INote[] = [
  { id: "1", task: "Mow the lawn using goats", completed: false },
  { id: "2", task: "Release lady bugs into garden", completed: true }
];

export const TodosContext = createContext({} as INote[]);
export const DispatchContext = createContext({} as IActionContext);
