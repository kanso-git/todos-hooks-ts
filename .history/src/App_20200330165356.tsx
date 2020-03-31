import React, { useReducer } from "react";
import AppContext from "./context/appContext";
import ActionContext from "./context/actionContext";
import NotesApp from "./components/NotesApp";
import { appReducer, dispatchMiddleware } from "./reducers/appReducer";
import { state0 } from "./actions/IState";

const App = () => {
  const [state, dispatch] = useReducer(appReducer, state0);
  return (
    <AppContext.Provider value={{ notes: state.notes }}>
      <ActionContext.Provider value={dispatchMiddleware(dispatch)}>
        <NotesApp />
      </ActionContext.Provider>
    </AppContext.Provider>
  );
};

export default App;
