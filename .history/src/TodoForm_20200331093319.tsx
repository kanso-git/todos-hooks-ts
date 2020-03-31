import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import useTextInputState from "./hooks/useInputState";
import { DispatchContext } from "./context/todo.context";
import { EActionType } from "./actions/IAction";

const TodoForm = () => {
  const [value, handleChange, reset] = useTextInputState("");
  const dispatch = useContext(DispatchContext);
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: EActionType.ADD, payload: { task: value } });
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
