import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import {useTextInputState} from "./hooks/useInputState";
import { DispatchContext } from "./context/todos.context";

const TodoForm = () => {
    console.log("render Form");
    const [value, handleChange, reset] = useTextInputState("");
    const dispatch = useContext(DispatchContext);
    return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "ADD", task: value });
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>>
    )
}

export default TodoForm
