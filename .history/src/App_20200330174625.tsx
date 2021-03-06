import React, { useReducer } from "react";
import { DispatchContext, TodosContext } from "./context/todo.context";
import ActionContext from "./context/actionContext";
import NotesApp from "./components/NotesApp";
import todoReducer from "./reducers/todo.reducer";
import { state0, INote } from "./actions/IState";
import { useLocalStorageReducer } from "./hooks/useLocalStorageReducer";

const defaultTodos: INote[] = [
  { id: "1", task: "Mow the lawn using goats", completed: false },
  { id: "2", task: "Release lady bugs into garden", completed: true }
];
const App = () => {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    { notes: defaultTodos },
    todoReducer
  );
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        <NotesApp />
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
};

export default App;
