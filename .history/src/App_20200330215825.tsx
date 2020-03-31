import React, { useReducer } from "react";
import { DispatchContext, TodosContext } from "./context/todo.context";
import NotesApp from "./components/NotesApp";
import todoReducer from "./reducers/todo.reducer";
import { IState } from "./actions/IState";
import { useLocalStorageReducer } from "./hooks/useLocalStorageReducer";
import TodoApp from "./TodoApp";

const defaultTodos: IState = {
  notes: [
    { id: "1", task: "Mow the lawn using goats", completed: false },
    { id: "2", task: "Release lady bugs into garden", completed: true }
  ]
};
const App = () => <TodoApp />;

export default App;
